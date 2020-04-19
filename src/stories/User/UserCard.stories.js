import React from 'react';
import { action } from '@storybook/addon-actions';

import UserCard from '../../components/UserCard';

export default {
	component: UserCard,
	title: 'UserCard',
	decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
	excludeStories: /.*Data$/,
};

export const userCardData = {
	name: 'Marcus Lozano',
	email: 'contato@lozanno.com.br',
	company: 'Lozanno Inc.',
};

export const actionsData = {
	handleClick: action('handleClick'),
};

export const Default = () => (
	<UserCard {...Object.assign(userCardData, actionsData)} />
);
