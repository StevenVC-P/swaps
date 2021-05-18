import React from "react";


function ProductCard(props) {
  return (
    <div className="card text-center">
            <div className="card-header">
              Category
            </div>
            <div className="card-body">
              <h5 className="card-title">Product</h5>
              <p className="card-text">Review</p>
              <a href="#" className="btn btn-primary">Purchase</a>
              <a href="#" className="btn btn-primary">Review</a>
              <a href="#" className="btn btn-primary">Favorite</a>
            </div>
            <div className="card-footer text-muted">
              2 days ago
            </div>
 
          </div>
  );
}
export default ProductCard;