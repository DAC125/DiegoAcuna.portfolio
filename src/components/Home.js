import React from 'react'
import "./../css/Sections.css"
import "./../css/Home.css"
import Particle from './Particle'

const Home = (props) => {

  
  return (
    <section id='home' ref={props.ref} className='section home'>
     <Particle/>
     <div className='content'>
      <p>HI, I'M DIEGO ACUÑA</p>
      <h1>
        Web Developer
      </h1>
     </div>
    </section>
  )
}

export default Home