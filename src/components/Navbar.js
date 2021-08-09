import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// IMPORT STYLES
import './Navbar.css'
// IMPORT COMPONENTS
import { Button } from './Button'
// IMPORT FONTS
import '../webfonts/kg_happy_solid/stylesheet.css'
import '../webfonts/kg_tangled_up_in_you/stylesheet.css'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <div className='navbar-wrapper'>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          <img
            src='https://www.phocafe.co.uk/wp-content/themes/pho-2018/library/images/logo.svg'
            alt='Pho Cafe logo'
          />
        </Link>
        <div className='navbar-container'>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/menu' className='nav-links'>
                MENU
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/locations' className='nav-links'>
                LOCATIONS
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/our-story' className='nav-links'>
                OUR STORY
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/gift-vouchers' className='nav-links'>
                GIFT VOUCHERS
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/careers' className='nav-links'>
                CAREERS
              </Link>
            </li>
          </ul>
        </div>
        <div className='btn-wrapper'>
          <Button buttonStyle='btn--primary'>
            <img
              src='https://www.phocafe.co.uk/wp-content/themes/pho-2018/library/images/bag-icon.svg'
              alt='Bag Icon'
              className='bag-icon'
            />
            Book a Table
          </Button>
          <Button buttonStyle='btn--primary'>
            <i class='fas fa-map-marker-alt btn--icon'></i>Pho To Go
          </Button>
          <Link to='/navigation'>
            <Button buttonStyle='btn--toggle' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
