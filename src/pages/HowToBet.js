import React from 'react';
import WithSideBar from '../layout/WithSideBar';
import {
  Switch,
  Route,
} from 'react-router-dom';
import {
  Article,
} from './HowToBetPages';
import { SideBar } from '../components'

const Page = () => (
  <WithSideBar sidebar={SideBar}>
    <Switch>
      <Route exact path="/how-to-bet/:topic?/:article?" component={Article} />
    </Switch>
  </WithSideBar>
);

export default Page;
