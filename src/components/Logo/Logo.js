import React from 'react';
import '../Logo/Logo.css';
import LogoImage from '../../../src/assets/images/burger-logo.png'

const logo = (props) => {
  return(
    <div className='Logo'>
      <img src={LogoImage} alt="MyBurgerLogo"></img>
    </div>
  )
}

export default logo;