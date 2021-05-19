import React, { useState } from "react";

function MainFeed (props) {
//   const [fav, setFav] = useState({
//     favorite: false
//   });

  return (
    <div className="list-group">
      {/* <button className="btn" onClick={setFav({...fav, favorite: true})}>Add to Favorites!</button> */}

      <a href={props.url} target = "_blank" rel="noopener noreferrer" className="item">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{props.category} {props.productName}</h5>
        </div>
      </a>
      <div>
        <p className="review">{props.review}</p>
        <small>3 days ago</small>
      </div>
    </div>
  );
}
export default MainFeed;