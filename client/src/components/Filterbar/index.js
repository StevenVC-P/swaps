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
            <Checkbox name="Kitchen"
                onChange={handleCheckboxChange}/>
             <label htmlFor="kitchen"> Kitchen</label>
            </li>
            <li className="list-group-item">
            <Checkbox name="Bathroom"
                onChange={handleCheckboxChange}/>
             <label htmlFor="bathroom"> Bathroom </label>
            </li>
            <li className="list-group-item">
            <Checkbox name="Laundry"
                onChange={handleCheckboxChange}/>
             <label htmlFor="Laundry"> Laundry</label>
            </li>
            <li className="list-group-item">
            <Checkbox name="Personal"
                onChange={handleCheckboxChange}/>
             <label htmlFor="personal"> Personal </label>
            </li>
            <li className="list-group-item">
            <Checkbox name="Cleaning Products"
                onChange={handleCheckboxChange}/>
             <label htmlFor="Cleaning Products"> Cleaning Products </label>
            </li>
        </ul>
    )
}