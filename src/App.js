import React from 'react';
 import Home from './components/pages'
 import Utn from './components/UTN'
 import Tennis from './components/Tennis';
 import Soccer from './components/Soccer';
 import SignIn from './components/pages/signin'
 import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.css';
 

 const App=()=> {
  
  return (
    <Router>
      
      <Switch>
        <Route exact path="/" component={Home}/>
    
        <Route path="/help" component={Utn}/>
        
        <Route path="/get-your-utn" component={Tennis}/>
        <Route path="/get-your-usn" component={Soccer}/>
        <Route path="/signup" component={SignIn}/>
         
      </Switch>

    </Router>
  );
}

   
export default App