/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 孙日发
 * @Date: 2021-06-19 11:19:56
 * @LastEditors: 孙日发
 * @LastEditTime: 2021-06-19 13:18:11
 */
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

export default App;
