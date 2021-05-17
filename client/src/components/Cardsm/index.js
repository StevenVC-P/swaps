import React from "react";
import "./style.css";
import Comment from "../Comment"

function Cardlg(props) {
  return (
    <div className="card">
      <strong className="header">{props.name} {props.type}</strong>
        <p>{props.review}</p>
      <a className="nav-link nav-itemb" href={props.url} target = "_blank" rel="noopener noreferrer"><strong>Page</strong></a> 
      <Comment />
    </div>
  );
}
export default Cardlg;