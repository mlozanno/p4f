import styled from 'styled-components';

export const StyledLayout = styled.main`
	width: 100%;
	max-width: ${({ theme }) => theme.metric(140)};
	margin: 0 auto;

	@media (min-width: 768px) {
		display: flex;
		padding: ${({ theme }) => theme.metric(0, 2)};
	}
`;
