
import React from "react";

import './contact_info.styles.scss';



const ContactInfo = ({contactIcon, contactTitle, contactData}) => {


    return (
        <div>
            <div className='contact-info-container'>
                <div className='contact-icon'>
                    {contactIcon}
                </div>
                <div className='contact-title'>
                    {contactTitle}
                </div>
                <div className='contact-data'>
                    {contactData}
                </div>
            </div>         
        </div>
    );
};

export default ContactInfo;
