import React from 'react'
import ContactMeLeft from './ContactMeLeft'
import ContactMeRight from './ContactMeRight'

const ContactMeMain = () => {
  return (
    <div id='contact' className='max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 sm:px-6 md:px-8'>
        <h2 className='text-5xl sm:text-6xl text-red mb-10 text-center'>Contact Me</h2>
        <div className='flex flex-col lg:flex-row justify-between gap-12 sm:gap-16 bg-darkGrey p-6 sm:p-8 rounded-2xl'>
            <ContactMeLeft />
            <ContactMeRight />
        </div>
    </div>
  )
}

export default ContactMeMain
