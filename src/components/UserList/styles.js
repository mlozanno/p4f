import styled from 'styled-components';

export const StyledUserList = styled.ul`
	display: flex;
	margin-top: ${({ theme }) => theme.metric(3)};
	padding: ${({ theme }) => theme.metric(2, 0)};
	width: 100%;
	overflow-y: scroll;

	@media (min-width: 768px) {
		overflow: initial;
		display: block;
		width: ${({ theme }) => theme.metric(30)};
		margin-right: ${({ theme }) => theme.metric(3)};
		margin-top: 0;
	}
`;
