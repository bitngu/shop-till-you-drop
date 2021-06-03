import React from 'react';
import {useState} from 'react';


// @props - the expected props has an object of the names of the school and boolean to indicate if whether the cancel button

// props pass in a list of options to select, ie schoolNames
//props should also pass a function to set the state of what the user will select 

const Dropdown = ({list, setOption, isButton}) => {
  const [match, setMatch] = useState([]);
  const [text, setText] = useState("");

  function handleOnChange (event) {
      setText(event.target.value);
      if (event.target.value){
        setMatch(list.filter((obj) => {
          if(obj.name.toLowerCase().startsWith(event.target.value.toLowerCase())) {
            return obj;        
          };
        }))
      } 
      else {
        setMatch([])
      }
      console.log(match);
    } 

    function handleOnClick(event) {
      setMatch([]);
      setText("");
    }

    function addOpption(name,city){
      setText(name);
      setMatch([]);
      setOption({'name': name, 'city': city});
    }

    return (  
      <div>
        <div className="dropdown">
          <input onChange = {handleOnChange} type= "text" placeholder = "Your school name"  value = {text}
          />
          <div id = "x_button" >
          {isButton && <button id = 'onclick_x' 
          onClick = {handleOnClick}> X </button>
          }
          </div>
        </div>
        {match.length > 0 && <div className = 'options'>  
        {match.length > 0 && match.map(({id,name,city}) => ( <p className ='name' onClick = {() => {addOpption(name, city)}} key = {id} value = {name}> {name.replace('-', ', ')} 
            <span className = 'city'> {city}, CA</span>
        </p> 
        ))}
        </div>
        }
      </div>


    );
}
 
 export default Dropdown;