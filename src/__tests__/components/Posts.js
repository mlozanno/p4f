import React from 'react';
import { render } from '@testing-library/react';

import Posts from '~/components/Posts';

const postsData = [
	{
		id: 1,
		title: 'Post título 1',
		body: 'Body 1',
	},
	{
		id: 2,
		title: 'Post título 2',
		body: 'Body 2',
	},
];

describe('<Posts />', () => {
	it('should be render component', () => {
		const { getByTestId } = render(<Posts posts={postsData} />);

		const posts = getByTestId('posts');

		expect(posts).toHaveTextContent(
			/^(Post título|Body 1|Post título 2|Body 2)/
		);
	});
});
