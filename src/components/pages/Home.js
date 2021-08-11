import React from 'react'
// IMPORT STYLES
import '../../App.css'
// IMPORT COMPONENTS
import HeroSection from '../HeroSection'
import Navbar from '../Navbar';

const Home = () => {
  const menu = [
    'Menu',
    'Locations',
    'Our Story',
    'Gift Vouchers',    
    'Careers',
    
  ]

  
  return (
    <>
      <Navbar menu={menu}/>
      <HeroSection />
    </>
  )
}

export default Home
