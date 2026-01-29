import React from 'react'
import ContactForm from './ContactForm'

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col  text-center gap-4 w-full'>
        <div>
            <h2 className='text-3xl text-red mb-2'>Start a Project</h2>
            <p className='text-white'>Tell me about your brand and the support you need.</p>
        </div>
        <ContactForm />
    </div>
  )
}


export default ContactMeLeft
