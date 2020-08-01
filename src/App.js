import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import { Header, Main, Footer } from './components';

function App() {
  return (
    <Router>
      <Header routes={routes} />
      <Main routes={routes} />
      <Footer />
    </Router>
  );
}

export default App;
