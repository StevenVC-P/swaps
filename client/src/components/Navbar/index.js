import React from "react";
import Login from "../Login";
import "./style.css"

function Navbar({setLoggedIn}) {
  return (
    <>
       <nav className="nav justify-content-end">
              
              <Login setLoggedIn={setLoggedIn}/>   
          </nav>
    </>
  );
}

export default Navbar;