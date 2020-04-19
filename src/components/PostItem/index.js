import React from 'react';
import PropTypes from 'prop-types';

import { StyledPostItem } from './styles';

const PostItem = ({
	title = 'Post sem título',
	body = 'Post sem descrição',
}) => (
	<StyledPostItem>
		<header>
			<h1>{title}</h1>
		</header>
		<p>{body}</p>
	</StyledPostItem>
);

PostItem.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
};

export default PostItem;
