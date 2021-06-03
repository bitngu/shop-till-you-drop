import React, { useEffect } from 'react';
import useFetch from './useFetch.jsx'
import pricetag from './graphics/pricetag.png';
import './Price.css'
import Submit from './Submit.jsx';

// @option - the school name the user selected
const Price = ({option, setData}) => {
  // Need to pass parameter to the useFetch function
  // Example: '?schoolName='+ schoolName;
  const params = '?schoolName=' + option.name;
  let tuition = 0;
  let fees = 0;
  let retail_price = 0;
  const data = useFetch("/cost", params);
  //data is a returned array of objects
  // const actualData of school= data[0].school;
  // console.log("state: ", state);
  // useEffect (()=> {
  //   setData(dat);
  // })
  useEffect(() => {
    setData(data);
  }, [data]);

  const options = { 
    minimumFractionDigits: 2,
    maximumFractionDigits: 2 
  };
  if (data){
    tuition = data[0]["2018.cost.tuition.in_state"]
    fees = data[0]["2018.cost.attendance.academic_year"] - tuition;
    retail_price = tuition + fees;
  }

  console.log("Price data: ", data);

  return(
    <div>
      <h1> Price Tag </h1>
        <div className = 'pricetag'>
          <img className = 'pricetag_img' src = {pricetag} alt = "pricetag_img"/>
          <div className = 'text'>
            <div className = 'cost' >
              <h3>  SCHOOL </h3>
              <h4 className='no-bold'> {option.name.replace("-", ", ")}
              </h4>
              <h4 className='no-bold'>
              {option.city}, CA </h4>
              <h3>  TUITION </h3>
              <h3 className='no-bold'>  $
              {Number(tuition).toLocaleString('en', options)} </h3>
              <h3 className="room"> ROOM AND BOARD, </h3>
              <h3 className="room"> FEES, SUPPLIES </h3>
              <h3 className='no-bold'> ${Number(fees).toLocaleString('en', options)} </h3>
              </div>
              <hr />
              <div className="total-cost">
              <h4 className="no-bold"> TOTAL RETAIL PRICE** </h4>
              <h2 className="retail-price"> ${Number(retail_price).toLocaleString('en', options)}  </h2>     
          </div>
        </div>
        </div>
        <h3> **YOU MAY BE ELIGIBLE FOR A DISCOUNT! </h3> 
      <Submit buttonText = "SHOP FOR DISCOUNT" redirect = "/discounts"/>


    </div>
  )
}

export default Price;