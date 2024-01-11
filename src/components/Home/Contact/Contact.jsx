import React from 'react';
import { UilWhatsapp } from '@iconscout/react-unicons';
import { UilEnvelope } from '@iconscout/react-unicons';
import { UilMapMarkerAlt } from '@iconscout/react-unicons';
import { BsTelegram } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";


import './Contact.css';


const Contact = () => {
  return (
    <div>
      <BsTelegram/>
      <FaWhatsappSquare/>
      <UilWhatsapp/>
      <UilEnvelope/>
      <UilMapMarkerAlt/>
      <section class="contact section" id="contact">
    <h2 class="section-title">Contact</h2>
    <span class="section-subtitle">Get in touch</span>

    <div class="contact-container container grid">
      <div>
        
        <div class="contact-information">
          <i class="uil uil-phone contact-icon"></i>
          <div>
            <h3 class="contact-title">Phone</h3>
            <span class="contact-subtitle">058-71-69-7-69</span>
          </div>
        </div>

        <div class="contact-information">
          <i class="uil uil-envelope contact-icon"></i>
          <div>
            <h3 class="contact-title">Email</h3>
            <span class="contact-subtitle">allanudelman@gmail.com</span>
          </div>
        </div>

        <div class="contact-information">
          <i class="uil uil-map-marker contact-icon"></i>
          <div>
            <h3 class="contact-title">Location</h3>
            <span class="contact-subtitle">Israel</span>
          </div>
        </div>

      </div>

      <form class='contact-form grid'>
        <div class="contact-inputs grid">

          <div class="contact-content">
            <label class='contact-label'>You name</label>
            <input class='contact-input' type='text' name='user_name' id="user_name"/>
          </div>

          <div class="contact-content">
            <label class='contact-label'>Your email</label>
            <input class='contact-input' type='email' name = 'user_email' id="user_email"/>
          </div>

          <div class="contact-content">
            <label class='contact-label'>Message</label>   
            <textarea class='contact-input' name='message' cols ='0' row="7" id="message"> </textarea>
          </div>

          <div>
            <button class="button button-flex" onclick="sendEmail()">Send Message 
              <i class="uil uil-message button-icon"></i>
            </button>
          </div>

        </div>

      </form>

    </div>

  </section>
    </div>
  )
}

export default Contact