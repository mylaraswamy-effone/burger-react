import React from 'react';
import '../NavigationItems/NavigationItems.css';
import styled from 'styled-components';

const navigationItems = () => {
  return(
    <ul className='NavigationItems'>
      <li className='NavigationItem'><a href='/' className='active'>Burger Builder</a></li>
      <li className='NavigationItem'><a href='/'>Checkout</a></li>
    </ul>
  )
}

export default navigationItems;