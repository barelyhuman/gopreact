import { hydrate } from "preact";
import { renderToString } from "preact-render-to-string";
import { Router } from "preact-router";
import { useState } from "preact/hooks";

const App = ({ url }) => {
  return (
    <Router url={url}>
      <About path="/about" />
      <Home path="/" />
    </Router>
  );
};

function Home() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

function About() {
  return <h1>About</h1>;
}

export const render = () => hydrate(<App />, document.getElementById("app"));

export const preload = (url) => {
  return renderToString(<App url={url} />);
};
