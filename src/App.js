import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import UsercContext from './context/usersContext';
import { useFetch } from './hooks/useFetch';
import { Header, Main, Footer } from './components';

function App() {
  const [response, loading, error] = useFetch(
    'https://jsonplaceholder.typicode.com/users/'
  );

  return (
    <UsercContext.Provider value={{ response, loading, error }}>
      <Router>
        <Header routes={routes} />
        <Main routes={routes} />
        <Footer />
      </Router>
    </UsercContext.Provider>
  );
}

export default App;
