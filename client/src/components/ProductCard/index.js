import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Comment from "../Comment"
import API from "../../utils/API";


function ProductCard(props) {
  // const [isLoading, setIsLoading] = useState(true);
  const [readyRender, setReadyRender] = useState(false);
  const [data, setData] = useState();
  const {productId} = useParams()
  const [count, setCount] = useState(0);


  const submitcomment = (data) => {
    API.addComment(data)
    .then(res => {
        console.log('Comment Res', res)
        if(res.status === 200){
            console.log("SUCCESS! Comment Added")
        } else {
            console.log("FAIL", res.status)
        }
        setCount(+1)
    })
    .catch(err => console.log("ERROR ADDING COMMENT", err))
  }


  useEffect(() => {
    API.getproduct(productId)
    .then(res => {
      console.log("product data:", res.data)
      setData(res.data)
      setReadyRender(true)
    })
    .catch(err => console.log(err));
  }, [count])
  
 

  return (
    <>
     { readyRender === false ? (
      <p>loading</p>
      ) : (
        <>
          <div className="card text-center">
            <div className="card-header">
            <h2 className="card-title">{data.productName}</h2>
            </div>
            <div className="card-body">
              
              <p className="card-text">"{data.review}"</p>
              
            </div>
            <div className="card-footer text-muted">
            <div className="purchase">
            <a href={data.url} target = "_blank" rel="noopener noreferrer"className="btn btn-primary">Purchase</a>
            </div>
            <div className="favorite">
            <a href="#" className="btn btn-primary">Favorite ♡</a>
            </div>
            </div>
            
          </div>
          <div>
            {data.comments.map(comment => (
              <div>
                <p className= "script" key={comment._id}>"{comment.comment}"</p>
              </div>
            ))}
          </div>
          
          <Comment submitcommenta={submitcomment} />
          
        </>
      )}
  </>
  );
}
export default ProductCard;