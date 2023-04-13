import React from 'react';
import '../components/FaqStyle.css';
import { useState } from 'react';

const Faq = () => {
  const [text, setText] = useState(new Array(data.length).fill(false));

  const display = (index) => {
    const newText = [...text];
    newText[index] = !newText[index];
    setText(newText);
  };

  return (
    <div className='faq'>
      <div className='accordion'>
        {data.map((item, i) => (
          <div className='item' key={i}>
            <div className='tittle'>
              <h2 className='questions' onClick={() => display(i)}>{item.question}</h2>
              <p onClick={() => display(i)}>{text[i] ? '-' : '+'}</p>
            </div>
            <div className='content'>{text[i] && item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    question: 'What kind of language courses do you offer?',
    answer:
      'We offer comprehensive language courses in Hindi, Lithuanian, and Arabic. Our courses are designed for both beginners and advanced learners, and we offer personalized lessons tailored to your unique needs and learning style.',
  },
  {
    question: 'What materials do you use in your courses?',
    answer:
      'We use a variety of materials and resources, including textbooks, multimedia, and authentic materials, to keep our lessons engaging and dynamic. We also provide supplemental materials and resources to help you practice and reinforce what you learn in class.',
  },
  {
    question: 'What are your scheduling options?',
    answer:
      'We offer flexible scheduling options to accommodate your busy lifestyle. We can schedule lessons at a time and frequency that works best for you, whether its once a week or several times a week.',
  },
  {
    question: 'What if I need to cancel or reschedule a lesson?',
    answer:
      'We understand that life can be unpredictable, and we are happy to accommodate schedule changes when possible. Please let us know as soon as possible if you need to cancel or reschedule a lesson, and we will do our best to find a new time that works for you.',
  },
  {
    question: 'How can I get in touch with you if I have any questions or concerns?',
    answer:
      'You can reach us by phone, email, or through the contact form on our website. We are always happy to answer any questions or concerns you may have about our courses or services.',
  },
];

export default Faq;
