import React from 'react'
import { Button } from './Button'
// IMPORT STYLES
import './HeroSection.css'
import '../App.css'
// IMPORT FONTS
import '../webfonts/kg_happy_regular/stylesheet.css'

const HeroSection = () => {
  const btn = [
    'Menu',
    'Book a Table',
    'Delivery',
    'Click & Collect',
    'Nutrition',
  ]

  const renderHeroBtn = () => {
    return btn.map((item, index) => {
      return (
        <Button
          buttonStyle='btn--secondary'
          buttonSize='btn--large'
          btnId={`btn-${index + 1}`}
          key={index}
        >
          {item}
        </Button>
      )
    })
  }

  return (
    <div className='hero-container'>
      <div className='hero-gradient'></div>
      <img src='/images/Hero-Image-1.jpg' alt='Hero Background' />
      <div className='hero-text'>
        <div className='hero-text--background'>
          <p>Vietnamese street food</p>
        </div>
      </div>
      <div className='hero-section-btn'>{renderHeroBtn()}</div>
    </div>
  )
}

export default HeroSection
