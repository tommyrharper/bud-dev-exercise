import React from "react";
import Expense from "./Expense";

const ExpenseTable = ({ expenses }) => (
  <table style={{ width: "100%" }}>
    <tr>
      <th>Date</th>
      <th>Cost</th>
      <th>Title</th>
      <th>Description</th>
    </tr>
    {expenses.map((expense) => (
      <Expense key={expense.id} expense={expense} />
    ))}
  </table>
);

export default ExpenseTable;
