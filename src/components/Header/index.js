import React from 'react';

import { GiNinjaHead } from 'react-icons/gi';

import { StyledHeader } from './styles';

const Header = () => (
	<StyledHeader data-testid="header">
		<GiNinjaHead data-testid="logo" /> FakeApp
	</StyledHeader>
);

export default Header;
