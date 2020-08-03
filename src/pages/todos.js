import React, { useState } from 'react';
import styled from 'styled-components';
import { useFetch } from '../hooks/useFetch';
import { Card, Loading, Error } from '../components';
import { colors } from '../styles';

const StyledSection = styled.section`
  display: grid;
`;

const TodoItem = styled.div`
  margin-bottom: 0.2rem;

  ${({ completed }) =>
    completed &&
    `
      text-decoration: line-through;
      color: ${colors.gray};
    `}

  &:hover {
    cursor: pointer;
  }
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
        response?.map((todo) => <Todo key={todo.id} todo={todo} />)
      )}
    </StyledSection>
  );
};

const Todo = ({ todo }) => {
  const [completed, setCompleted] = useState(todo.completed);

  const toggleTodo = () => setCompleted(!completed);

  return (
    <TodoItem key={todo.id} completed={completed} onClick={toggleTodo}>
      <Card>{todo.title}</Card>
    </TodoItem>
  );
};

export default Todos;
