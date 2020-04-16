import React from 'react';
// import logo from './logo.svg';
import './App.css';
import  Home from './component/Home';
import  About from './component/About';
import  Contact from './component/Contact';
import  Error from './component/Error';
import  Navigation from './component/Navigation';
import history from './History';
import Redirect from './component/redirect';
import Student from './component/Student';

import {BrowserRouter,Route,Switch} from 'react-router-dom';

class App extends React.Component {
  
  render() { 
    return ( 
      <BrowserRouter history={history}>
        <div>
          <Navigation/>
          
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/Student/:studentname/:studentno?' component={Student}/>
            <Route path='/redirect' component={Redirect}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
     );
  }
}
 
export default App;

