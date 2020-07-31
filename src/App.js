import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import { Header } from './components';

function App() {
  return (
    <Router>
      <Header routes={routes} />
      <Switch>
        <Suspense fallback={<h1>Loading...</h1>}>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
