import React from "react";
import Comment from "../Comment"

function ProductCard(props) {
  return (
    <>
    <div className="card text-center">
            <div className="card-header">
              Category
            </div>
            <div className="card-body">
              <h5 className="card-title">Product</h5>
              <p className="card-text">Review</p>
              <a href="#" className="btn btn-primary">Purchase</a>
              <a href="#" className="btn btn-primary">Favorite</a>
            </div>
            <div className="card-footer text-muted">
              
            </div>
 
          </div>
          
          <Comment />
        </>
  );
}
export default ProductCard;