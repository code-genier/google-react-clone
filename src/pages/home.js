import React from 'react';
import './home.css';
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import Search from '../components/search';



function home() {
  return (
    <div className='home'>
      <div className='homeHeader'>
        <div className='headerLeft'>
        <Link to = "/">About</Link>
        <Link to = "/">Store</Link>
        </div>

        <div className="headerRight">
          {/* link */}
          <Link to = "/">Gmail</Link>
          {/* link */}
          <Link to = "/">Images</Link>
          {/* icon */}
          <IconButton>
            <AppsIcon />
          </IconButton>
         
          {/* avatar */}
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
          
        </div>
        
      </div>
      <div className='homeBody'>
        <img 
          src='https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
          alt=""
        />
        <Search />
      </div>
    </div>
  )
}

export default home