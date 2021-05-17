
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import Landing from './pages/Landing';
import Home from './pages/Home';
import Post from './pages/Post';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Login from "./components/Login/Login";
import './App.css';

function App() {

  const [loggedIn, setLoggedIn] = useState();
  const [readyRender, setReadyRender] = useState(false);

  useEffect(() => {
    API.currentSession()
      .then(res => {
        console.log(res)
        setLoggedIn(res.data)
        setReadyRender(true)
        
      })
  }, []);

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <Router>

        { loggedIn === false ? (
          <Login setLoggedIn={setLoggedIn} />
        ) : (

            <Switch>
              <Navbar />
              <Wrapper>
                <Route exact path="/swap" component={Landing} />
                <Route exact path="/" component={Landing} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/post" component={Post} />
                </Wrapper>
              <Footer />
            </Switch>
          
        )}
        
      </Router>
    </div>

  );
};

export default App;
