
import React from "react";

import './contact_form.styles.scss';


const ContactForm = () => {


    return (
        <div className='contact-form-main-container'>
            <h1 className='contact-form-title'>Leave Message</h1>
            <form className='contact-form'>
                <input className='input-half-1' type='text' placeholder='Your Name' />
                <input className='input-half-2' type='email' placeholder='Your Email' />
                <textarea className='input-full' rows='7' placeholder='Your Message' />
                <input className='form-submit' type='submit' value='Send Message' />
            </form>
        </div>
    );
};

export default ContactForm;
