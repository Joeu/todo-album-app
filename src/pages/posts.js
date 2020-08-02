import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import Paginator from 'react-hooks-paginator';
import { useFetch } from '../hooks/useFetch';
import { Loading, Error } from '../components';

const StyledSection = styled.section``;

const PostItem = styled.div`
  border: 0.1rem solid black;
  border-radius: 0.5rem;
  margin-bottom: 0.2rem;
  padding: 1rem;
`;

const Posts = () => {
  const pageLimit = 10;
  const [currentPosts, setCurrentPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const params = useParams();
  let history = useHistory();

  const [response, loading, error] = useFetch(
    'https://jsonplaceholder.typicode.com/posts/'
  );

  useEffect(() => {
    console.log(params);
    history.push(currentPage);
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
          {currentPosts?.map((post) => renderPost(post))}
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

const renderPost = (post) => (
  <PostItem key={post.id}>
    <h3>{post.title}</h3>
    <h5>{post.userId}</h5>
    <p>{post.body}</p>
  </PostItem>
);

export default Posts;
