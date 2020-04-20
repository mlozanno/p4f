import React from 'react';
import PropTypes from 'prop-types';

import { MdWork, MdMailOutline, MdPerson } from 'react-icons/md';

import { StyledUserCard } from './styles';

const UserCard = ({ name, email, company, handleClick }) => {
	return (
		<StyledUserCard onClick={handleClick} data-testid="user-card">
			<span>
				<MdPerson />
				{name}
			</span>
			<span>
				<MdMailOutline />
				{email}
			</span>
			<span>
				<MdWork />
				{company}
			</span>
		</StyledUserCard>
	);
};

UserCard.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	company: PropTypes.string.isRequired,
	handleClick: PropTypes.func,
};

UserCard.defaultProps = {
	handleClick: null,
};

export default UserCard;
