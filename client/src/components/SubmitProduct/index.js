import React from "react";


function SubmitProduct(props) {
  return (
    <form>
    <div class="form-group">
      <label for="exampleFormControlInput1">Add Product</label>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="product name"/>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">Category</label>
      <select class="form-control" id="exampleFormControlSelect1">
        <option>Kitchen</option>
        <option>Bathroom</option>
        <option>Laundry</option>
        <option>Personal</option>
        <option>Cleaning Products</option>
      </select>
    </div>
    <div class="form-group">
        <label for="exampleFormControlInput1">Link</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="copy and paste item link here"/>
      </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Review</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button type="button" class="btn btn-primary">Submit</button>
  </form>



  );
}
export default SubmitProduct;