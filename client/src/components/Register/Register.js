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
      
        <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input type="email" name="username" onChange={handleInputChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" name="email" onChange={handleInputChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" name="password" onChange={handleInputChange} class="form-control" id="exampleInputPassword1"/>
            </div>
                <button type="submit" onClick={handleFormSubmit} className="btn btn-primary">Submit</button>
        </form>

     
  )
}