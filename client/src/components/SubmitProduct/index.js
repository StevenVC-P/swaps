import React from "react";


function SubmitProduct(props) {




  
  return (
    <form>
    <div className="form-group">
      <label htmlFor="exampleFormControlInput1">Add Product</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="product name"/>
    </div>
    <div className="form-group">
      <label htmlFor="exampleFormControlSelect1">Category</label>
      <select className="form-control" id="exampleFormControlSelect1">
        <option>Kitchen</option>
        <option>Bathroom</option>
        <option>Laundry</option>
        <option>Personal</option>
        <option>Cleaning Products</option>
      </select>
    </div>
    <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Link</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="copy and paste item link here"/>
      </div>
    <div className="form-group">
      <label htmlFor="exampleFormControlTextarea1">Review</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button type="button" className="btn btn-primary">Submit</button>
  </form>



  );
}
export default SubmitProduct;