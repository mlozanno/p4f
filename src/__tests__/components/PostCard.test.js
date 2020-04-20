import React from 'react';
import { render } from '@testing-library/react';
import PostCard from '~/components/PostCard';

describe('<PosCard />', () => {
	const title = 'Lorem ipsum dolor sit amet.';
	const body = 'Lorem ipsum dolor sit amet.';

	it('should be render component', () => {
		const { getByTestId } = render(<PostCard title={title} body={body} />);

		expect(getByTestId('post-card')).toBeInTheDocument();
	});

	it('should be have a header tag', () => {
		const { getByTestId } = render(<PostCard title={title} body={body} />);

		const postCard = getByTestId('post-card');
		const postHeader = getByTestId('post-card-header');

		expect(postCard).toContainElement(postHeader);
	});

	it('should be have a title', () => {
		const { getByTestId } = render(<PostCard title={title} body={body} />);

		const postCard = getByTestId('post-card');
		const postTitle = getByTestId('post-card-title');

		expect(postCard).toContainElement(postTitle);
	});

	it('should be have a body', () => {
		const { getByTestId } = render(<PostCard title={title} body={body} />);

		const postCard = getByTestId('post-card');
		const postBody = getByTestId('post-card-body');

		expect(postCard).toContainElement(postBody);
	});

	it('should be have a blog parameter title', () => {
		const { getByTestId } = render(<PostCard title={title} body={body} />);

		const postTitle = getByTestId('post-card-title');

		expect(postTitle).toHaveTextContent(title);
	});

	it('should be have a blog parameter body', () => {
		const { getByTestId } = render(<PostCard title={title} body={body} />);

		const postBody = getByTestId('post-card-body');

		expect(postBody).toHaveTextContent(body);
	});

	it('should be have a placeholder title when empty parameter', () => {
		const { getByTestId } = render(<PostCard body={body} />);

		const postTitle = getByTestId('post-card-title');

		expect(postTitle).toHaveTextContent('Post sem título');
	});

	it('should be have a placeholder body when empty parameter', () => {
		const { getByTestId } = render(<PostCard title={title} />);

		const postBody = getByTestId('post-card-body');

		expect(postBody).toHaveTextContent('Post sem descrição');
	});
});
