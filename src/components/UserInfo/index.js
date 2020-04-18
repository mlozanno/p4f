import React from 'react';
import PropTypes from 'prop-types';

import { StyledUserInfo } from './styles';
import { MdPerson, MdLocationCity } from 'react-icons/md';

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
  user: PropTypes.object.isRequired,
};

export default UserInfo;
