import "./App.css";
import "@aws-amplify/ui-react/styles.css"; //ここを追加

import { withAuthenticator } from "@aws-amplify/ui-react"; //ここを追加
import { Amplify } from "aws-amplify"; //ここを追加

import aws_exports from "./aws-exports"; //ここを追加
import logo from "./logo.svg";

Amplify.configure(aws_exports); //ここを追加

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App); //ここを変更
