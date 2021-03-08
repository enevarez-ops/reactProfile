import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Resume from './components/Resume'
import Footer from './components/Footer'

const App = () => {
  document.title = "Efrain Nevarez"
  return (
    // <Router>

    <>
      <Nav />
      <Footer />



      </> 


    //   <Switch>
    //     <Route exact path='/portfolio'>
    //       <Home />
    //     </Route>
    //     <Route exact path='/resume'>
    //       <Resume />
    //     </Route>
    //     <Route path='/'>
    //       <Background />
    //       <Home />
    //     </Route>
    //   </Switch>
    //   <Footer />
    // </Router>


    
  );
}

export default App;


