import React from 'react';

import PostItem from '../PostItem';

const Posts = ({ posts }) => {
	return (
		<>
			{posts.map((post) => (
				<PostItem title={post.title} body={post.body} key={post.id} />
			))}
		</>
	);
};

export default Posts;
