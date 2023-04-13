import React from 'react'
import '../components/CoursesStyle.css';

const Courses = () => {
  return (
    <div className='classes'>
      <h1>Classes we offer</h1>
    <div className="languages">
        <div className="lithuanian">
          <h2 className='langName'>Lithuanian</h2>
          <p className='langDesc'>Lithuanian is the official language of Lithuania <br/>
          and is spoken by about 3 million people worldwide</p>
        </div>

        <div className="hindi">
          <h2 className='langName'>Hindi</h2>
          <p className='langDesc'>Hindi is one of the official languages of India <br/>
          and is spoken by more than 500 million people worldwide</p>
        </div>

        

        <div className="arabic">
          <h2 className='langName'>Arabic</h2>
          <p className='langDesc'>Arabic is a Semitic language that is spoken by more than 420 million people worldwide<br/>
          and is the fifth most widely spoken language in the world.</p>
        </div>
    </div>
    </div>
  )
}

export default Courses