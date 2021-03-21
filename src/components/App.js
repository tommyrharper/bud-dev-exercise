import React from "react";
import {
  AppContainer,
  Heading,
  Loader,
  Error,
} from "./StyledComponents/StyledComponents";
import ExpenseTable from "./ExpenseTable";
import useFetch from "../hooks/useFetch";

const App = () => {
  const [response, loading, hasError] = useFetch(
    "http://www.mocky.io/v2/5c62e7c33000004a00019b05",
  );

  let smallestExpenses;
  if (!loading && response) {
    const { transactions } = response;
    smallestExpenses = transactions
      .filter((tx) => tx.amount.value < 0)
      .sort((txa, txb) => txb.amount.value - txa.amount.value)
      .slice(0, 10);
  }

  const displayTransactions = !hasError && !loading && response;

  return (
    <AppContainer>
      <Heading>Bud - 10 Smallest Expenses</Heading>
      {hasError && <Error>Oops, there was a problem!</Error>}
      {loading && <Loader />}
      {displayTransactions && <ExpenseTable expenses={smallestExpenses} />}
    </AppContainer>
  );
};

export default App;
