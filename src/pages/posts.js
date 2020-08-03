import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Paginator from 'react-hooks-paginator';
import { useFetch } from '../hooks/useFetch';
import UsercContext from '../context/usersContext';
import { Card, Loading, Error } from '../components';
import { colors } from '../styles';

const StyledSection = styled.section`
  display: grid;
`;

const Title = styled.h3`
  margin: 0 auto;
`;

const Author = styled.span`
  color: ${colors.lightBlack};
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

  const users = useContext(UsercContext).response;

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
          {currentPosts?.map((post) => renderPostCard(post, users))}
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

const renderPostCard = (post, users) => {
  const author = users?.filter((user) => user.id === post.userId)[0];
  return (
    <Card key={post.id}>
      <Title>{post.title}</Title>
      <Author style={{ color: colors.lightBlack }}>
        author: {author?.name}
      </Author>
      <Quote>{post.body}</Quote>
    </Card>
  );
};

export default Posts;
