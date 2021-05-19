import React, { useState, useEffect }  from "react";
// import FavContext from "../../utils/FavContext";
import FavSelector from "../FavSelector";
import products from "../../products.json";

function Favbar (props) {
  const [favState, setFavState] = useState([])

  useEffect(() => {
    setFavState(products)
  }, [])

    return(
      <div>
        {favState.map(favPost => (
          <FavSelector
          key={favPost.id}
          id={favPost.id}
          name={favPost.name}
          type={favPost.type}
          review={favPost.review}
          url={favPost.url}
          />
        ))}
      </div>
    )
}

export default Favbar;