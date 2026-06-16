import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Heading from '../Heading/Heading'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Career from '../Career/Career'
import Github from '../GitHub/Github'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div id='Home'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Career />
      <Github />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
