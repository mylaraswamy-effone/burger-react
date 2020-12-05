import { render } from '@testing-library/react';
import React from 'react';
import '../Sidedrawer/Sidedrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = () => {
  return(
    <div className='SideDrawer'>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  )
}

export default sideDrawer;