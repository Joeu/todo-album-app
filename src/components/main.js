import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from './loading';
import styled from 'styled-components';

const StyledMain = styled.main`
  margin-top: 8rem;
`;

function Main({ routes }) {
  return (
    <StyledMain>
      <Switch>
        <Suspense fallback={<Loading />}>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Suspense>
      </Switch>
    </StyledMain>
  );
}

export default Main;
