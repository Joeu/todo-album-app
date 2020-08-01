import React from 'react';
import styled from 'styled-components';
import { useFetch } from '../hooks/useFetch';
import { Loading, Error } from '../components';

const StyledSection = styled.section``;
const TodoItem = styled.div`
  margin-bottom: 0.2rem;

  ${({ completed }) =>
    completed &&
    `
      background: lightgray;
      color: gray;
    `}
`;

const Todos = () => {
  const [response, loading, hasError] = useFetch(
    'https://jsonplaceholder.typicode.com/todos/'
  );

  return (
    <StyledSection>
      {loading ? (
        <Loading />
      ) : hasError ? (
        <Error />
      ) : (
        response?.map((todo) => renderTodo(todo))
      )}
    </StyledSection>
  );
};

const renderTodo = (todo) => (
  <TodoItem completed={todo.completed}>
    <h3>{todo.title}</h3>
  </TodoItem>
);

export default Todos;
