import headerLogo from '../assets/images/header-logo.svg'
import hamburger from '../assets/icons/hamburger.svg'
import { navLinks } from '../constants'
import { useState } from 'react'
import BurgerMenu from './BurgerMenu/BurgerMenu'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='py-8 absolute z-10 w-full max-container px-4 md:px-8 lg:px-16'>
      <nav className='flex justify-between items-center'>
        <NavLink to="/nike">
          <img
            src={headerLogo}
            alt="Nike"
            width={130}
            height={29}
          />
        </NavLink>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={`nike/${link.href}`}
                className='font-montserrat leading-normal text-lg text-slate-gray
                hover:text-coral-red hover:transition-all'
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img
            className='cursor-pointer'
            src={hamburger}
            alt="="
            onClick={() => setMenuOpen(true)}
            width={25}
            height={25}
          />
        </div>
      </nav>
      <BurgerMenu menuOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
    </header>
  )
}

export default Nav