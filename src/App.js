import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import { Header, Footer, Loading } from './components';
import styled from 'styled-components';

const Main = styled.main`
  margin-top: 7rem;
`;

function App() {
  return (
    <Router>
      <Header routes={routes} />
      <Main>
        <Switch>
          <Suspense fallback={<Loading />}>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Suspense>
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
