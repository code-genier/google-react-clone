import React, { useState, useContext } from 'react';
import './search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import searchContext from '../context/searchContext';

// hidebuitton props allow us to decide when to display
// the search and lucky button 
// if its on main google page bydefault it will show the buttons
// and since we want to use the same search componeennt in
// searchRexult page we will use hideButton = true and 
// use it in searchResult page

function Search({ hideButtons = false }) {
    const [Input, setInput] = useState("google");
    const navigate = useNavigate();
    const a = useContext(searchContext);
    const Search = (e) => {
        // avoid refresh of page on button click
        e.preventDefault();
        console.log("searched")

        // do something with input...
        a.updateKeyWord(Input);
        
        // redirect to searchResult page
        navigate('/searchResult');
    }
  return (
    <form className='search'>
        <div className='seacrhInput'>
            <SearchIcon className = "searchInputIcon" />
            <input value={Input} onChange = {(e) => { setInput(e.target.value) }}/>
            <MicIcon className='searchInputMic'/>
        </div>

        {!hideButtons ? (
            <div className='searchButtons'>
                <Button variant='outlined' type = "submit" onClick={Search}>Google Search</Button>
                <Button variant='outlined'>I'm Feeling Lucky</Button >
            </div>
        ):(
            <div className='searchButtons hideButtons'>
                <Button variant='outlined' type = "submit" onClick={Search}>Google Search</Button>
                <Button variant='outlined'>I'm Feeling Lucky</Button>
            </div>
        )}
    </form>
  )
}

export default Search