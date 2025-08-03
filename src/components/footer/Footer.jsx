// import React from 'react'
// import './Footer.css'
// import footer_logo from '../../assets/footer_logo.svg'
// import user_icon from '../../assets/user_icon.svg'

// const Footer = () => {
//   return (
//     <div  className='footer'>
//         <div className="footer-top">
//             <div className="footer-top-left">
//              <img src={footer_logo} />
//              <p>I am frontend developer from Clarifornia USA, with 10 years of experience</p>
//             </div>
//             <div className="footer-top-right">
//                 <div className="footer-email-input">
//                 <img src={user_icon} />
//                 <input type='text' placeholder='Enter your email'/>
//                 </div>
//                 <div className="footer-subscribe">Subscribe</div>
//             </div>
//         </div>
//         <hr />
//         <div className="footer-bottom">
//             <p className="footer-bottom-left">&#169; 2023 Alex Bennet. All rights reserved</p>
//             <div className="footer-bottom-right">
//                 <p>Terms of Services</p>
//                 <p>Privacy policy</p>
//                 <p>Connect with me</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer

// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Amit Jha. All rights reserved.</p>
    <div className="footer-links">
      <a href="#terms">Terms of Service</a>
      <a href="#privacy">Privacy Policy</a>
      <a href="mailto:amitjhaneuri@gmail.com">Connect with me</a>
    </div>
  </footer>
);

export default Footer;
