import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './views/search';
import Saved from './views/saved';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={ ["/", "/search"] } component={ Search }/>
        <Route exact path="/saved" component={ Saved }/>
      </Router>
    </div>
  );
}

export default App;
