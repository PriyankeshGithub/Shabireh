import React from 'react'
import '../components/HomeStyle.css';
import Navbar from './Navbar';
import Typewriter from 'typewriter-effect';

const Home = () => {
  
  return (
    <div className='home'>
    <Navbar/>
    
      <div className='Hero'>
      <h1><Typewriter options={{
        strings: ['नमस्ते','Hello', 'Sveiki', 'مرحبًا', 'Hola'],
        autoStart: true,
        loop: true, }} />Welcome to <span>Shabireh</span></h1>
        <p>Dedicated to helping students achieve their language learning goals.<br/>
        Let's start this language learning journey together!</p>
        


      </div>
    
    </div>
  )
}

export default Home