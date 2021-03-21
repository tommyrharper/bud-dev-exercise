import React from "react";
import ExpenseTable from "./ExpenseTable";
import useFetch from "../hooks/useFetch";
import { Heading } from './StyledComponents/StyledComponents';

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
  console.log(`smallestExpenses`, smallestExpenses);
  const displayTransactions = !hasError && !loading && response;

  return (
    <div>
      <Heading>Bud - 10 Smallest Expenses</Heading>
      {hasError && <p>An error occurred</p>}
      {loading && <div>Loading...</div>}
      {displayTransactions && <ExpenseTable expenses={smallestExpenses} />}
    </div>
  );
};

export default App;
