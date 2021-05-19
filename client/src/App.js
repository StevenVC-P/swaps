import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import Landing from './pages/Landing';
import Home from './pages/Home';
import Post from './pages/Submitpost';
import Footer from './components/Footer';
import Header from "./components/Header";
import './App.css';
import Product from './pages/Product';
import SignUp from "./pages/SignUp";
import Submitpost from "./pages/Submitpost"

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
    <div>
     
      <Router>
      <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
      <Switch>
      <Route exact path="/signup" component={SignUp}  />
      <Route exact path="/home" component={Home} />
        { loggedIn === false ? (
          <Landing setLoggedIn={setLoggedIn} />
        ) : (
              <>
                <Route exact path="/swap" component={Home} />
                <Route exact path="/" component={Home} />
                <Route exact path="/post" component={Post} />
                <Route exact path="/product" component={Product}/>
                <Route exact path="/submitpost" component={Submitpost} />
              </>
        )}
        </Switch>
      </Router>
      <Footer />
    </div>

  );
};

export default App;
