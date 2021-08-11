import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// IMPORT STYLES
import './Navbar.css'
// IMPORT COMPONENTS
import { Button } from './Button'
// IMPORT FONTS
import '../webfonts/kg_happy_solid/stylesheet.css'
import '../webfonts/kg_tangled_up_in_you/stylesheet.css'

const Navbar = ({ menu }) => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const renderNavItems = () => {
    return menu.map((item, index) => {
      return (
        <li className='nav-item' key={index}>
          <Link to={`/${item} `} className='nav-links'>
            {item}
          </Link>
        </li>
      )
    })
  }
  console.log(menu)

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
          <ul className='nav-menu'>{renderNavItems()}</ul>
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
            <i className='fas fa-map-marker-alt btn--icon'></i>Pho To Go
          </Button>
          <Link to='/navigation'>
            <Button buttonStyle='btn--toggle' onClick={handleClick}>
              <i className='fas fa-bars' />
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
