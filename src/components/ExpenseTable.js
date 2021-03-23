import React from 'react';
import PropTypes from 'prop-types';
import Expense from './Expense';
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

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.shape({
        value: PropTypes.number,
        currency_iso: PropTypes.string,
      }),
      category_title: PropTypes.string,
      description: PropTypes.string,
      date: PropTypes.string,
    }),
  ).isRequired,
};

export default ExpenseTable;
