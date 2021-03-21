import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path='/' component={Search} />
        <Route exact path='/search' component={Search} />
      </div>
    </Router>
  );
}

export default App;
