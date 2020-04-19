import styled from 'styled-components';
import theme from '~/styles/theme';

export const StyledLayout = styled.main`
	width: 100%;
	max-width: ${theme.metric(140)};
	margin: 0 auto;

	@media (min-width: 768px) {
		display: flex;
		padding: ${theme.metric(0, 2)};
	}
`;
