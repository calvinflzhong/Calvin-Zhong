import React from 'react';
import './header.css';
import { CodingAnimation } from '../../components';
import { SocialButtons } from '../../components';

const Header = () => (
  <div className='app__header section__padding' id='app'>
    <div className='app__header-content'>
      <h1 className='gradient__text'>Hi I'm Calvin,</h1>
      <p>I am a full-stack developer with a background in accounting.</p>

      <div className='social-buttons'>
        <SocialButtons />
      </div>
    </div>

    <div className='animation'>
      <CodingAnimation />
    </div>
  </div>
);

export default Header;
