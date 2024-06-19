package gopreact

import (
	"fmt"
	"html/template"
	"io"
	"os"
	"path/filepath"

	esbuild "github.com/evanw/esbuild/pkg/api"
	v8 "rogchap.com/v8go"
)

var commonBuildOptions esbuild.BuildOptions = esbuild.BuildOptions{
	Bundle:            true,
	MinifyIdentifiers: false,
	Write:             true,
	Target:            esbuild.ES2020,
	Platform:          esbuild.PlatformBrowser,
	JSX:               esbuild.JSXAutomatic,
	JSXImportSource:   "preact",
	Format:            esbuild.FormatIIFE,
	GlobalName:        "gopreact",
	Loader: map[string]esbuild.Loader{
		".js": esbuild.LoaderJSX,
	},
}

type GoPreactApp struct {
	clientEntry        string
	clientDist         string
	clientBundleOutput string
	serverBundleOutput string
	rootTemplate       *template.Template
	serverAssetDest    string
	currentIsolate     *v8.Context
	rootScript         *v8.UnboundScript
}

type GoPreactAppOptions struct {
	ClientEntry     string
	ClientDist      string
	RootTemplate    []byte
	ServerAssetDest string
}

func NewGoPreactApp(
	options GoPreactAppOptions,
) *GoPreactApp {

	t, _ := template.New("root").Parse(string(options.RootTemplate))

	goPreact := &GoPreactApp{
		clientEntry:     options.ClientEntry,
		clientDist:      options.ClientDist,
		rootTemplate:    t,
		serverAssetDest: options.ServerAssetDest,
	}
	goPreact.currentIsolate = v8.NewContext()
	return goPreact
}

func (gp *GoPreactApp) BundleClient() error {
	webAssetOptions := commonBuildOptions
	webAssetOptions.EntryPoints = []string{gp.clientEntry}
	webAssetOptions.Metafile = true
	webAssetOptions.Outfile = filepath.Join(gp.clientDist, "bundle.js")
	buildResult := esbuild.Build(webAssetOptions)
	if len(buildResult.Errors) > 0 {
		return fmt.Errorf("failed to build client with errors: %v", buildResult.Errors)
	}
	gp.clientBundleOutput = webAssetOptions.Outfile
	return nil
}

func (gp *GoPreactApp) BundleServer() (err error) {
	serverAssetOptions := commonBuildOptions
	serverAssetOptions.EntryPoints = []string{gp.clientEntry}
	serverAssetOptions.Outfile = filepath.Join(gp.serverAssetDest, "bundle.js")
	serverModBuildResult := esbuild.Build(serverAssetOptions)
	if len(serverModBuildResult.Errors) > 0 {
		return fmt.Errorf("failed to build client with errors: %v", serverModBuildResult.Errors)
	}
	gp.serverBundleOutput = serverAssetOptions.Outfile

	outputSoureCode, err := os.ReadFile(gp.serverBundleOutput)
	if err != nil {
		return err
	}

	gp.rootScript, err = gp.currentIsolate.Isolate().CompileUnboundScript(
		string(outputSoureCode),
		"root.js",
		v8.CompileOptions{},
	)
	if err != nil {
		return
	}
	return nil
}

func (gp *GoPreactApp) Bundle() error {
	if err := gp.BundleClient(); err != nil {
		return err
	}
	if err := gp.BundleServer(); err != nil {
		return err
	}
	return nil
}

func (gp *GoPreactApp) RenderHTML(w io.Writer, url string) error {
	_, err := gp.rootScript.Run(gp.currentIsolate)
	if err != nil {
		return err
	}
	val, err := gp.currentIsolate.RunScript("gopreact.preload('"+url+"')", "main.js")
	if err != nil {
		return err
	}

	gp.rootTemplate.Execute(w, struct {
		App template.HTML
	}{
		App: template.HTML(val.String()),
	})
	return nil
}
