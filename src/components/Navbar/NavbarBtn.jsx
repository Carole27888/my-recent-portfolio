import React from 'react'
import { FiArrowDownRight } from "react-icons/fi";

const NavbarBtn = () => {
  return (
    <button className=" px-4 py-2 rounded-full text-xl font-bold font-body text-white border-red border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-black transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
        Let's Work
        <div className= 'sm:hidden md:block'>
        <FiArrowDownRight />
        </div>
    </button>
  )
}

export default NavbarBtn