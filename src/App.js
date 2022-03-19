import React from 'react';
import './App.css';
import { AboutMe, Features, Footer, Header, Projects } from './containers';
import { CallToAction, About, NavBar } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__background'>
        <NavBar />
        <Header />
      </div>
      <AboutMe />
      <Features />
      <Projects />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
