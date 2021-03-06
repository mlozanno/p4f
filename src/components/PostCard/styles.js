import styled from 'styled-components';
import theme from '~/styles/theme';

export const StyledPostCard = styled.article`
	border-radius: 0.6rem;
	padding: ${theme.metric(2)};
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.16);
	background-color: #fff;
	margin-bottom: ${theme.metric(2)};

	h1 {
		color: ${theme.colors.blue};

		&::first-letter {
			text-transform: uppercase;
		}
	}

	p {
		&::first-letter {
			text-transform: uppercase;
		}
	}
`;
