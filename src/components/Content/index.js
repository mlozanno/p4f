import React, { useEffect } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { useUsers } from '../../hooks/users';

import api from '../../services/api';

import Nav from '../Nav';
import Posts from '../Posts';
import Photos from '../Photos';
import UserInfo from '../UserInfo';

import { StyledContent } from './styles';

const Content = () => {
  const userId = Number(window.location.pathname.split('/')[1]);
  const [state, dispatch] = useUsers();
  const user = state.users[userId - 1];

  useEffect(() => {
    async function fetchData() {
      if (!user.posts.length) {
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
    <StyledContent>
      <Nav />

      <UserInfo user={user} />

      <Switch>
        <Route path="/:userId/photos">
          {user.photos.length && <Photos photos={user.photos} />}
        </Route>
        <Route path="/:userId/posts">
          {user.posts.length && <Posts posts={user.posts} />}
        </Route>
        <Route path="/">
          <Redirect to="/1/photos" />
        </Route>
      </Switch>
    </StyledContent>
  );
};

export default Content;
