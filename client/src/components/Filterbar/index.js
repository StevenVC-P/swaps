import React, { useState } from "react";
import Checkbox from "../Checkbox";

export default function Filterbar(){

    const [filterObject, setFilterObject] = useState({})

    function handleCheckboxChange(event) {
        const { name, value }  = event.target;
        setFilterObject({...filterObject, [name]: value})
    };

    function filterMainFeed(event) {
        event.preventDefault();
    }

    return(
        <ul className="list-group">
            <li className="list-group-item">
            <Checkbox name="Cleaning"
                onChange={handleCheckboxChange}/>
             <label htmlFor="cleaning"> Cleaning </label>
            </li>
            <li className="list-group-item">
            <Checkbox name="Bathroom"
                onChange={handleCheckboxChange}/>
             <label htmlFor="bathroom"> Bathroom </label>
            </li>
            <li className="list-group-item">
            <Checkbox name="Kitchen"
                onChange={handleCheckboxChange}/>
             <label htmlFor="kitchen"> Kitchen </label>
            </li>
            <li className="list-group-item">
            <Checkbox name="Pet"
                onChange={handleCheckboxChange}/>
             <label htmlFor="Pet"> Pet </label>
            </li>
            <li className="list-group-item">
            <Checkbox name="Storage"
                onChange={handleCheckboxChange}/>
             <label htmlFor="Storage"> Storage </label>
            </li>
        </ul>
    )
}