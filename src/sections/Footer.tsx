import footerLogo from '../assets/images/footer-logo.svg'
import copyright from '../assets/icons/copyright-sign.svg'

import { footerLinks, socialMedia } from '../constants'
import MapLeaflet from '../components/MapLeaflet/MapLeaflet'

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-black">

      <div className='flex flex-col justify-center items-center'>
        <div className="flex flex-col justify-center items-center sm:w-1/2 lg:w-1/3">
          <a href="/">
            <img className='w-[130px]' src={footerLogo} alt="Nike" />
          </a>
          <p className='text-sm text-center text-white mt-6 leading-6 font-montserrat'>
            Get shoes ready for the new term at your nearest Nike store. 
            <span className='capitalize'>find your perfect size at store. get rewards.</span>
          </p>
          <div className='mt-8 flex justify-center gap-8 w-full flex-wrap'>
            {socialMedia.map((icon) => (
              <div
                key={icon.src}
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer'
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className='w-7 h-7'
                />
              </div>
            ))}
          </div>
        </div>

        <div 
          className='mt-16 flex flex-col justify-center items-center
          sm:flex-row sm:items-start sm:gap-16'
        >
          {footerLinks.map((section) => (
            <div
              className='mb-6 flex flex-col justify-center items-center
              sm:justify-start'
              key={section.title}
            >
              <h4 className='text-white mb-4 text-xl font-montserrat font-bold'>
                {section.title}
              </h4>
              <ul className='flex flex-wrap justify-center sm:flex-col sm:items-center'>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className='text-white mt-2 cursor-pointer font-montserrat mr-5
                    sm:text-center sm:mr-0
                    hover:text-opacity-50'
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='flex justify-center mb-5 w-full'>
          <MapLeaflet />
        </div>
      </div>

      <div className='flex justify-center items-center gap-2 font-montserrat cursor-pointer'>
        <img className='w-4' src={copyright} alt="c" />
        <p className='text-white'>Copyright. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer