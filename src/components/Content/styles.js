import styled from 'styled-components';
import theme from '~/styles/theme';

export const StyledContent = styled.section`
	margin: ${theme.metric(2, 'auto', 2)};
	color: #333;
	width: calc(100% - ${theme.metric(4)});
`;
