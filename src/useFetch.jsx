import React from 'react';
import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'


//@params - the parameter for the search
//@route - the endpoint to grab fetch data

const useFetch = (route, params) => {
  const endPoint = '/query' + route + params;
  console.log('endpoint', endPoint);
  let [data, setData] = useState(null);  
  async function fetchData () {
    const response = await fetch(endPoint,{
    method: "GET"})
    .then( res => {
      return res.json();
    })
    .then(data => {
      setData(data);
    })
    .catch(err => {
      console.error(err);
    })
  }
  useEffect(() => {
    fetchData();
  }, []);

  return data;
}


export default useFetch;