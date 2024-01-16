import React from 'react'

const ContactForm = () => {
  return (
    <div>
      
      <form class='contact-form grid'>
        <div class="contact-inputs grid">

          <div class="contact-content border">
            {/* <label class='contact-label'>Your name</label> */}
            <input class='contact-input' type='text' name='user_name' id="user_name" 
            placeholder='Your name'/>
          </div>

          <div class="contact-content border">
            {/* <label class='contact-label'>Your email</label> */}
            <input class='contact-input' type='email' name = 'user_email' id="user_email" 
            placeholder='Your email'/>
          </div>

          <div class="contact-content border">
            {/* <label class='contact-label'>Message</label>    */}
            <textarea class='contact-input' name='message' cols ='0' row="7" id="message" 
            placeholder='Message'> </textarea>
          </div>

          <div>
            <button class="button" onclick="sendEmail()">Send Message 
              <i class="uil uil-message button-icon"></i>
            </button>
          </div>

        </div>

      </form>


    </div>
  )
}

export default ContactForm