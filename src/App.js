import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <div className="App">

        Google Cloud Platform
        <button onClick={func1}>Button1</button>
        <h1 id="h1" />
        <Login />
      </div>
    );
  }
}
function func1() {
  document.getElementById("h1").innerHTML = "AWS";
}

export default App;
