// This function should only be run once to get the database from the college board api

import React, { useEffect, useState } from 'react';
import useFetch from './useFetch.jsx'


let data = null;

const GetCASchool = () => {
  data = useFetch("/getList", "");
  console.log(data);
  return (
    <div> finished running</div>
  )
}

export default GetCASchool;
