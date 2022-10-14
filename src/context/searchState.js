import React, { useState, useEffect } from 'react';
import SearchContext from "./searchContext";

const SearchState = (props) => {
    const keyWord = "inState";
    const [state, setState] = useState(keyWord);
    const updateKeyWord = (e) => {
        setState(e);
    }
    return(
        <SearchContext.Provider value = {{state, updateKeyWord}}>
            { props.children }
        </SearchContext.Provider>
    );
}

export default SearchState;