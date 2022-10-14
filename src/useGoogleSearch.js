import React, { useState, useEffect } from 'react'

const API_KEY = "AIzaSyDtKIg-y2QV63_3XIiIP3hSh0Y_e3ukTLg";
const CONTEXT_KEY = "a3cca7ae2c9c0423d";
// const headApi = "https://www.googleapis.com/customsearch/v1?key=AIzaSyDtKIg-y2QV63_3XIiIP3hSh0Y_e3ukTLg&cx=a3cca7ae2c9c0423d&q=tesla";
// const headApi = "https://www.googleapis.com/customsearch/v1?";

const UseGoogleSearch = ( term ) => {
  
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      const api = "https://www.googleapis.com/customsearch/v1?key="+API_KEY+"&cx="+CONTEXT_KEY+"&q="+"tesla";
      fetch(
        api
      )
      .then(response => response.json())
      .then(result => {
        setData(result );
      })
    }

    fetchData();
  }, [ term ])

  return data;
}

export default UseGoogleSearch;