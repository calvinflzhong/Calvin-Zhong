import React from 'react';
import { skillsList } from '../../data/SkillsList';
import './skill-icon.css';

const styleIcon = { color: 'white', fontSize: '5em' };
const styleText = { color: 'white', fontSize: '2em' };

const SkillIcon = () => {
  return (
    <>
      <div className='skills-container'>
        {skillsList.map((skill, key) => {
          return <TechSkill key={key} skill={skill}></TechSkill>;
        })}
        ;
      </div>
    </>
  );
};

const TechSkill = ({ skill }) => {
  return (
    <div className='skill-icon'>
      <div className={skill.title} style={styleIcon}>
        {skill.icon}
      </div>
      <div style={styleText}>{skill.title}</div>
    </div>
  );
};

export default SkillIcon;
