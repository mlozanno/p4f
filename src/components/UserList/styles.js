import styled from 'styled-components';

export const StyledUserList = styled.ul`
	display: flex;
	margin-top: ${({ theme }) => theme.metric(3)};
	padding: ${({ theme }) => theme.metric(2, 0)};
	width: 100%;
	overflow-y: scroll;

	@media (min-width: 768px) {
		overflow: initial;
		border-radius: 0.6rem;
		padding: ${({ theme }) => theme.metric(1)};
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.16);
		background-color: #fff;
		display: block;
		width: ${({ theme }) => theme.metric(33)};
		margin-right: ${({ theme }) => theme.metric(3)};
		margin-top: 0;
	}
`;
