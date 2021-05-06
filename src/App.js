import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lidya's Dictionary</h1>
      </header>

      <main>
        <Dictionary />
      </main>

      <footer className="text-centered">
        <h5>
          <a
            href="https://github.com/lidya-toscano/dictionary-project"
            target="nonreferrer"
          >
            Open-Source Code
          </a>{" "}
          by{" "}
          <a href="https://www.lidyatoscano.com/" target="nonreferrer">
            Lidya Toscano
          </a>
        </h5>
      </footer>
    </div>
  );
}

export default App;
