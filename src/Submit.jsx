import React, {useState} from 'react';
import './Submit.css';
import { useHistory } from 'react-router';

const Submit = ({buttonText, redirect}) => {
  const history = useHistory();
  function handleOnClick () {
    history.push(redirect)
  }

  return (
        <div className = 'buttonText' 
        onClick = {handleOnClick} > 
            {buttonText} 
        </div>
  );
}

export default Submit;