import React from "react";
import Navbar from "../Navbar";
import API from "../../utils/API";

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
    <>
    <header>    
        <button className="btn btn-outline-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Explore
        </button>

    { loggedIn === false ? (
      
        <Navbar setLoggedIn={setLoggedIn}/>
      
    ) : (
      <>
      <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Sign Out</button>
      <button type="submit" className="btn btn-primary">Add Product</button>
     
      </>
    )}

  </header>
    </>
  )

}

export default Header;