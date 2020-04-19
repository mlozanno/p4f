import React, { useEffect } from 'react';

import { useUsers } from '~/hooks/users';

import api from '~/services/api';

import Layout from '~/components/Layout';
import Header from '~/components/Header';
import Content from '~/components/Content';
import UserList from '~/components/UserList';

const Home = () => {
	const url = window.location.pathname.split('/');
	const userId = Number(url[1]);
	const pathName = Number(url[2]);

	const [state, dispatch] = useUsers();

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



	return (
		<>
			<Header />
			<Layout>
				{!state.loading && <UserList users={state.users} pathName={pathName} />}

				{!state.loading && <Content />}
			</Layout>
		</>
	);
};

export default Home;
