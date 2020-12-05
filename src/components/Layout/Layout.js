import React from 'react';
import Aux from '../../hoc/Aux'
import '../Layout/Layout.css';
import Toolbar from '../Navigation/Toolbar/Toobar';
import SideDrawer from '../Navigation/Sidedrawer/Sidedrawer';
import styled from 'styled-components';

const layout = (props) => {
	return(
		<Aux>
			<Toolbar />
			<SideDrawer />
			<main className='Content'>{props.children}</main>
		</Aux>
	)

}

export default layout;