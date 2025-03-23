import React from 'react'
import ContactForm from './ContactForm'

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col  text-center gap-4 w-full'>
        <div>
            <h2 className='text-3xl text-red mb-2'>Get In Touch</h2>
            <p className='text-white'>Have a question or want to work together?</p>
        </div>
        <ContactForm />
    </div>
  )
}


export default ContactMeLeft