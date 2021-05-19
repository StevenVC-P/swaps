import React from "react";
import Navbar from "../Navbar";
import API from "../../utils/API";
import { Link, BrowserRouter as Router} from "react-router-dom";


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
        <Router>
        <Link to="/home"> <button className="btn btn-outline-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Explore
        </button>
      </Link>
      
    { loggedIn === false ? (
      
        <Navbar setLoggedIn={setLoggedIn}/>
      
    ) : (
      <>
      <Link to="/landing"> <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Sign Out</button>
        
        </Link>
      
      
      <Link to="/submitpost"> <button type="submit" className="btn btn-primary">Add Product</button>
        
      </Link>
      </>
    )}
 </Router>
  </header>
 
  )

}

export default Header;