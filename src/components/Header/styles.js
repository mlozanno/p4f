import styled from 'styled-components';

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	background-color: #fff;
	padding: ${({ theme }) => theme.metric(1, 2)};
	box-shadow: 1px 0 10px 0px rgba(0, 0, 0, 0.16);

	svg {
		font-size: ${({ theme }) => theme.metric(4)};
		color: ${({ theme }) => theme.colors.blue};
		margin-right: ${({ theme }) => theme.metric(1)};
	}

	@media (min-width: 768px) {
		height: ${({ theme }) => theme.metric(25)};
		justify-content: center;
		font-size: ${({ theme }) => theme.metric(5)};
		margin-bottom: ${({ theme }) => theme.metric(5)};

		svg {
			font-size: ${({ theme }) => theme.metric(8)};
		}
	}
`;
