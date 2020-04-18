import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useUsers } from '../../hooks/users';

import api from '../../services/api';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Content from '../../components/Content';
import UserList from '../../components/UserList';
import UserCard from '../../components/UserCard';

const Home = () => {
  let userId = Number(window.location.pathname.split('/')[1]);
  const [state, dispatch] = useUsers();
  const history = useHistory();

  useEffect(() => {
    async function fetchUsers() {
      const { data: users } = await api.get('users');

      const payload = users.map((user) => {
        return Object.assign(user, { photos: [], posts: [] });
      });

      dispatch({ type: 'FETCH_USERS_SUCCESS', payload, userId });
    }

    fetchUsers();
  }, []); //eslint-disable-line

  const handleClick = (id) => {
    history.push(`/${id}/photos`);
  };

  return (
    <>
      <Header />
      <Layout>
        {!state.loading && (
          <UserList>
            {state.users.map((user) => (
              <UserCard
                key={user.id}
                data-user-id={user.id}
                name={user.name}
                posts={user.posts}
                email={user.email}
                company={user.company.name}
                handleClick={(id) => handleClick(user.id)}
              />
              // <li key={user.id} onClick={() => handleClick(user.id)}>
              //   {user.name} -> Posts: {user.posts.length} -> Photos:{' '}
              //   {user.photos.length}
              // </li>
            ))}
          </UserList>
        )}

        {!state.loading && <Content />}
      </Layout>
    </>
  );
};

export default Home;
