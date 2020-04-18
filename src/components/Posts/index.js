import React, { useEffect } from 'react';

// import { Container } from './styles';

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
