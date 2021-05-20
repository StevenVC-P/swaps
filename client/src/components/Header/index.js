import React from "react";
import Navbar from "../Navbar";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./style.css";



function Header({setLoggedIn, loggedIn}) {

  function handleFormSubmit(event) {
    event.preventDefault();
    API.logoutUser()
        .then(res => {
            console.log('LOG OUT', res)
            if(res.status === 204){
                setLoggedIn(false)
                console.log("Success! Logged OUT!")
            } else {
                console.log("FAIL", res.status)
            }
            
        })
        .catch(err => console.log("LOGOUT ERROR", err));
    
};

  return (
    
    <header>    
       
        <Link to="/home"> <button className="btn btn-outline-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Explore
        </button>
        </Link>
      
    { loggedIn === false ? (
      
        <Navbar setLoggedIn={setLoggedIn}/>
      
    ) : (
      <>
      <Link to="/submitpost"> <button className="btn btn-outline-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Add Product
        </button>
      </Link>
      <button onClick={handleFormSubmit} className="btn btn-outline-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Sign Out
        </button>
      

      <b>Swap</b>
      </>
    )}
 
  </header>
 
  )

}

export default Header;