import React from 'react';
import PropTypes from 'prop-types';

import { StyledPostCard } from './styles';

const PostCard = ({ title, body }) => (
	<StyledPostCard data-testid="post-card">
		<header data-testid="post-card-header">
			<h1 data-testid="post-card-title">{title}</h1>
		</header>
		<p data-testid="post-card-body">{body}</p>
	</StyledPostCard>
);

PostCard.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
};

PostCard.defaultProps = {
	title: 'Post sem título',
	body: 'Post sem descrição',
};

export default PostCard;
