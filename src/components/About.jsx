import React from 'react'
import '../components/AboutStyle.css';
import logo from '../logo/favicon.png';
import Typewriter from 'typewriter-effect';

const About = () => {
  return (
    <div className='about'>
      <div className="aboutCard">
      <img className='abtimg' src={logo}/>
        <h1 className='abtme'><Typewriter options={{
        strings: ['मैं कौन हूँ','About ME', 'Apie Mane', 'ْعَنِّي', 'Acerca de mí'],
        autoStart: true,
        loop: true, }} /></h1>
        <p className='abtdesc'>I am Vesta, I am a freelance language teacher who teaches lithuanian, hindi and arabic.<br/> I study at Vilnius university where my major subject is India and South Asia, and my minor is Spanish language and culture</p>
      </div>
      <p><a className='webby' href="https://www.linkedin.com/in/priyankesh-shivam/">Website by Priyankesh</a></p>
    </div>
  )
}

export default About