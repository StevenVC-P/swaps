import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './style.css';
import API from "../../utils/API";

export default function Login({setLoggedIn}) {
    const location = useLocation();
    const isSignupPage = location.pathname === "/signup";
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.email && formObject.password) {
        API.loginUser({
            email: formObject.email,
            password: formObject.password
        })
            .then(res => {
                console.log('Login Res', res)
                if(res.status === 200){
                    setLoggedIn(true)
                    console.log("Success! Logged in!")
                } else {
                    console.log("FAIL", res.status)
                }
                
            })
            .catch(err => console.log("LOGIN ERROR", err));
        }
    };

  return (
    <div className="signIn">
      {!isSignupPage && (
        <Link to="/signup">
          <button className="btn btn-outline-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Create Account
          </button>
        </Link>
      )}
      <form className="px-4 py-3 input-group">
        <input type="email" className="trol" name="email" onChange={handleInputChange} placeholder="Email" />
        <input type="password" className="trol" name="password" onChange={handleInputChange} placeholder="Password" />
        <span className="input-group-addon"></span>
        <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>
          Sign in
        </button>
      </form>
    </div>
  );
}