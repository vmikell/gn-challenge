import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// IMPORT STYLES
import '../App.css'
import './NavigationSection.css'
// IMPORT COMPONENTS
import { Button } from './Button'
// IMPORT FONTS
import '../webfonts/kg_tangled_up_in_you/stylesheet.css'
import '../webfonts/kg_happy_solid/stylesheet.css'

const NavigationSection = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <div className='navigation-container'>
      <Link to='/' onClick={handleClick}>
        <Button buttonStyle='btn--nav'>
          <i className={click ? 'fas fa-bars' : 'fas fa-times'} />
        </Button>
      </Link>
      <div className='navigation-background'>
        <div className='navigation-card'></div>
      </div>

      <div className='nav-card'>
        <ul className='upper-nav'>
          <li>MENU</li>
          <li>LOCATIONS</li>
          <li>OUR STORY</li>
          <li>PHO TO GO</li>
          <li>BOOKINGS</li>
          <li>CAREERS</li>
          <li>CONTACT</li>
        </ul>
        <div className='social-media'>
          <i class='fab fa-facebook-f'></i>
          <i class='fab fa-instagram'></i>
          <i class='fab fa-snapchat-ghost'></i>
          <i class='fab fa-youtube'></i>
          <i class='fab fa-twitter'></i>
        </div>
        <ul className='lower-nav'>
          <li>Careers</li>
          <li>FAQs</li>
          <li>Privacy</li>
          <li>Gift Vouchers</li>
        </ul>
        <div className='nav-footer'>
          <a href='https://victormikell.com'>
            Website assembled by Victor Mikell
          </a>
          Copyright Pho 2021
        </div>
      </div>
    </div>
  )
}

export default NavigationSection
