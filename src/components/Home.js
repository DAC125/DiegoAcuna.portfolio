import React from 'react'
import "./../css/Sections.css"
import IntroImg from "../assets/images.jpeg"
const Home = (props) => {
  return (
    <section id='home' ref={props.ref} className='section home'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt='IntroImg'/>
      </div>
    </section>
  )
}

export default Home