import React, { useState } from 'react';
import ContactForm from "./ContactForm";
import Submitted from "./Submitted";

// 
// https://medium.com/@belktaylor12/creating-a-contact-form-for-your-react-portfolio-without-a-backend-dc1abaca820f 

const Contact = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = req => {
        const template = process.env.REACT_APP_EMAILJS_TEMPLATE;
        const userId = process.env.REACT_APP_EMAILJS_USERID;
        const params = req;

        window.emailjs.send('default_service', template, params, userId).then(res => {
            setIsLoading(false);
            console.log(res);
        }).catch(e => {
            setIsLoading(false);
            console.log(e);
        });
    }

    const handleCraftReq = req => {
        setFormSubmitted(true);
        setIsLoading(true);
        handleSubmit(req);
    }

    return (
        <div className='contact-container'>
            {isLoading ? 'Loading...' : formSubmitted ? <Submitted /> : <ContactForm handleCraftReq={handleCraftReq} />}
        </div>
    )
}

export default Contact
