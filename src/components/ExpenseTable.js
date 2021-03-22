import React from "react";
import Expense from "./Expense";
import { Table, TopRow, ColHeader } from './StyledComponents/StyledComponents';

const ExpenseTable = ({ expenses }) => (
  <Table>
    <thead>
      <TopRow>
        <ColHeader>Date</ColHeader>
        <ColHeader>Cost</ColHeader>
        <ColHeader>Description</ColHeader>
        <ColHeader>Title</ColHeader>
      </TopRow>
    </thead>
    <tbody>
      {expenses.map((expense) => (
        <Expense key={`${expense.id}`} expense={expense} />
      ))}
    </tbody>
  </Table>
);

export default ExpenseTable;
