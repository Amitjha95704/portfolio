// import React from 'react'
// import './Hero.css'
// import profile_img from '../../assets/profile.png'
// import AnchorLink from 'react-anchor-link-smooth-scroll'

// const Hero = () => {
//   return (
//     <div id='home' className='hero'>
//      <img src={profile_img}></img>
//      <h1><span>HI, I am Alex,</span> frontend developer based in USA</h1>
//      <p>I am frontend developer from Clarifornia USA, with 10 years of experience</p>
//      <div className="hero-section">
//         <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact with me</AnchorLink></div>
//         <div className="hero-resume">My Resume</div>
//      </div>
//     </div>
//   )
// }

// export default Hero

// Hero.jsx
import React from 'react';
import './Hero.css';
import profileImg from '../../assets/profile.png';

const Hero = () => (
  <section id="home" className="hero">
    <img src={profileImg} alt="Profile" />
    <h1>
      <span>Hi, I'm Amit,</span> a Full‑Stack Developer
    </h1>
    <p>
      I’m a passionate <span class="highlight-role">Full Stack Developer</span> skilled in Java (Spring Boot, Hibernate), MERN stack (MongoDB, Express, React, Node), and currently seeking a <span class="highlight-role">Java Developer Internship</span> to apply and grow my backend and frontend development skills.
     </p>
    <div className="hero-action">
      <a href="#contact" className="btn primary">Contact Me</a>
      <a href="/resume.pdf" className="btn secondary">Download Resume</a>
    </div>
  </section>
);

export default Hero;
