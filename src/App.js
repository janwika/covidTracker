import './App.css';
import {} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CountryStat from './pages/CountryStat.js';
import WorldMap from './pages/WorldMap.js';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Country from './pages/Country.js';
import Home from './pages/Home.js';

class App extends React.Component {
  
  render(){
    return (
        <Router>
          <Route exact path="/CountryStat/:id" render = {props => <CountryStat {...props} /> } />
          <Route exact path="/Country" component = {Country} />
          <Route exact path="/" component = {Home} />
          <Route path="/World" component={WorldMap} />
        </ Router>
  );
  }

}

export default App;
