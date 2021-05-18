import React from "react";
import Navbar from "../Navbar";

function Header({setLoggedIn}) {
  return (
    <header>    
    
        <div className="dropdown">
            <button className="btn btn-outline-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Explore
            </button>
           
        </div>
      <Navbar setLoggedIn={setLoggedIn}/>
        
    </header>
  )

}

export default Header;