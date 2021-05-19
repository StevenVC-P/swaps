import React from 'react';

const FavContext = React.createContext({
    title: "",
    gotoFavBtnClick: () => {}
});

export default FavContext;