import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import UserContext from './context/usersContext';
import { useFetch } from './hooks/useFetch';
import { Header, Main, Footer } from './components';

function App() {
  const [response, loading, error] = useFetch(
    'https://jsonplaceholder.typicode.com/users/'
  );

  return (
    <UserContext.Provider value={{ response, loading, error }}>
      <Router>
        <Header routes={routes} />
        <Main routes={routes} />
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
