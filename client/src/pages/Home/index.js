import React, { useState, useEffect } from "react";
import MainFeed from "../../components/MainFeed";
import Filterbar from "../../components/Filterbar";
import { Link } from "react-router-dom";
// import Favbar from "../../components/Favbar";
import API from "../../utils/API";
import "./style.css"

function Home () {
    const [productState, setProductState] = useState([])

    useEffect(()=>{


        API.getProducts()
        .then(res => {
            console.log(res)
            setProductState(res.data)
        })
    }, []);

        return(
           <div className="container-fluid">

            <div className ="row">
                <div className = "col-sm">
                <h3>Products</h3>
                <Filterbar />
                
                </div>

                <div className = "col-sm">
                <div className = "search">
                <h2>Search Results</h2>
                    {productState.map(userPost => (
                        <Link to={`/product/${userPost._id}`}>
                        <MainFeed
                        key={userPost._id}
                        productName={userPost.productName}
                        category={userPost.category}
                        review={userPost.review}
                        url={userPost.url}
                        />
                        </Link>
                    ))}
                    </div>
                    </div>
                    <div className = "col-sm">
                    <h3>My Favorites</h3>
                {/* <Favbar /> */}
            
                </div>


            </div>
            
        )
}

export default Home;