import React from 'react';
import PropTypes from 'prop-types';

import { MdPerson, MdLocationCity } from 'react-icons/md';
import { StyledUserInfo } from './styles';

const UserInfo = ({ user }) => (
	<StyledUserInfo>
		<p>
			<MdPerson />
			{user.name}
		</p>
		<p>
			<MdLocationCity />
			{user.address.street} - {user.address.suite}
			<br />
			{user.address.city} - {user.address.zipcode}
		</p>
	</StyledUserInfo>
);

UserInfo.propTypes = {
	user: PropTypes.shape({
		name: PropTypes.string,
		address: PropTypes.shape({
			city: PropTypes.string,
			street: PropTypes.string,
			suite: PropTypes.string,
			zipcode: PropTypes.string,
		}),
	}),
};

UserInfo.defaultProps = {
	user: {},
};

export default UserInfo;
