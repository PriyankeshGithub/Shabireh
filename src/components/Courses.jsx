import React from 'react'
import '../components/CoursesStyle.css';
import arabicLogo from '../logo/arab.jpg'
import hindiLogo from '../logo/hindii.jpg'
import lithLogo from '../logo/lith.png'


const Cards = (props) =>{
  return (
    
    <div className='card'>
      <div className="cardBody">
        <img src={props.img} className='cardImg'/>
        <h2 className='cardTitle'>{props.title}</h2>
        <p className='cardDesc'>{props.desc}</p>
      </div>
    </div>
    
  )
}
const Courses = () => {
  return (
    <div className='courses'>
    <h1>Classes we offer</h1>
      <Cards img={lithLogo} title ="Lithuanian" desc="Lithuanian is a Baltic language spoken primarily in Lithuania and is one of the oldest living Indo-European languages. It is written in the Latin script and has retained many archaic features that have been lost in other Indo-European languages."/>

      <Cards img={hindiLogo} title ="Hindi" desc="Hindi is an Indo-Aryan language primarily spoken in India and is written in the Devanagari script. It is the fourth most spoken language in the world."/>

      <Cards img={arabicLogo} title ="Arabic" desc="Arabic is a Semitic language primarily spoken in the Middle East and North Africa and is written in the Arabic script. It is the fifth most spoken language in the world and is also the liturgical language of Islam."/> </div>
      )
  
}

export default Courses