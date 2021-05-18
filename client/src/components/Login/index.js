import React, { useState } from 'react';
import './style.css';
import Register from "../Register";
import API from "../../utils/API";

export default function Login({setLoggedIn}) {



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

  return(
  
    <form className="px-4 py-3">
        <div className="form-group">
            <input type="email" className="form-control" name="email" onChange={handleInputChange} placeholder="Email"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" name="password" onChange={handleInputChange} placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Sign in</button>
    </form>
  
  )
}