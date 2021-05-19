import React from "react";


function MainFeed (props) {
  return (
    <div className="list-group">
    <a href={props.url} target = "_blank" rel="noopener noreferrer" className="item">
    
    <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{props.type} {props.name}</h5>
        </div>
        </a>
        <div>
        <p>{props.review}</p>
        <small>3 days ago</small>
        </div>
      
      
    </div>
  );
}
export default MainFeed;