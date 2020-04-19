import styled from 'styled-components';
import theme from '~/styles/theme';

export const StyledNav = styled.nav`
	> ul {
		display: flex;
		margin-bottom: ${theme.metric(2)};
		border-radius: 0.6rem;
		padding: ${theme.metric(2)};
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.16);
		background-color: #fff;
	}

	li {
		display: flex;
		margin-right: ${theme.metric(3)};
	}

	svg {
		margin-right: ${theme.metric(1)};
		font-size: ${theme.metric(3)};
	}

	a {
		color: ${theme.colors.blue};
		transition: color 0.2s linear;
		font-size: ${theme.metric(2)};
		display: flex;
		align-items: center;

		&:hover {
			color: ${theme.colors.darkBlue};
		}
	}
`;
