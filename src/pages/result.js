import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./result.css";
import UseGoogleSearch from '../useGoogleSearch';
import SearchIcon from '@mui/icons-material/Search';
import Response from '../response';
import Search from '../components/search';
import searchContext  from '../context/searchContext';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MapIcon from '@mui/icons-material/Map';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { imageListClasses } from '@mui/material';

function Result() {
    const a = useContext(searchContext);
    const term = a.state;
    // const term = 'tesla';
    const data = UseGoogleSearch(term);

    // const data = Response;
    // console.log(data);
    return (
        <div className='resultPage'>
            <div className='resultHeader'>
                <Link to = "/"></Link>
                <img className='resultPageLogo'
                src='https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
                alt=""
                />

                <div className='resultHeaderBody'>
                    <Search hideButtons /> 

                    <div className='searchPageOptions'>
                        <div className='optionLeft'>
                            <div className='searchPageOption'>
                                <SearchIcon />
                                <Link to = '/all'> All </Link>
                            </div>
                            <div className='searchPageOption'>
                                <NewspaperIcon />
                                <Link to = '/news'> News </Link>
                            </div>
                            <div className='searchPageOption'>
                                <ImageSearchIcon />
                                <Link to = '/images'> Images </Link>
                            </div>
                            <div className='searchPageOption'>
                                <ShoppingCartIcon />
                                <Link to = '/shoping'> Shoping </Link>
                            </div>
                            <div className='searchPageOption'>
                                <MapIcon />
                                <Link to = '/map'> Map </Link>
                            </div>
                            <div className='searchPageOption'>
                                <MoreVertIcon />
                                <Link to = '/more'> More </Link>
                            </div>
                        </div>


                        <div className='optionRight'>
                            <div className='searchPageOption'>
                                <Link to = '/settings'> Settings </Link>
                            </div>
                            <div className='searchPageOption'>
                                <Link to = '/tools'> Tools </Link>
                            </div>
                        </div>
                    </div>
                </div>

  
            </div>

            {term && (
                <div className='searchPageResults'>
                    <p className='searchPageResultsCount'>
                        About {data?.searchInformation.formattedTotalResults} results
                        ({data?.searchInformation.formattedSearchTime} seconds) for {term}  
                    </p>

                    {data?.items.map(item => (
                        <div className='searchPageResult'>
                            <a href = {item.link}>
                            <img src = {item.pagemap?.cse_image?.length > 0
                                && item.pagemap?.cse_image[0]?.src}
                                className = "resultImage"
                            />

                            {item.displayLink} 
                            </a>

                            <a href = {item.link} className = "searchPageResultTitle">
                                <h2> {item.title} </h2>
                            </a>

                            <p className='searchPageResultSnippet'>
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Result