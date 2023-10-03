import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import API from "./utils/API";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Post from "./pages/Submitpost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import Submitpost from "./pages/Submitpost";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faHeart);

function App() {
  const [loggedIn, setLoggedIn] = useState();
  const [readyRender, setReadyRender] = useState(false);

  useEffect(() => {
    API.currentSession().then((res) => {
      console.log(res);
      setLoggedIn(res.data);
      setReadyRender(true);
    });
  }, []);

  return (
    <>
      {readyRender === true && (
        <div>
          <Router>
            <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
            <Routes>
              <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn} />} />
              <Route path="/home" element={<Home />} />
              {loggedIn === false ? (
                <Route index element={<Landing setLoggedIn={setLoggedIn} />} />
              ) : (
                <>
                  <Route path="/swap" element={<Home />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/post" element={<Post />} />
                  <Route path="/product/:productId" element={<Product />} />
                  <Route path="/submitpost" element={<Submitpost />} />
                </>
              )}
            </Routes>
          </Router>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
