import React from 'react';
import './App.css';
import { AboutMe, Skills, Footer, Header, Projects } from './containers';
import { About, NavBar, CodingAnimation } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__background'>
        <div>
          <Header />
        </div>
        <div className='skills-div'>
          <Skills />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
