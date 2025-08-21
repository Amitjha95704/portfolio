// import React, { useState }   from 'react'
// import { useRef } from 'react'
// import './Navbar.css'
// import logo from '../../assets/logo.svg'
// // import profile_img from '../../assets/profile_img.jpg'
// import underline from '../../assets/nav_underline.svg'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
// import menu_open from '../../assets/menu_open.svg'
// import menu_close from '../../assets/menu_close.svg'

// const Navbar = () => {

//   const [menu, setMenu] = useState("about")
//   const menuRef = useRef();
  
//   const openMenu = ()=>{
//     menuRef.current.style.right ="0";
//   }
//   const closeMenu = ()=>{
//     menuRef.current.style.right ="-350px";
//   }
   
  
//   return (
//     <div className='navbar'>
//         {/* <img src={logo}></img> */}
//         <img src={menu_open} onClick={openMenu} className="nav-mob-open"/>
//         <ul ref={menuRef} className="nav-menu">
//           <img  src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
//             <li><AnchorLink className='anchor-link'  href='#home'> <p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu === "home"?<img src={underline}/>:<></>}</li>
//             <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu === "about"?<img src={underline}/>:<></>}</li>
//             <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu === "services"?<img src={underline}/>:<></>}</li>
//             <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu === "work"?<img src={underline}/>:<></>}</li>
//             <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact"?<img src={underline}/>:<></>}</li>
//         </ul>
//         <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
//         </div>
//   )
// }

// export default Navbar

// import React, { useState } from 'react';
// import './Navbar.css';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import menuOpen from '../../assets/menu_open.svg';
// import menuClose from '../../assets/menu_close.svg';

// const Navbar = () => {
//   const [active, setActive] = useState('home');
//   const [menuOpenState, setMenuOpenState] = useState(false); // new state

//   const handleClick = (key) => {
//     setActive(key);
//     setMenuOpenState(false); // close on click
//   };

//   const links = [
//     ['home', 'Home'],
//     ['about', 'About Me'],
//     ['skills', 'Skills'],
//     ['work', 'Projects'],
//     ['contact', 'Contact'],
//   ];

//   return (
//     <nav className="navbar">
//       <img
//         src={menuOpen}
//         alt="Open menu"
//         className="nav-mob-open"
//         onClick={() => setMenuOpenState(true)}
//       />
//       <ul className={`nav-menu ${menuOpenState ? 'open' : ''}`}>
//         <img
//           src={menuClose}
//           alt="Close menu"
//           className="nav-mob-close"
//           onClick={() => setMenuOpenState(false)}
//         />
//         {links.map(([key, label]) => (
//           <li key={key}>
//             <AnchorLink
//               href={`#${key}`}
//               className="anchor-link"
//               offset={50}
//             >
//               <p onClick={() => handleClick(key)}>{label}</p>
//             </AnchorLink>
//             {active === key && <div className="underline" />}
//           </li>
//         ))}
//       </ul>
//       <div className="nav-connect">
//         <AnchorLink
//           href="#contact"
//           className="anchor-link"
//           offset={50}
//         >
//           Hire Me
//         </AnchorLink>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import './Navbar.css';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import menuOpen from '../../assets/menu_open.svg';
// import menuClose from '../../assets/menu_close.svg';

// const Navbar = () => {
//   const [active, setActive] = useState('home');
//   const [menuOpenState, setMenuOpenState] = useState(false);

//   const handleClick = (key) => {
//     setActive(key);
//     setMenuOpenState(false);
//   };

//   const links = [
//     ['home', 'Home'],
//     ['about', 'About Me'],
//     ['skills', 'Skills'],
//     ['work', 'Projects'],
//     ['contact', 'Contact'],
//   ];

//   return (
//     <nav className="navbar">
//       <img
//         src={menuOpen}
//         alt="Open menu"
//         className="nav-mob-open"
//         onClick={() => setMenuOpenState(true)}
//       />
//       <ul className={`nav-menu ${menuOpenState ? 'open' : ''}`}>
//         <img
//           src={menuClose}
//           alt="Close menu"
//           className="nav-mob-close"
//           onClick={() => setMenuOpenState(false)}
//         />
//         {links.map(([key, label]) => (
//           <li key={key}>
//             <AnchorLink
//               href={`#${key}`}
//               className="anchor-link"
//               offset={50}
//               onClick={() => handleClick(key)}
//             >
//               {label}
//             </AnchorLink>
//             {active === key && <div className="underline" />}
//           </li>
//         ))}
//       </ul>
//       <div className="nav-connect">
//         <AnchorLink
//           href="#contact"
//           className="anchor-link"
//           offset={50}
//           onClick={() => handleClick('contact')}
//         >
//           Hire Me
//         </AnchorLink>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import './Navbar.css';
import menuOpen from '../../assets/menu_open.svg';
import menuClose from '../../assets/menu_close.svg';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [menuOpenState, setMenuOpenState] = useState(false);

  const handleClick = (key) => {
    setActive(key);
    setMenuOpenState(false);
  };

  const links = [
    ['home', 'Home'],
    ['about', 'About Me'],
    ['skills', 'Skills'],
    ['work', 'Projects'],
    ['contact', 'Contact'],
  ];

  return (
    <nav className="navbar">
      <img
        src={menuOpen}
        alt="Open menu"
        className="nav-mob-open"
        onClick={() => setMenuOpenState(true)}
      />
      <ul className={`nav-menu ${menuOpenState ? 'open' : ''}`}>
        <img
          src={menuClose}
          alt="Close menu"
          className="nav-mob-close"
          onClick={() => setMenuOpenState(false)}
        />
        {links.map(([key, label]) => (
          <li key={key}>
            <a
              href={`#${key}`}
              className="anchor-link"
              onClick={() => handleClick(key)}
            >
              {label}
            </a>
            {active === key && <div className="underline" />}
          </li>
        ))}
      </ul>
      <div className="nav-connect">
        <a
          href="#contact"
          className="anchor-link"
          onClick={() => handleClick('contact')}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
