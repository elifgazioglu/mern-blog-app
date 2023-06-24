import React from 'react'
import Logo from '../images/Logo.JPG'

const Footer = () => {
  return (
    <div className='footerContainer'>
      <footer>
      <img src={Logo} alt=''/>
      <span>Made by Elif<b>👩🏻‍💻</b></span>
    </footer>
    </div>
  )
}

export default Footer