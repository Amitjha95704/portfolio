// import React from 'react'
// import './Contact.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import mail_icon from '../../assets/mail_icon.svg'
// import location_icon from '../../assets/location_icon.svg'
// import call_icon from '../../assets/call_icon.svg'

// const Contact = () => {

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "253a8b56-b3ee-4478-928a-64d17ba52383");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//      alert(res.message);
//     }
//   };

//   return (
//     <div id='contact' className='contact'>
//         <div className="contact-title">
//             <h1>touch with me</h1>
//             <img src={theme_pattern}/>
//         </div>
//         <div className="contact-section">
//             <div className="contact-left">
//                 <h1>Let's talk</h1> 
//                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas odio ab dolorem quo voluptas quam fugiat officia itaque tenetur, deleniti obcaecati nobis fuga repudiandae reprehenderit.</p>
//                 <div className="contact-details">
//                     <div className="contact-detail">
//                       <img src={mail_icon}/><p>amitjhaneuri@gmail.com</p>
//                     </div>
//                     <div className="contact-detail">
//                        <img src= {call_icon}/><p>+986-876-487</p>
//                     </div>
//                     <div className="contact-detail">
//                         <img src={location_icon}/><p>USA, CA Academy</p>
//                     </div>
//                 </div>
//             </div>
//             <form onSubmit={onSubmit} className="contact-right">
//              <label htmlFor=''>Your Name</label>
//              <input type='text' placeholder='Enter Your Name' name='name' />
//              <label htmlFor=''>Your Email</label>
//              <input type='text' placeholder='Enter Your Email' name='Email' />
//              <textarea name='message' rows="10" placeholder='Enter your message'  />
             
//               <button type='submit' className="contact-button">submit now</button>
             
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Contact

// Contact.jsx
// import React from 'react';
// import './Contact.css';

// const Contact = () => (
//   <section id="contact" className="contact">
//     <h1>Get In Touch</h1>
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         alert('Thank you! Message sent.');
//       }}
//       className="contact-form"
//     >
//       <label>Name</label>
//       <input type="text" placeholder="Your name" required />
//       <label>Email</label>
//       <input type="email" placeholder="Your email" required />
//       <label>Message</label>
//       <textarea placeholder="Your message" rows="6" required />
//       <button type="submit">Send Message</button>
//     </form>
//   </section>
// );

// export default Contact;

import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   emailjs.send(
      'service_6qdpoqh',
      'template_6p8j4kj',
      formData,
      'okmapcSRU-Q4cCiKB'
    )
    .then((result) => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // clear form
    })
    .catch((error) => {
      alert('Failed to send message. Please try again later.');
      console.error(error.text);
    });
  };

  return (
    <div className="contact" id="contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
