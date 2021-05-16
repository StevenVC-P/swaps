import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import Login from "./components/Login/Login";
import API from "./utils/API";


function App() {

  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    API.currentSession()
      .then(res => {
        console.log(res)
        setLoggedIn(res.data)
      })
  }, []);


  if(!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};


export default App;
