import React, { useState } from 'react'

const ContactForm = ({ handleCraftReq }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [multiline, setMultiline] = useState('');

    const handleChange = e => {
        if (e.target.name === 'name') setName(e.target.value);
        else if (e.target.name === 'email') setEmail(e.target.value);
        else if (e.target.name === 'multiline') setMultiline(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const req = {
            from_name: name,
            from_email: email,
            message: multiline
        }

        handleCraftReq(req);
    }

    return (
        <div className='contact-form-container'>
            <form onSubmit={handleSubmit}>
                <input placeholder="give me name" type="text" name='name' value={name} onChange={handleChange}/>
                <input placeholder="give me email" type="email" name='email' value={email} onChange={handleChange}/>
                <input placeholder="give me message" type="multiline" name='multiline' value={multiline} onChange={handleChange}/>
                <button>Send</button>
            </form>
        </div>
    )
}

export default ContactForm
