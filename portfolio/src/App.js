//import React, { Component } from 'react';
import { HashRouter as Router, Route, Link,} from 'react-router-dom';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import  Portfolio  from './pages/Portfolio';
import './App.css';

function App() {
  return (
<Router>
  <div>
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link active" to="/"><h1>About</h1></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Contact"><h1>Contact</h1></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Portfolio"><h1>Portfolio</h1></Link>
      </li>
    </ul>
    <Route exact path="/" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/portfolio" component={Portfolio} />
    
  </div>
</Router>
  );
}

export default App;
