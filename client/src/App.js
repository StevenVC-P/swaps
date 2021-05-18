import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import Landing from './pages/Landing';
import Home from './pages/Home';
// import Post from './pages/Post';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

import Header from "./components/Header";
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
    <div>
     <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
      <Router>

        { loggedIn === false ? (
          <Landing setLoggedIn={setLoggedIn} />
        ) : (

            <Switch>
              
              <Wrapper>
                <Route exact path="/swap" component={Home} />
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/post" component={Post} /> */}
              </Wrapper>
              
            </Switch>
          
        )}
        
      </Router>
      <Footer />
    </div>

  );
};

export default App;
