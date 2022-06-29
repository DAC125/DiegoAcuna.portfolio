import React from 'react'
import "./../css/Sections.css"
import "./../css/Home.css"
import Particle from './Particle'
import file from '../assets/Diego_Acuña_Cerdas_-_Software_Engineer.pdf'

const Home = (props) => {

  
  return (
    <section id='home' ref={props.ref} className='section home'>
     <Particle/>
     <div className='content'>
      <p className='ligthText'>HI, I'M DIEGO ACUÑA</p>
      <h1 className='text'>
        Web Developer
      </h1>
      <a className='colorButton dowloadCV' href={file} download>Download CV</a>
     </div>
    </section>
  )
}

export default Home