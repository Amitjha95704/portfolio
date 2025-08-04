import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/services/Services'
import MyWork from './components/Mywork/MyWork'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Skills from './components/Skills/Skills'
import './index.css';


const App = () => {
  return (
    <div>
      <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <Services /> */}
      <MyWork />
      <Contact />
      <Footer />
      </>
    </div>
  )
}

export default App