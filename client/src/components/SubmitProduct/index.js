import React, { useState } from 'react';
import API from "../../utils/API.js"
import "./style.css"

function SubmitProduct(props) {
const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})

    };

    function handleFormSubmit(event) {
      event.preventDefault();
      console.log(formObject)
      if (formObject.productName) {
      API.saveProduct({
          productName: formObject.productName,
          category: formObject.category,
          url: formObject.url,
          review: formObject.review
      })
          .then(res => {
              console.log('Product Res', res)
              if(res.status === 200){
                  // setProductState(true)
                  console.log("Success! Product submitted!")
              } else {
                  console.log(res.status)
              }
          })
          .catch(err => console.log("PRODUCT ERROR", err));
      }
  };


  return (
    <form className="submitProduct">
    <div className="form-group">
      <label htmlFor="exampleFormControlInput1">Add Product</label>
      <input type="text" className="form-control" name="productName" onChange={handleInputChange} id="exampleFormControlInput1" placeholder="Product Name"/>
    </div>
    <div className="form-group">
      <label htmlFor="exampleFormControlSelect1">Category</label>
      <select className="select-css" name="category" defaultValue="Select Category" onChange={handleInputChange} id="exampleFormControlSelect1">
        <option value="Select">Select Category</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Bathroom">Bathroom</option>
        <option value="Laundry">Laundry</option>
        <option value="Personal">Personal</option>
        <option value="Cleaning Products">Cleaning Products</option>
      </select>
    </div>
    <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Link</label>
        <input type="text" className="form-control" name="url" onChange={handleInputChange} id="exampleFormControlInput1" defaultValue="https://" placeholder="copy and paste item link here"/>
      </div>
    <div className="form-group">
      <label htmlFor="exampleFormControlTextarea1">Review</label>
      <textarea className="form-control" name="review" onChange={handleInputChange} id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button type="button" onClick={handleFormSubmit} className="btn btn-primary">Submit</button>
  </form>



  );
}
export default SubmitProduct;