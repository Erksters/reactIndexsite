import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const  App = () => {
  return (
    <div className="App">
      <div>This is a nav bar</div>
      <Router>
        <Switch>
          <Route path="/create/tenant">
            <div>create tenant</div>
          </Route>
          <Route path="/update/tenant">
          <div>update tenant</div>
          </Route>
          <Route path="/create/apartment">
          <div>create apartment</div>
          </Route>
          <Route path="/update/apartment">
          <div>update apartment</div>
          </Route>
          <Route path="/create/contract">
          <div>create contract</div>
          </Route>
          <Route exact path="/">
          <div>landing page</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
