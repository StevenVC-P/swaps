import React, { useState, useEffect } from "react";
import MainFeed from "../../components/MainFeed";
import Filterbar from "../../components/Filterbar";
import Favbar from "../../components/Favbar";
import products from "../../products.json";

function Home () {
    const [productState, setProductState] = useState([])

    useEffect(()=>{
        setProductState(products)
    }, []);

        return(
            <div className="container-fluid">
            <div className ="row">
                <div class = "col-sm">
                <h3>Products</h3>
                <Filterbar />
                
                </div>

                <div className = "col-sm">
                <h2>Search Results</h2>
                    {productState.map(userPost => (
                        <MainFeed
                        id={userPost.id}
                        name={userPost.name}
                        type={userPost.type}
                        review={userPost.review}
                        url={userPost.url}
                        />
                    ))}
                    </div>

                    <div className = "col-sm">
                    <h3>My Favorites</h3>
                <Favbar />
            
                </div>


            </div>
            </div>
        )
}

export default Home;