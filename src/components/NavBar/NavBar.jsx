import React, { useState } from 'react';
import './nav-bar.css';
import logo from '../../assets/logo.png';

const NavBar = () => {
  return (
    <div className='app__navbar'>
      <div className='app__navbar-links'>
        <div className='app__navbar-links_logo'>
          <h1>calvinzhong.dev</h1>
        </div>
        <div className='app__navbar-links_container'>
          <p>
            <a href='#home'>About me</a>
          </p>
          <p>
            <a href='#wapp'>Skills</a>
          </p>
          <p>
            <a href='#projects'>Projects</a>
          </p>
          <p>
            <a href='#Contact'>Contact</a>
          </p>
        </div>
      </div>
      <div className='app__navbar-menu'></div>
    </div>
  );
};

export default NavBar;
