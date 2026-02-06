import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import SingleInfo from './SingleInfo'

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white w-full'>
       <SingleInfo label='Email' text='cmutemi27@gmail.com' Image={MdOutlineMail} />
         <SingleInfo label='Phone' text='+254795052260' Image={FaPhone} href='tel:+254795052260' />
         <SingleInfo label='WhatsApp' text='+254795052260' Image={FaWhatsapp} href='https://wa.me/254795052260' />
         <SingleInfo label='Location' text='Nairobi, Kenya' Image={MdLocationPin} />
    </div>
  )
}

export default ContactInfo
