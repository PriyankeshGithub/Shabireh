import React from 'react'
import '../components/AppointmentStyle.css';

const Appointment = () => {
  return (
    <div className='appointment'>
      <h1 className='appointmentText'>Book Appointment</h1>
      <p className='contactDesc'>We'd love to hear from you! Please use the form below to get in touch with us. <br/> Whether you have a question, comment, or just want to say hello,<br/> we'll do our best to get back to you as soon as possible. Thank you for your interest :)!</p>
      <div className="contactFrom">
      <form>
        
          <input type="text" name="name" placeholder='Name' />
        
        <br />
        
          <input type="email" name="email" placeholder='Email' />
        
        <br />
      
          <textarea name="message" placeholder='Message'>

          </textarea>
       
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Appointment