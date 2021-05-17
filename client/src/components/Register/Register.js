import React, { useState } from 'react';
import './Register.css';
import API from "../../utils/API";





export default function Login( { setLoggedIn } ) {


    const [formObject, setFormObject] = useState({})

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
                } else {
                    console.log(res.status)
                }
            })
            .catch(err => console.log("REGISTRATION ERROR", err));
        }
    };

  return(
      <>
        <div className="login-wrapper">
            <h1>Sign Up!</h1>
            <form>
            <label>
                <p>Username</p>
                <input type="text" name="username" onChange={handleInputChange}/>
            </label>
            <label>
                <p>Email</p>
                <input type="email" name="email" onChange={handleInputChange} />
            </label>
            <label>
                <p>Password</p>
                <input type="password" name="password" onChange={handleInputChange}/>
            </label>
            <div>
                <button type="submit" onClick={handleFormSubmit}>Submit</button>
            </div>
            </form>
        </div>
      
    </>
  )
}