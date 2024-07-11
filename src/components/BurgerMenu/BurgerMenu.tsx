import { navLinks } from '../../constants'
import hamburger from '../../assets/icons/hamburger.svg'
import './BurgerMenu.css'

const BurgerMenu = ({ menuOpen, closeMenu }: { menuOpen: boolean, closeMenu: () => void }) => {

  return (
    <div className={`burgerContainer ${menuOpen ? 'burgerOpen' : ''}`} onClick={closeMenu}>
      <div>
        <img
          className={`cursor-pointer closeButton ${menuOpen ? 'closeButtonSpin' : ''}`}
          src={hamburger}
          alt="="
          width={25}
          height={25}
        />
      </div>
      <ul className='flex flex-col justify-center items-center gap-16 h-full'>
        {navLinks.map((link) => (
          <li key={link.label} onClick={(e) => e.stopPropagation()}>
            <a
              href={link.href}
              className='font-montserrat leading-normal text-2xl text-white
              hover:text-coral-red hover:transition-all'
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BurgerMenu