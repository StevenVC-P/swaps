import React from "react";


function ProductCard(props) {
  return (
    <div class="card text-center">
            <div class="card-header">
              Category
            </div>
            <div class="card-body">
              <h5 class="card-title">Product</h5>
              <p class="card-text">Review</p>
              <a href="#" class="btn btn-primary">Purchase</a>
              <a href="#" class="btn btn-primary">Review</a>
              <a href="#" class="btn btn-primary">Favorite</a>
            </div>
            <div class="card-footer text-muted">
              2 days ago
            </div>
 
          </div>
  );
}
export default ProductCard;