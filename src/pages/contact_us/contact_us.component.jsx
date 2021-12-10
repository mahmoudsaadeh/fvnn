
import React from "react";

import './contact_us.styles.scss';

// import cherry_tomatoes from '../../assets/cherry_tomatoes.png';
import ContactInfo from "../../components/contact_info/contact_info.component";
import ContactForm from "../../components/contact_form/contact_form.component";

import { BsTelephoneFill } from 'react-icons/bs';
import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';

const ContactUsPage = () => {


    return (
        <div>
            <div className='contact-container'>
                <img className='contact-img' src='https://www2.ipm.ucanr.edu/PMG/IMAGES/S/S-TO-SCEN-MC.020banner.png' title='tomatoes' alt='Contact Us Image' />
                <p className='contact-text'>Contact Us</p>
            </div>
            <div className='contact-info-main-container'>
                <ContactInfo
                    contactIcon={<BsTelephoneFill size={35} />}
                    contactTitle='Phone'
                    contactData='+961 01 555777' />
                <ContactInfo
                    contactIcon={<IoLocationOutline size={35} />}
                    contactTitle='Address'
                    contactData=' Area 1, Street 63, Beirut' />
                <ContactInfo
                    contactIcon={<IoTimeOutline size={35} />}
                    contactTitle='Open time'
                    contactData='From 07:00 am to 10:00 pm' />
                <ContactInfo
                    contactIcon={<MdOutlineEmail size={35} />}
                    contactTitle='Email'
                    contactData='fvnn@gmail.com' />
            </div>
            <div>
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactUsPage;