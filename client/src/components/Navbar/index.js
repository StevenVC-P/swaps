import React from "react";
import Login from "../Login";

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