import React, { useState } from 'react';
import './Login.css';
import Regsiter from "../Register/Register";


export default function Login({setLoggedIn}) {


const [formObject, setFormObject] = useState({})

function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  return(
      <>
        <div className="login-wrapper">
            <h1>Please Log In</h1>
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
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
       <Regsiter setLoggedIn={setLoggedIn} />
    </>
  )
}