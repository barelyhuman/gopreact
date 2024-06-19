package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"github.com/barelyhuman/gopreact"
)

func main() {
	rootTemplateDef, err := os.ReadFile("./templates/index.html")
	bail(err)

	preact := gopreact.NewGoPreactApp(
		gopreact.GoPreactAppOptions{
			ClientEntry:     "./client/main.js",
			ClientDist:      "./static",
			RootTemplate:    rootTemplateDef,
			ServerAssetDest: "./.server",
		},
	)

	bail(preact.Bundle())

	rootTemplate := template.New("rootTemplate")
	rootTemplate.Parse(string(rootTemplateDef))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if strings.HasPrefix(r.URL.Path, "/static") {
			path := r.URL.Path
			http.ServeFile(w, r, filepath.Join(".", path))
			return
		}
		if err := preact.RenderHTML(w, r.URL.Path); err != nil {
			w.Header().Set("Content-Type", "text/html")
			fmt.Fprintf(w, "Failed to render because of error:%v", err)
			return
		}
	})

	log.Println("Listening on :3000")
	http.ListenAndServe(":3000", nil)
}

func bail(err error) {
	if err != nil {
		log.Fatal(err)
	}
}
