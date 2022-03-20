import React from 'react';
import './App.css';
import { AboutMe, Skills, Footer, Header, Projects } from './containers';
import { About, NavBar, CodingAnimation } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__background'>
        <Header />
      </div>
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
