import React from "react";
import "./style.css";

function Cardsm(props) {
  return (
    <div className="card">
      <strong className="header">{props.name} {props.type}</strong>
        <p>{props.review}</p>
      <a className="nav-link nav-itemb" href={props.url} target = "_blank" rel="noopener noreferrer"><strong>Page</strong></a> 

    </div>
  );
}
export default Cardsm;