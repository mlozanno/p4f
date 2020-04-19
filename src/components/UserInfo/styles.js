import styled from 'styled-components';
import theme from '~/styles/theme';

export const StyledUserInfo = styled.div`
	margin: ${theme.metric(2, 0)};
	> p {
		display: flex;

		svg {
			margin-right: ${theme.metric(1)};
		}
	}
`;
