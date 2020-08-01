import React, { useState, useEffect } from 'react';

export const useFetch = (url, opts) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url, opts)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setResponse(data);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [url]);

  return [response, loading, error];
};
