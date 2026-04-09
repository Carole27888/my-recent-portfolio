import React from 'react'
import { FiArrowDownRight } from "react-icons/fi";

const NavbarBtn = () => {
  return (
    <a
      href="https://calendar.app.google/q8jZLHkP7aRMTFsE8"
      target="_blank"
      rel="noreferrer"
      className="hidden sm:flex px-4 py-2 rounded-full text-base md:text-lg font-bold font-body text-white border-red border items-center gap-1 bg-gradient-to-r from-darkCyan to-black transition-all duration-500 hover:scale-105 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
    >
        Book a Call
        <div className='hidden md:block'>
        <FiArrowDownRight />
        </div>
    </a>
  )
}

export default NavbarBtn
