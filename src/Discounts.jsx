
import React, {useState, useEffect} from 'react';
import discount_png from './graphics/discount.png';
import Submit from './Submit.jsx';
import './Discounts.css'


const Discounts = ({setRange}) => {
  //need to pass in a set method to store what the user put in
  //also need to do error checking
  const [text, setText] = useState("");
  const [prevMatch, setPrevMatch] = useState([]);
  const [match, setMatch] = useState([]);
  const [button, setButton] = useState("v");
  const income_range = ["$0 - $30,000", "$30,001 - $48,000",
  "$48,001 - $75,000", "$75,000 - $110,000", "$110,001+"]

  const handleOnChange = (event) =>{
    if(event.target.value){
      console.log("target:" , event.target.value);
      setText(event.target.value);
      setMatch(filterRange(income_range, event.target.value));  
      setButton("^");

    }
    else{
      setMatch([]);
      setText("");
      setButton("v");
    }
  }
  const handleOnClick = () => {
    console.log(text);
    if(text === ""){
      //when there's no match, display entire list
      setMatch(income_range);
    } else{
      setMatch(filterRange(income_range, text));
    }
    if (button === 'v'){
      setButton('^');
      setMatch(filterRange(income_range, text));
    }
    else{
      setButton('v');
      setMatch([]);
    }
  }

  const setOption = (range) => {
    //don't want to display the option when user make their select
    setMatch([]);
    setText(range);
    setButton('v');
    setRange(range);

  }

  return (
    <div className = 'discounts' >
      <h1 className='discount-text'> DISCOUNTS </h1> 
      <p className = 'discount-reminder' > Remember, tuition is only the sticker price - you might be eligible for a big discount! </p>
      <p className = 'discount-reminder'>
        Let's see if you qualify for any discounts
      </p> 
      <div className = 'discountDiv_img' >
        <img className = 'discount' src ={discount_png} alt = "discount_img"/>
      </div>
      <h3 className='family-income'> Family Income </h3>    
      <div className = 'income-selector' > 
        <input onChange  = {handleOnChange} className= "income-input"
         placeholder = 'Select Income Range' value = {text}/>
        <div className = 'income-list'>
        <button id = 'onclick_v' onClick = {handleOnClick}> {button} </button>
        {match.length > 0 && <div className = 'options'>  
        {(match.length > 0) && match.map((r,i) => <p onClick= {() => setOption(r)} className = 'li' key= {i+1}> {r} </p>)}
        </div>}
        </div>
      </div>
      <Submit buttonText ='Go' redirect = '/total'/>

    </div>

  )
}


function filterRange(income_range, target){
  return income_range.filter(s => {
        if (s.includes(target)){
          return s;     
  }})
}

export default Discounts;