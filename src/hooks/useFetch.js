import { useState, useEffect } from 'react';

const useFetch = (url, callback, opts) => {
  const [fetchData, setFetchData] = useState({
    response: null,
    loading: false,
    hasError: false,
  });

  const { response, loading, hasError } = fetchData;

  useEffect(async () => {
    setFetchData({ ...fetchData, loading: true });
    try {
      const res = await fetch(url, opts).then((payload) => payload.json());
      const result = callback ? callback(res) : res;
      setFetchData({ ...fetchData, loading: false, response: result });
    } catch {
      setFetchData({ ...fetchData, loading: false, hasError: true });
    }
  }, [url]);

  return [response, loading, hasError];
};

export default useFetch;
