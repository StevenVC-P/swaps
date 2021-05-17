import React from "react";
import Navbar from "../Navbar";

function Header(props) {
  return (
    <header>    
    
        <div class="dropdown">
            <button class="btn btn-outline-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Explore
            </button>
           
        </div>
      <Navbar />
        
    </header>
  )

}

export default Header;