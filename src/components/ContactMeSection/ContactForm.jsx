import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');

    const handlename = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_n28pef3', 'template_21pgq1m', form.current, {
                publicKey: 'FzG-6ifmIbi76vaEz',
            })
            .then(
                () => {
                    setName('');
                    setEmail('');
                    setMessage('');
                    setSuccess('Message sent successfully');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div>
            <p className='text-cyan'>{success}</p>
            <form
                className='flex flex-col gap-4 text-white'
                ref={form}
                onSubmit={sendEmail}
            >
                <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="h-12 rounded-lg bg-grey px-2"
                    value={name}
                    onChange={handlename}
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="h-12 rounded-lg bg-grey px-2"
                    value={email}
                    onChange={handleEmail}
                />
                <textarea
                    name="message"
                    placeholder="Tell me about your needs, timeline, and tools."
                    required
                    className="rounded-lg bg-grey p-2"
                    value={message}
                    onChange={handleMessage}
                />
                <button
                    type="submit" // Submit the form when clicked
                    className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
