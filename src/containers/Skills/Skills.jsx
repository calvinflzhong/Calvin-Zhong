import React from 'react';
import { SkillIcon } from '../../components';
import './skills.css';

const Skills = () => {
  return (
    <>
      <div className='App__features-container__feature-title'>
        <div className='skills-title'>
          <h1>Technological Skills</h1>
        </div>
      </div>
      <br />
      <br />
      <div className='skill-icons'>
        <SkillIcon />
      </div>
    </>
  );
};

export default Skills;
