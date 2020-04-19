import React from 'react';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import { StyledUserList } from './styles';

import UserCard from '../UserCard';

const UserList = ({ users, pathName }) => {
	const history = useHistory();

	const handleClick = (id) => {
		history.push(`/${id}/${pathName}`);
	};
	return (
		<StyledUserList>
			{users.map((user) => (
				<UserCard
					key={user.id}
					data-user-id={user.id}
					name={user.name}
					posts={user.posts}
					email={user.email}
					company={user.company.name}
					handleClick={() => handleClick(user.id)}
				/>
			))}
		</StyledUserList>
	);
};

UserList.propTypes = {
	users: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			url: PropTypes.string,
			title: PropTypes.string,
		})
	),
	pathName: PropTypes.string,
};

UserList.defaultProps = {
	users: [],
	pathName: 'photos',
};

export default UserList;
