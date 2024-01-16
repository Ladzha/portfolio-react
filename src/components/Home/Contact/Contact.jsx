import React from 'react';
import ContactBlock from './ContactBlock';
import ContactForm from './ContactForm';

import './Contact.css';

const Contact = () => {
  return (
    <section className='contact-container' id="contact">
      <ContactBlock/>
      <ContactForm/>
    </section>
  )
}

export default Contact