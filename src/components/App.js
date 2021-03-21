import React from "react";
import {
  AppContainer,
  Heading,
  Loader,
  Error,
} from "./StyledComponents/StyledComponents";
import ExpenseTable from "./ExpenseTable";
import useFetch from "../Hooks/useFetch";
import get10SmallestTransactions from "./Helpers/Helpers";

const API_ENDPOINT = "http://www.mocky.io/v2/5c62e7c33000004a00019b05";

const App = () => {
  const [response, loading, hasError] = useFetch(API_ENDPOINT, get10SmallestTransactions);
  const displayTransactions = !hasError && !loading && response;

  return (
    <AppContainer>
      <Heading>Bud - 10 Smallest Expenses</Heading>
      {hasError && <Error>Oops, there was a problem!</Error>}
      {loading && <Loader />}
      {displayTransactions && <ExpenseTable expenses={response} />}
    </AppContainer>
  );
};

export default App;
