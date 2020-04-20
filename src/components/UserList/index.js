import React from 'react';
import PropTypes from 'prop-types';

import { StyledUserList } from './styles';

const UserList = ({ children }) => <StyledUserList>{children}</StyledUserList>;

UserList.propTypes = {
	children: PropTypes.node.isRequired,
};

export default UserList;
