import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
import { RxHamburgerMenu } from "react-icons/rx";
import {useState} from 'react'

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-3 sm:gap-4 mt-2">
      <div className="relative flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-3 sm:p-4 md:p-6 rounded-r-full rounded-l-full border-red border-[0.5px]">
        <NavbarLogo />
        <div className={`${menuOpen ? "block" : "hidden"} absolute top-[calc(100%+0.5rem)] left-0 w-full lg:static lg:w-auto lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div className='flex lg:hidden p-3 sm:p-4 md:p-6 bg-black items-center justify-center rounded-full border-red border-[0.5px]'>
        <button className='text-white text-xl sm:text-2xl p-2 sm:p-3 border border-red rounded-full' onClick={toggleMenu}>
          <RxHamburgerMenu />
        </button>
        
      </div>
    </nav>
  )
}

export default NavbarMain
