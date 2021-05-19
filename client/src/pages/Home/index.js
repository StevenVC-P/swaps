import React, { useState, useEffect } from "react";
import MainFeed from "../../components/MainFeed";
import Filterbar from "../../components/Filterbar";
// import Favbar from "../../components/Favbar";
import API from "../../utils/API";

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
                <h2>Search Results</h2>
                    {productState.map(userPost => (
                        <MainFeed
                        key={userPost._id}
                        productName={userPost.productName}
                        category={userPost.category}
                        review={userPost.review}
                        url={userPost.url}
                        />
                    ))}
                    </div>

                    <div className = "col-sm">
                    <h3>My Favorites</h3>
                {/* <Favbar /> */}
            
                </div>


            </div>
            </div>
        )
}

export default Home;