import React from 'react';
import { useFetch } from '../customHooks/useFetch';

const Posts = () => {
  const [response, loading, hasError] = useFetch(
    'https://jsonplaceholder.typicode.com/posts/'
  );

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : hasError ? (
        <div>Error occured.</div>
      ) : (
        response?.map((post) => <div>{post.title}</div>)
      )}
    </>
  );
};

export default Posts;
