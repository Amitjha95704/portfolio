// import React from 'react'
// import './MyWork.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import mywork_data from '../../assets/mywork_data'
// import arrow_icon from '../../assets/arrow_icon.svg'

// const MyWork = () => {
//   return (
//     <div id='work' className='mywork'>
//         <div className="mywork-title">
//             <h1>My Latest Work</h1>
//             <img src={theme_pattern}></img>
//         </div>
//         <div className="mywork-container">
//          {mywork_data.map((work,index)=>{
//             return <img key={index} src={work.w_img}/>
//          })}
//         </div>
//         <div className="mywork-showmore">
//             <h1>show more</h1>
//             <img src={arrow_icon}/>
//         </div>
//     </div> 
//   )
// }

// export default MyWork

// MyWork.jsx
import React from 'react';
import './MyWork.css';
import projects from '../../assets/mywork_data'; // array with {id, w_img}

const MyWork = () => (
  <section id="work" className="mywork">
    <h1>My Latest Work</h1>
    <div className="work-grid">
      {projects.map(p => (
        <img key={p.id} src={p.w_img} alt="Project screenshot" className="work-img"/>
      ))}
    </div>
    <button className="show-more">Show More</button>
  </section>
);

export default MyWork;
