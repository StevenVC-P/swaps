import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from "../../utils/API";
import "./style.css";

export default function Register( { setLoggedIn } ) {
    const [formObject, setFormObject] = useState({})
    const history = useNavigate();

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.username && formObject.password) {
        API.saveUser({
            username: formObject.username,
            email: formObject.email,
            password: formObject.password
        })
            .then(res => {
                console.log('Register Res', res)
                if(res.status === 200){
                    setLoggedIn(true)
                    console.log("Success! Logged in!")
                    history("/home");
                } else {
                    console.log(res.status)
                }
                
            })
            .catch(err => console.log("REGISTRATION ERROR", err));
        }
    };

  return(
      
        <form className = "signUp">
            <p className="psignUp">Sign Up</p>
            <div className="form-group">
                <input type="email" name="username" placeholder="Name"onChange={handleInputChange} className="control" aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <input type="email" name="email" placeholder="Email Adress"onChange={handleInputChange} className="control"  aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <input type="password" name="password" placeholder="Password" onChange={handleInputChange} className="control" />
            </div>
                <button type="submit" onClick={handleFormSubmit} className="btn btn-primary">Submit</button>      
        </form>
  )

}

