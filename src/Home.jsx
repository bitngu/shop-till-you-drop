
import shopcart from './graphics/shoppingcart.png';
import React, {useState, useEffect} from 'react';
import Dropdown from './Dropdown.jsx'
import Submit from './Submit.jsx';
import './Home.css';
import {csv} from 'd3';

const Home = ({setSchool}) => {
  const [data, setData] = useState([]);


  useEffect (()=> {
    d3.csv('/src/school_info.csv')
      .then(data => {
        setData(data.map((d,i) => { 
          return {id: i+1 , name: d.name, city: d.city}
        }))
      });
  }, [])

    
    const schoolNames = 
    [
      {id: 1, name: "University of California-Davis"},
      {id: 2, name: "University of California-Riverside"},  
      {id: 3, name: "University of California-San Diego"},
      {id: 4, name: "University of California-Los Angeles"}
    ]


    const [option, setOption] = useState("");
    
    const updateOption = (option) =>{
      console.log(option);
      setOption(option);
      setSchool(option);
    }

    return (  
    <div className = 'starter'>
      <h1 className = 'title-text'>SHOP 'TIL YOU DROP</h1>
      <p> Tuition is only the sticker price - you might be eligible for a big discount! Estimate the <b><em> real </em></b> costs of college, for schools across the country</p>
      <div className = 'cart_img'> 
        <img className = "cart" src= {shopcart} alt = "shopping-cart"/>
      </div>
      <h4>Start typing to pick a school</h4>
      <Dropdown list = {data} setOption ={updateOption} isButton = {true}/>
      <Submit buttonText = "ADD TO CART" redirect = "/price" option = {option} />
    </div> 

    );
}

export default Home;