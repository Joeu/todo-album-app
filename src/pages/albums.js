import React from 'react';
import styled from 'styled-components';
import { useFetch } from '../customHooks/useFetch';
import { Loading, Error } from '../components';

const StyledSection = styled.section``;

const Albums = () => {
  const [response, loading, hasError] = useFetch(
    'https://jsonplaceholder.typicode.com/albums/'
  );

  return (
    <StyledSection>
      {loading ? (
        <Loading />
      ) : hasError ? (
        <Error />
      ) : (
        response?.map((album) => <div>{album.title}</div>)
      )}
    </StyledSection>
  );
};

export default Albums;
