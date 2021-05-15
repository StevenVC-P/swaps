import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState } from "react";
import API from './utils/API';



var DomParser = require('react-native-html-parser').DOMParser

function App() {

  const scrape = async () => {
    const res = await API.scrapeURL();
    const html = await res.data.body
    let doc = await new DomParser().parseFromString(html, "text/html")
    console.log(doc.getElementsByTagName('img'))
  }

  useEffect(() => {
    scrape()
}, [])


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

export default App;
