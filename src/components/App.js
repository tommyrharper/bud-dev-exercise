import React, { useState, useEffect } from "react";

const App = () => {
  const [response, setResponse] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://www.mocky.io/v2/5c62e7c33000004a00019b05")
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        setResponse(res);
        setLoading(false);
      })
      .catch(() => setHasError(true));
  }, []);
  return (
    <div>
      Hello World
      {hasError && <p>An error occurred</p>}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default App;
