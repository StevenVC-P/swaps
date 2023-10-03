import React, { useState, useEffect } from "react";
import SubmitProduct from "../../components/SubmitProduct";
function Submitpost () {
    const [productState, setProductState] = useState([])

    useEffect(()=>{
        setProductState(productState)
    }, []);
    return(

        <SubmitProduct />

    )
}
export default Submitpost;