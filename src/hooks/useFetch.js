import { useState, useEffect } from "react";

const useFetch = (url, callback, opts) => {
  const [fetchData, setFetchData] = useState({
    response: null,
    loading: false,
    hasError: false,
  });

  const { response, loading, hasError } = fetchData;

  useEffect(() => {
    setFetchData({ ...fetchData, loading: true });
    fetch(url, opts)
      .then((res) => res.json())
      .then((res) => {
        const result = callback ? callback(res) : res;
        setFetchData({ ...fetchData, loading: false, response: result });
      })
      .catch(() => {
        setFetchData({ ...fetchData, loading: false, hasError: true });
      });
  }, [url]);

  return [response, loading, hasError];
};

export default useFetch;
