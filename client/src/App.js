import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { StoreProvider } from './utils/GlobalState';
import Nav from './components/Nav';
import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {
  return (
    <Router>
      <div>
        {/* <StoreProvider> */}
        <Nav />
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/saved' component={Saved} />
        </Switch>
        {/* </StoreProvider> */}
      </div>
    </Router>
  );
}

export default App;
