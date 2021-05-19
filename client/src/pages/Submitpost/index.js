import React, { useState, useEffect } from "react";
import SubmitProduct from "../../components/SubmitProduct";
import products from "../../products.json";


function Submitpost () {
    const [productState, setProductState] = useState([])







    useEffect(()=>{
        setProductState(products)
    }, []);
    return(

        <SubmitProduct />

        
    )
}
export default Submitpost;