import styled from 'styled-components';
import theme from '../../styles/theme';

export const StyledUserCard = styled.li`
	display: flex;
	user-select: none;
	flex-direction: column;
	cursor: pointer;
	background: linear-gradient(
		135deg,
		${theme.colors.blue},
		${theme.colors.green}
	);
	color: #333;
	font-weight: bold;
	font-size: 14px;
	border-radius: 0.6rem;
	padding: ${theme.metric(2)};
	width: 100%;
	max-width: ${theme.metric(30)};
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.16);
	margin-right: ${theme.metric(2)};
	flex-shrink: 0;
	transition: all 0.15s ease-out;
	position: relative;

	&:hover {
		transform: scale(1.03);
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.16);
	}

	&:active {
		box-shadow: 1px 1px 10px inset rgba(0, 0, 0, 0.16);
	}

	> * {
		display: flex;
		align-items: center;

		svg {
			font-size: ${theme.metric(2)};
			margin-right: ${theme.metric(1)};
			color: #fff;
			font-weight: normal;
		}
	}

	@media (max-width: 767px) {
		&:first-child {
			margin-left: ${theme.metric(2)};
		}
	}

	@media (min-width: 768px) {
		margin-right: 0;
		margin-bottom: ${theme.metric(2)};
	}
`;
