import React, { useEffect } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { useUsers } from '~/hooks/users';

import api from '~/services/api';

import Nav from '~/components/Nav';
import Posts from '~/components/Posts';
import Photos from '~/components/Photos';
import UserInfo from '~/components/UserInfo';

import { StyledContent } from './styles';

const Content = () => {
	const userId = Number(window.location.pathname.split('/')[1]) || 1;
	const [state, dispatch] = useUsers();
	const selectedUser = state.users[userId - 1];

	useEffect(() => {
		async function fetchData() {
			if (!selectedUser.posts.length) {
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

			<UserInfo user={selectedUser} />

			<Switch>
				<Route path="/:userId/photos">
					{selectedUser.photos.length && (
						<Photos photos={selectedUser.photos} />
					)}
				</Route>
				<Route path="/:userId/posts">
					{selectedUser.posts.length && <Posts posts={selectedUser.posts} />}
				</Route>
				<Route path="/">
					<Redirect to="/1/photos" />
				</Route>
			</Switch>
		</StyledContent>
	);
};

export default Content;
