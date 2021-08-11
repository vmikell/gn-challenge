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

  const menu = [
    'Menu',
    'Locations',
    'Our Story',
    'Pho To Go',
    'Bookings',
    'Careers',
    'Contact',
  ]

  const socialMedia = [
    'facebook-f',
    'instagram',
    'snapchat-ghost',
    'youtube',
    'twitter',
  ]

  const lowerNav = [
    'Careers',
    'FAQs',
    'Privacy',
    'Gift Vouchers'
  ]

  const renderNavitems = () => {
    return menu.map((item, index) => {
      return <li key={index}>{item}</li>
    })
  }

  const renderSocialMedia = () => {
    return socialMedia.map((item, index) => {
      return <i class={`fab fa-${item}`} key={index}></i>
    })
  }

  const renderLowerNav = () =>{
    return lowerNav.map((item, index)=>{
      return <li key={index}>{item}</li>
    })
  }

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
        <ul className='upper-nav'>{renderNavitems()}</ul>
        <div className='social-media'>{renderSocialMedia()}</div>
        <ul className='lower-nav'>{renderLowerNav()}</ul>
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
