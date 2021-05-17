import React, { useState, useEffect } from "react";
import Cardlg from "../../components/Cardsm";
import Wrapper from "../../components/Wrapper";
import products from "../../products.json";

function Post () {
    const [productState, setProductState] = useState([])

    useEffect(()=>{
        setProductState(products)
    }, []);

        return(
            <h1>
                <Wrapper>
                    {productState.map(userPost => (
                        <Cardlg
                        id={userPost.id}
                        name={userPost.name}
                        type={userPost.type}
                        review={userPost.review}
                        url={userPost.url}
                        />
                    ))}
                </Wrapper>
            </h1>
        )
}

export default Post;