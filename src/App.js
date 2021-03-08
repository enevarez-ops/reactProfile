import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Resume from './components/Resume'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => {
  document.title = "Efrain Nevarez"
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route exact path='/resume'>
          <Resume />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;


