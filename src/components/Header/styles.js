import styled from 'styled-components';
import theme from '~/styles/theme';

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	background-color: #fff;
	padding: ${theme.metric(1, 2)};
	box-shadow: 1px 0 10px 0px rgba(0, 0, 0, 0.16);

	svg {
		font-size: ${theme.metric(4)};
		color: ${theme.colors.blue};
		margin-right: ${theme.metric(1)};
	}

	@media (min-width: 768px) {
		height: ${theme.metric(25)};
		justify-content: center;
		font-size: ${theme.metric(5)};
		margin-bottom: ${theme.metric(5)};

		svg {
			font-size: ${theme.metric(8)};
		}
	}
`;
