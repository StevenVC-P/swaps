import React, { useState } from 'react';
import './style.css';
import API from "../../utils/API";
import "./style.css"

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

    <div className="signIn">
    <form className="px-4 py-3 input-group">
            
            <input type="email" className="form-control" name="email" onChange={handleInputChange} placeholder="Email"/>
            <span className="input-group-addon"></span>
           

            <input type="password" className="form-control" name="password" onChange={handleInputChange} placeholder="Password"/>
            <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Sign in</button>
            
    </form>
    </div>


  )
}