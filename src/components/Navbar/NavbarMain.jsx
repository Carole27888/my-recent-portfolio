import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
// import ThemeToggle from './ThemeToggle'
import { RxHamburgerMenu } from "react-icons/rx";
import {useState} from 'react'

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-2 sm:gap-3 mt-1">
      <div className="relative flex w-full max-w-[1200px] mx-auto items-center justify-between rounded-full border border-red bg-black/95 px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.18)] sm:px-5 sm:py-3">
        <NavbarLogo />
        <div className={`${menuOpen ? "block" : "hidden"} absolute top-[calc(100%+0.35rem)] left-0 w-full lg:static lg:w-auto lg:block`}>
          <NavbarLinks />
        </div>
        <div className="flex items-center gap-3">
          {/* <ThemeToggle /> */}
          <NavbarBtn />
        </div>
      </div>
      <div className='flex lg:hidden items-center justify-center rounded-full border border-red bg-black/95 px-3 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.18)]'>
        <button className='text-white text-lg sm:text-xl p-1.5 sm:p-2 border border-red rounded-full' onClick={toggleMenu}>
          <RxHamburgerMenu />
        </button>
        
      </div>
    </nav>
  )
}

export default NavbarMain
