import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import List from './component/List';
import Home from './component/Home';

import './App.css';

class App extends Component {

  render(){

    return (
      <div className="App">
        <Router>
          <header>
            <ul>
              <li className="title"><Link to="/"><h1>TO PDF</h1></Link></li>
              <li className="listBtn text-right"><Link to="/list"><button className="listBtn text-right"><i className="far fa-list-alt"></i></button></Link></li>
            </ul>
          </header>
          <Route exact path='/'><Home/></Route>
          <Route path='/list'><List/></Route>
        </Router>
      </div>
    );

  }
}

export default App;
