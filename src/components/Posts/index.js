import React from 'react';
import PropTypes from 'prop-types';

import PostItem from '~/components/PostItem';

const Posts = ({ posts }) => {
	return (
		<>
			{posts.map((post) => (
				<PostItem title={post.title} body={post.body} key={post.id} />
			))}
		</>
	);
};

Posts.propTypes = {
	posts: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			body: PropTypes.string,
			id: PropTypes.number,
		})
	),
};

Posts.defaultProps = {
	posts: [],
};

export default Posts;
