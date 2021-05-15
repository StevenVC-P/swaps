import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Home from './pages/Home';
import Post from './pages/Post';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/swap" component={Landing} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/post" component={Post} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
