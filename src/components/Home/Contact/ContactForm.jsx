import React from 'react'

const ContactForm = () => {
  return (
    <div className='contact-block'>
      <form class='contact-form'>

        <div class="contact-content">
          <label class='contact-label'>Your name</label>
          <input class='contact-input' type='text' name='user_name' id="user_name" 
          placeholder='Your name'/>
        </div>

        <div class="contact-content">
          <label class='contact-label'>Your email</label>
          <input class='contact-input' type='email' name = 'user_email' id="user_email" 
          placeholder='Your email'/>
        </div>

        <div class="contact-content">
          <label class='contact-label'>Message</label>
          <textarea class='contact-input border' name='message' cols ='30' row="10" id="message" 
          placeholder='Message'></textarea>
        </div>

        <button class="button" onclick="sendEmail()">Send Message 
          <i class="uil uil-message button-icon"></i>
        </button>

      </form>

    </div>
  )
}

export default ContactForm