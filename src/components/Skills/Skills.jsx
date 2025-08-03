// Skills.jsx
import React from 'react';
import './Skills.css';

const skills = [
  'Java', 'Spring Boot', 'Hibernate', 'Jsp', 'Servlet','Spring Security','REST APIs', 'MySQL', 'Microservices',
  'MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript',
  'TypeScript', 'HTML', 'CSS', 'Git', 'Jenkins', 
];

const Skills = () => (
  <section id="skills" className="skills">
    <h1>Technical Skills</h1>
    <div className="skills-grid">
      {skills.map((s, i) => <div key={i} className="skill-card">{s}</div>)}
    </div>
  </section>
);

export default Skills;
