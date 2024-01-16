import React from 'react';
import { BsTelegram } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { UilWhatsapp } from '@iconscout/react-unicons';


const ContactBlock = () => {
  return (
    <div class="contact-container container grid">
      <div>
        
        <div class="contact-information">
          <i class="contact-icon"><UilWhatsapp/></i>
          <div>
            <h3 class="contact-title">WhatsApp</h3>
            <span class="contact-subtitle">+7927 731-47-05</span>
          </div>
        </div>

        <div class="contact-information">
          <i class="contact-icon"><BsTelegram/></i>
          <div>
            <h3 class="contact-title">Telegram</h3>
            <span class="contact-subtitle">+7927 731-47-05</span>
          </div>
        </div>

        <div class="contact-information">
          <i class="uil uil-envelope contact-icon"></i>
          <div>
            <h3 class="contact-title">Email</h3>
            <span class="contact-subtitle">allanudelman@gmail.com</span>
          </div>
        </div>

        {/* <div class="contact-information">
          <i class="uil uil-map-marker contact-icon"></i>
          <div>
            <h3 class="contact-title">Location</h3>
            <span class="contact-subtitle">Israel</span>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default ContactBlock