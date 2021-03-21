import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const App = () => {
  const [response, loading, hasError] = useFetch(
    "http://www.mocky.io/v2/5c62e7c33000004a00019b05",
  );
  console.log(`response`, response);

  return (
    <div>
      Hello World
      {hasError && <p>An error occurred</p>}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default App;
