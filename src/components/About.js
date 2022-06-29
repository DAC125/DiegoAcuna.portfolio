import React from 'react'
import "./../css/Sections.css"

const About = (props) => {
  console.log(props.ref)
  return (
    <section id='about' ref={props.ref} className='section about'><h1>About</h1></section>
  )
}

export default About