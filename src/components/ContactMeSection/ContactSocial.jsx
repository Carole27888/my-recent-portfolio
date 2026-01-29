import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Social from './Social'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <Social link="https://github.com/Carole27888" Icon={FaGithub}/>
        <Social link="https://www.linkedin.com/in/caroline-mutemi-70b0422b2/" Icon={FaLinkedin}/>
        <Social link="https://www.instagram.com/carole.codes?igsh=MndyaXNiYTFwODBi" Icon={FaSquareInstagram}/>
        <Social link="https://www.facebook.com/share/1BYWZLpxpy/?mibextid=qi2Omg" Icon={FaFacebook}/>
    </div>
  )
}

export default ContactSocial
