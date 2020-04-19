import React from 'react';
import { userCardData, actionsData } from './UserCard.stories';
import UserList from '../../components/UserList';

export default {
	component: UserList,
	title: 'UserList',
	decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
	excludeStories: /.*Data$/,
};

export const defaultUserListData = [
	{ ...userCardData, id: 1 },
	{ ...userCardData, id: 2 },
	{ ...userCardData, id: 3 },
	{ ...userCardData, id: 4 },
	{ ...userCardData, id: 5 },
];

export const Default = () => (
	<UserList users={defaultUserListData} {...actionsData} />
);
