import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Comment from "../Comment"
import API from "../../utils/API";

function ProductCard(props) {
  // const [isLoading, setIsLoading] = useState(true);
  const [readyRender, setReadyRender] = useState(false);
  const [data, setData] = useState();
  const {productId} = useParams()
  
  useEffect(() => {
    API.getproduct(productId)
    .then(res => {
      console.log("product dara:", res.data.comments)
      setData(res.data)
      setReadyRender(true)
    })
    .catch(err => console.log(err));
  }, [])
  

  return (
    <>
     { readyRender === false ? (
      <p>loading</p>
      ) : (
        <>
          <div className="card text-center">
            <div className="card-header">
              Category
            </div>
            <div className="card-body">
              <h5 className="card-title">{data.productName}</h5>
              <p className="card-text">{data.review}</p>
              <a href={data.url} className="btn btn-primary">Purchase</a>
              <a href="#" className="btn btn-primary">Favorite</a>
            </div>
            <div className="card-footer text-muted"></div>
          </div>
          <div>
            {data.comments.map(comment => (
              <p key={comment._id}>{comment.comment}</p>
            ))}
          </div>
          <Comment />
        </>
      )}
  </>
  );
}
export default ProductCard;