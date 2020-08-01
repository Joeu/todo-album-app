import React from 'react';
import styled from 'styled-components';
import { useFetch } from '../customHooks/useFetch';
import { Loading, Error } from '../components';

const StyledSection = styled.section``;

const PostItem = styled.div`
  border: 0.1rem solid black;
  border-radius: 0.5rem;
  margin-bottom: 0.2rem;
  padding: 1rem;
`;

const Posts = () => {
  const [response, loading, hasError] = useFetch(
    'https://jsonplaceholder.typicode.com/posts/'
  );

  return (
    <StyledSection>
      {loading ? (
        <Loading />
      ) : hasError ? (
        <Error />
      ) : (
        response?.map((post) => renderPost(post))
      )}
    </StyledSection>
  );
};

const renderPost = (post) => (
  <PostItem>
    <h3>{post.title}</h3>
    <h5>{post.userId}</h5>
    <p>{post.body}</p>
  </PostItem>
);

export default Posts;
