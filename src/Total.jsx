import React, {useEffect, useState} from 'react';
import Submit from './Submit.jsx'
import receipt from './graphics/receipt.png';
 

// @option - info on the school's name and city
// @range - family income range
// @data - info about the school cost/fees/discounts

const Total = ({option, range, data}) => {
  
  const tuition = data[0]["2018.cost.tuition.in_state"]
  const fees = data[0]["2018.cost.attendance.academic_year"] - tuition;
  const subtotal = data[0]["2018.cost.attendance.academic_year"];
  
  const range_string = "2018.cost.net_price.consumer.by_income_level." + range.replace(/[\s,$]+/g, "");



  const discount = subtotal - data[0][range_string];
  const total = subtotal - discount;


  // I think we can make a component that does the row


  return (
    <div> 
    
      <h1 className = 'total-h1'> TOTAL </h1>
      <div className='receipt'>
      <img className = 'receipt-img' src = {receipt} alt = "receipt image"/>
      <div className='text-2'>
       <h3 className = 'total-h2'> {option.name.replace("-", ", ")} </h3>
      <h3 className = 'total-h3'> {option.city.replace("-", ", ")}, CA </h3>

      <hr className = 'dotted-lines-2'/>
      <div id = 'table-main'>
        <h5> QTY </h5>
        <h5> DESCRIPTION </h5>
        <h5 className='amount'> AMOUNT </h5>
        </div>
      <hr className = 'dotted-lines-2'/>
        <div id = 'table-main' className = 'table'> 
          <h5> 1 </h5>
          <h5> TUITION </h5>
          <h5 className='amount'> ${tuition.toLocaleString()} </h5>
        </div>
        <div id = 'table-main' className = 'table'>
          <h5> 1 </h5>
          <h5> FEES, SUPPLIES, AND LIVING EXPENSES </h5>
          <h5 className='amount'> ${fees.toLocaleString()} </h5>
        </div>
        <div className = 'table-subtotal'>
          <h5 className='subtotal'> SUBTOTAL </h5>
          <h5 className='amount'> ${subtotal.toLocaleString()}</h5>
        </div>
      <hr className = 'dotted-lines-2'/>
      <div className = 'discount-total' id="table-main">
        <h5 id = 'discount'> DISCOUNT </h5>
        <h5 id = 'discount' className='amount'> -${discount.toLocaleString()} </h5>
      </div>
      <div className='discount-total' id='table-main'>
        <h5> TOTAL </h5>
        <h5 className='amount'> ${total.toLocaleString()}* </h5>
      </div>
      <div className='note'>
      <h6> * This estimate is based on actual costs for families that received federeal aid or loans by applying with the FAFSA form. It always pays to ask for a discount! </h6>
      <h6> Cost includes tuition, living costs, books and suppl ies, and fees minus the average grants and scholarships for federal financial aid recipients. </h6>
      <h6> Depending on the federal, state, or institutional grant aid available, students in your income bracket may pay more or less than the overall average costs.</h6>
      </div>
      </div>
      </div>
      <br></br> 
      <Submit buttonText = "START OVER" redirect = "/"/>
    </div>
  )
}

export default Total;