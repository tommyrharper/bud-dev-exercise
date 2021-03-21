import React from "react";
import Expense from "./Expense";
import { Table, TopRow, ColHeader } from './StyledComponents/StyledComponents';

const ExpenseTable = ({ expenses }) => (
  <Table>
    <TopRow>
      <ColHeader>Date</ColHeader>
      <ColHeader>Cost</ColHeader>
      <ColHeader>Title</ColHeader>
      <ColHeader>Description</ColHeader>
    </TopRow>
    {expenses.map((expense) => (
      <Expense key={expense.id} expense={expense} />
    ))}
  </Table>
);

export default ExpenseTable;
