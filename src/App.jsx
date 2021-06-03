
import React, { useRef, useEffect, useState } from 'react';
import GetCASchool from "./GetCASchool.jsx";
import Home from './Home.jsx';
import Price from './Price.jsx';
import Discounts from './Discounts.jsx';
import Total from './Total.jsx'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

/* App */
function App() {
  const [school, setSchool] = useState("");
  const [data, setData] = useState(null);
  const [incomeRange, setIncomeRange] = useState("");
  console.log(incomeRange);
  console.log(school);
    return (
      <Router>
        <div className = 'content'>
          <Switch>
            <Route exact path = "/"> 
              {/* To get school info 
              <GetCASchool />*/} 
              <Home setSchool = {setSchool} />
            </Route>
            <Route path = "/price"> 
              <Price option = {school} setData = {setData} />
            </Route>
            <Route path = "/discounts">
              <Discounts setRange = {setIncomeRange}/>
            </Route>
            <Route path = "/total">
              <Total option = {school} range = {incomeRange} data = {data} />
            </Route>
            
          </Switch>
        </div>
      </Router>
        
    )
}

export default App;