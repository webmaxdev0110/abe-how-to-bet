import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Main from './layout/Main';
import { HowToBet } from './pages';

const App = () => (
  <Router>
    <Main>
      <Route path="/how-to-bet" render={HowToBet} />
    </Main>
  </Router>
);

export default App;
