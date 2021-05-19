import React, { useContext } from "react";
import FavContext from "../../utils/FavContext";

function FavSelector(){
    const { title, gotoFavBtnClick } = useContext(FavContext);
    return(
        <div>
            <h3 className="text-center">{title}</h3>
            <div className="fav-btn" onClick={gotoFavBtnClick}
                data-value="back">
            </div>
        </div>
    );
}

export default FavSelector;