import React from 'react';
import { BsTelegram } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { UilWhatsapp } from '@iconscout/react-unicons';
import { IoLogoWhatsapp } from "react-icons/io";
import { PiTelegramLogo } from "react-icons/pi";


const ContactBlock = () => {
  return ( 
    <div className="contact-block">
        
      <div className="contact-information">
        <i className="uil uil-whatsapp contact-icon"></i>
        <div>
          <h3 className="contact-title">WhatsApp</h3>
          <p className="contact-subtitle">+7927 731-47-05</p>
          <a href='' className="contact-button">Write me<i className='uil uil-arrow-right button-icon'></i></a>
        </div>
      </div>

      <div className="contact-information">
        <PiTelegramLogo size={30} color="hsl(265, 0%, 20%)"/>
        <div>
          <h3 className="contact-title">Telegram</h3>
          <p className="contact-subtitle">@allanud</p>
          <a href='' className="contact-button">Write me<i className='uil uil-arrow-right button-icon'></i></a> 
          </div>
        </div>


        <div className="contact-information">
          <i className="uil uil-envelopes contact-icon"></i>
          <div>
            <h3 className="contact-title">Email</h3>
            <p className="contact-subtitle">allanudelman@gmail.com</p>
            <a href='' className="contact-button">Write me<i className='uil uil-arrow-right button-icon'></i></a>
          </div>
        </div>

    </div>
  )
}

export default ContactBlock