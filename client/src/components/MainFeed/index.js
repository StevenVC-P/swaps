import React, { useState } from "react";

function MainFeed (props) {


  return (
    <div className="list-group">
     
      <div className="d-flex w-100 justify-content-between">
      <a href={props.url} target = "_blank" rel="noopener noreferrer" className="item">
        
          <h5 className="mb-1">{props.productName} for your {props.category} </h5>
          </a>
        </div>
      
      <div>
        <p className="review">{props.review}</p>
        <small>{props.createdAt}</small>
      </div>
    </div>
  );
}
export default MainFeed;