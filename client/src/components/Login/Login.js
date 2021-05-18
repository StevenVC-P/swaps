import React, { useState } from 'react';
import './Login.css';
import Regsiter from "../Register";
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
      <>
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form>
            
            <label>
                <p>Email</p>
                <input type="email" name="email" onChange={handleInputChange} />
            </label>
            <label>
                <p>Password</p>
                <input type="password" name="password" onChange={handleInputChange}/>
            </label>
            <div>
                <button type="submit"onClick={handleFormSubmit}>Submit</button>
            </div>
            </form>
        </div>
       <Regsiter setLoggedIn={setLoggedIn} />
    </>
  )
}