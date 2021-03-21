import { useState, useEffect } from "react";

const useFetch = (url, opts) => {
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
        setFetchData({ ...fetchData, loading: false, response: res });
      })
      .catch(() => {
        setFetchData({ ...fetchData, loading: false, hasError: true });
      });
  }, [url]);

  return [response, loading, hasError];
};

export default useFetch;
