import React from 'react';
import { HashRouter, Switch, Route, Link } from "react-router-dom";


const  App = () => {
  return (
    <div className="App">
      <div>This is a nav bar</div>
      <ul>
          <li><Link to="/create/tenant">create tenant</Link></li>
          <li><Link to="/update/tenant">update tenant</Link></li>
          <li><Link to="/create/tenant">create apartment</Link></li>
          <li><Link to="/update/tenant">update apartment</Link></li>
      </ul>
      <HashRouter basename="/">
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr />
  
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </HashRouter>
    </div>
  );
}
const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>

export default App;
