import React, { useEffect } from 'react';

import { Link, Switch, Route, Redirect, useParams } from 'react-router-dom';

import { useUsers } from '../../hooks/users';

import api from '../../services/api';

import Posts from '../Posts';
import Photos from '../Photos';

// import { Container } from './styles';

const Content = () => {
  const userId = Number(window.location.pathname.split('/')[1]);
  const [state, dispatch] = useUsers();

  useEffect(() => {
    async function fetchData() {
      if (!state.users[userId - 1].posts.length) {
        const { data: posts } = await api.get('posts', { params: { userId } });
        const { data: photos } = await api.get('photos', {
          params: { albumId: userId },
        });

        const payload = state.users.map((user) => {
          if (user.id === userId) {
            return Object.assign(user, { posts, photos });
          }

          return user;
        });

        dispatch({ type: 'FETCH_USER_DATA', payload });
      }
    }

    fetchData();
  }, [userId]); //eslint-disable-line

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`photos`}>Fotos</Link>
          </li>
          <li>
            <Link to={`posts`}>Posts</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/:userId/photos">
          <Photos />
        </Route>
        <Route path="/:userId/posts">
          <Posts />
        </Route>
        <Route path="/">
          <Redirect to="/1/photos" />
        </Route>
      </Switch>
    </>
  );
};

export default Content;
