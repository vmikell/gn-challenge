import React from 'react'
import { Button } from './Button'
// IMPORT STYLES
import './HeroSection.css'
import '../App.css'
// IMPORT FONTS
import '../webfonts/kg_happy_regular/stylesheet.css'

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <div className='hero-gradient'></div>
      <img src='/images/Hero-Image-1.jpg' />
      <div className='hero-text'>
        <div className='hero-text--background'>
          <p>Vietnamese street food</p>
        </div>
      </div>
      <div className='hero-section-btn'>
        <Button
          buttonStyle='btn--secondary'
          buttonSize='btn--large'
          btnId='btn-1'
        >
          Menu
        </Button>

        <Button
          buttonStyle='btn--secondary'
          buttonSize='btn--large'
          btnId='btn-2'
        >
          Book a Table
        </Button>

        <Button
          buttonStyle='btn--secondary'
          buttonSize='btn--large'
          btnId='btn-3'
        >
          Delivery
        </Button>

        <Button
          buttonStyle='btn--secondary'
          buttonSize='btn--large'
          btnId='btn-4'
        >
          Click & Collect
        </Button>

        <Button
          buttonStyle='btn--secondary'
          buttonSize='btn--large'
          btnId='btn-5'
        >
          Nutrition
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
