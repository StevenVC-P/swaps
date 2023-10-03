import React from "react";

export const Checkbox = props => {
    return (
        <li className="list-group-item">
            <input key={props.id} onClick={props.handleCheckChildElement} type="checkbox" value={props.value} /> {props.value}
        </li>
    )
}


export default Checkbox;