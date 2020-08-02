import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Paginator from 'react-hooks-paginator';
import { useFetch } from '../hooks/useFetch';
import { Card, Loading, Error } from '../components';
import { lightBlack } from '../styles/colors';

const StyledSection = styled.section`
  display: grid;
`;

const Title = styled.h3`
  margin: 0 auto;
`;

const Author = styled.span`
  color: ${lightBlack};
`;

const Quote = styled.p`
  font-style: italic;
`;

const Posts = () => {
  const pageLimit = 10;
  const [currentPosts, setCurrentPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [response, loading, error] = useFetch(
    'https://jsonplaceholder.typicode.com/posts/'
  );

  useEffect(() => {
    setCurrentPosts(response?.slice(offset, offset + pageLimit));
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, [offset, response]);

  return (
    <StyledSection>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>
          {currentPosts?.map((post) => renderPostCard(post))}
          {response && (
            <Paginator
              totalRecords={response.length}
              pageLimit={pageLimit}
              pageNeighbours={1}
              setOffset={setOffset}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </>
      )}
    </StyledSection>
  );
};

const renderPostCard = (post) => {
  return (
    <Card key={post.id}>
      <Title>{post.title}</Title>
      <Author style={{ color: lightBlack }}>author: {post.userId}</Author>
      <Quote>{post.body}</Quote>
    </Card>
  );
};

export default Posts;
