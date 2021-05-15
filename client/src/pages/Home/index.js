import React, { useState, useEffect } from "react";
import Cardsm from "../../components/Cardsm";
import Filterbar from "../../components/Filterbar";
import Favbar from "../../components/Favbar";
import Wrapper from "../../components/Wrapper";
import products from "../../products.json";

function Home () {
    const [productState, setProductState] = useState([])

    useEffect(()=>{
        setProductState(products)
    }, []);

        return(
            <h1>
                <Filterbar />
                <Wrapper>
                    {productState.map(userPost => (
                        <Cardsm
                        id={userPost.id}
                        name={userPost.name}
                        type={userPost.type}
                        review={userPost.review}
                        url={userPost.url}
                        />
                    ))}
                </Wrapper>
                <Favbar />
            </h1>
        )
}

export default Home;