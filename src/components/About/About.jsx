// import React from 'react'
// import './About.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import profile_img from'../../assets/profile.png'

// const About = () => {
//   return (
//     <div id='about' className='about'>
//         <div className="about-title">
//             <h1>About Me</h1>
//             <img src={theme_pattern}></img>
//         </div>
//         <div className="about-section">
//             <div className="about-left">
//                 <img src={profile_img}></img>
//             </div>
//             <div className="about-right">
//                 <div className="about-para">
//                     <p>Crafting seamless user experiences, code weaves like poetry in the hands of an experienced frontend developer, merging innovation with intuition.</p>
//                     <p>Crafting seamless user experiences with every line of code, an experienced frontend developer .</p>

//                 </div>
//                 <div className="about-skills">
//                     <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
//                     <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
//                     <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
//                     <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
                    
//                 </div>
//             </div>
//         </div>
//         <div className="about-achievements">
//             <div className="about-acheivement">
//                 <h1>10+</h1>
//                 <p>YEARS OF EXPERIENCE</p>
//             </div>
//             <hr />
//             <div className="about-acheivement">
//                 <h1>90+</h1>
//                 <p>PROJECTS COMPLETED</p>
//             </div>
//             <hr />
//             <div className="about-acheivement">
//                 <h1>15+</h1>
//                 <p>CLIENTS</p>
//             </div>
            
//         </div>
//     </div> 
//   )
// }

// export default About

// About.jsx
import React from 'react';
import './About.css';
import themePattern from '../../assets/theme_pattern.svg';
import profileImg from '../../assets/profile.png';

const About = () => (
  <section id="about" className="about">
    <div className="about-title">
      <h1>About Me</h1>
      <img src={themePattern} alt="pattern" />
    </div>
    <div className="about-content">
      <div className="about-img">
        <img src={profileImg} alt="Alex profile" />
      </div>
      <div className="about-text">
        <p>
  I’m a passionate <span className="highlight-role">Full Stack Developer</span> with a strong foundation in both <strong>Java-based backend</strong> technologies and modern frontend frameworks like React.js. My expertise spans across the <strong>MERN stack</strong> as well as core Java technologies such as Spring Boot, Hibernate, and RESTful APIs.
</p>
<p>
  I am actively seeking an opportunity as a <span className="highlight-role">Java Developer Intern</span> where I can contribute my coding skills, learn from real-world challenges, and grow into a professional developer. I love building scalable, clean, and responsive web applications that solve real-world problems.
</p>
<p>
  With a solid understanding of databases, authentication systems, server-side development, and UI/UX practices, I bring a versatile and problem-solving mindset to every project I work on.
</p>

         <div className="about-stats">
          <div><h2>1+</h2><p>Years Experience</p></div>
          <div><h2>10+</h2><p>Projects Completed</p></div>
          {/* <div><h2>15+</h2><p>Clients Served</p></div> */}
        </div>
      </div>
    </div>
  </section>
);

export default About;
