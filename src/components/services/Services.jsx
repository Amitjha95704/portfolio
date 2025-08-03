// import React from 'react'
// import './Services.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import Services_Data from '../../assets/services_data'
// import arrow_icon from '../../assets/arrow_icon.svg'

// const Services = () => {
//   return (
//     <div id='services' className='services'>
//         <div className="services-title">
//             <h1>My-services</h1>   
//             <img src={theme_pattern} />
//         </div>
//         <div className="services-container">
//             {Services_Data.map((service, index)=>{
//                 return <div key={index} className='services-farmat'>
//                     <h3>{service.s_no}</h3>
//                     <h2>{service.s_name}</h2>
//                     <p>{service.s_desc}</p>
//                     <div className="services-readmore">
//                         <p>Read More</p>
//                         <img src={arrow_icon}/>
//                     </div>
//                 </div>
//             })}
//         </div>
//     </div>
//   )
// }

// export default Services

// Services.jsx
import React from 'react';
import './Services.css';

const services = [
  { id: 1, title: 'Backend Architecture', desc: 'Design REST APIs & microservices using Java/Spring Boot.' },
  { id: 2, title: 'Frontend Development', desc: 'Build responsive UIs with React and Redux.' },
  // { id: 3, title: 'DevOps Automation', desc: 'CI/CD pipelines with Docker, Jenkins, AWS deployment.' }
];

const Services = () => (
  <section id="services" className="services">
    <h1>My Services</h1>
    <div className="services-grid">
      {services.map(s => (
        <div key={s.id} className="service-card">
          <h2>{s.title}</h2>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
