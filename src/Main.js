/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CaseSummaryContainer from './CaseSummaryContainer';

const Main = () => {
  const Home = () => <div data-testid="home-route">This is home component</div>;
  return (
    <>
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={CaseSummaryContainer} />
            <Route path="/sao/casesummary" component={Home} />
          </Switch>
        </Router>
      </main>
    </>
  );
};
export default Main;
/* Main.propTypes = {
  children: PropTypes.node,
};

Main.defaultProps = {
  children: null,
};
 */
