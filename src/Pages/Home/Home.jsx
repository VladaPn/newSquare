import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Projects from '../../Components/Projects/Projects'
import Skills from '../../Components/Skills/Skills'
import About from '../../Components/About/About'

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <Projects/>
      <Skills/>
      <About/>
    </div>
  )
}

export default Home 
