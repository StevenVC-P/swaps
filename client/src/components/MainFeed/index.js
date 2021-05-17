import React from "react";
import Comment from "../Comment"

function MainFeed (props) {
  return (
    <div class="list-group">
    <a href={props.url} target = "_blank" rel="noopener noreferrer" class="list-group-item list-group-item-action active">
    
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{props.type} {props.name}</h5>
        </div>
        </a>
        <div>
        <p>{props.review}</p>
        <small>3 days ago</small>
        </div>
      <Comment />
    </div>
  );
}
export default MainFeed;