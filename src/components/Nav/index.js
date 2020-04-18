import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosAlbums, IoIosBook } from 'react-icons/io';

import { StyledNav } from './styles';

const Nav = () => (
  <StyledNav>
    <ul>
      <li>
        <Link to={`photos`}>
          <IoIosAlbums />
          Fotos
        </Link>
      </li>
      <li>
        <Link to={`posts`}>
          <IoIosBook />
          Posts
        </Link>
      </li>
    </ul>
  </StyledNav>
);

export default Nav;
