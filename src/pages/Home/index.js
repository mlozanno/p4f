import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useUsers } from '~/hooks/users';

import api from '~/services/api';

import Layout from '~/components/Layout';
import Header from '~/components/Header';
import Content from '~/components/Content';
import UserList from '~/components/UserList';
import UserCard from '~/components/UserCard';

const Home = () => {
	const url = window.location.pathname.split('/');
	const userId = Number(url[1]);
	const pathName = url[2];

	const [state, dispatch] = useUsers();
	const history = useHistory();

	useEffect(() => {
		async function fetchUsers() {
			try {
				const { data: users } = await api.get('users');

				const payload = users.map((user) => {
					return Object.assign(user, { photos: [], posts: [] });
				});

				dispatch({ type: 'FETCH_USERS_SUCCESS', payload, userId });
			} catch (error) {
				console.log(`Error: ${error}`);
			}
		}

		fetchUsers();
	}, []); // eslint-disable-line

	const handleClick = (id) => {
		history.push(`/${id}/${pathName}`);
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
								handleClick={() => handleClick(user.id)}
							/>
						))}
					</UserList>
				)}

				{!state.loading && <Content />}
			</Layout>
		</>
	);
};

export default Home;
