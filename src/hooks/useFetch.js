import { useState, useEffect } from 'react';

export const useFetch = (url, opts) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url, opts)
      .then(checkError)
      .then((data) => {
        setLoading(false);
        setResponse(data);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, [url, opts]);

  const checkError = (response) => {
    if (response.status >= 200 && response.status <= 299)
      return response.json();
    else throw Error(response.statsText);
  };

  return [response, loading, error];
};
