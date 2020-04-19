import styled from 'styled-components';
import theme from '~/styles/theme';

export const StyledUserList = styled.ul`
	display: flex;
	margin-top: ${theme.metric(3)};
	padding: ${theme.metric(2, 0)};
	width: 100%;
	overflow-y: scroll;

	@media (min-width: 768px) {
		overflow: initial;
		border-radius: 0.6rem;
		padding: ${theme.metric(1)};
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.16);
		background-color: #fff;
		display: block;
		width: ${theme.metric(33)};
		margin-right: ${theme.metric(3)};
		margin-top: 0;
	}
`;
