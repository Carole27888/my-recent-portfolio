import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import SingleInfo from './SingleInfo'

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white '>
       <SingleInfo text= "cmutemi27@gmail.com" Image={MdOutlineMail} />
         <SingleInfo text= "+254795052260" Image={FaPhone} />
         <SingleInfo text= "Nairobi, Kenya" Image={MdLocationPin} />
    </div>
  )
}

export default ContactInfo