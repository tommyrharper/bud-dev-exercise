import React from "react";

const Expense = ({ expense }) => {
  console.log(`expense`, expense);
  const {
    amount,
    category_title,
    description,
    date,
  } = expense;
  const { value, currency_iso } = amount;
  const currencyObj = {
    GBP: '£',
    USD: '$',
    EUR: '€',
  };

  return (
    <tr>
      <td>{date}</td>
      <td>{`${currencyObj[currency_iso]} ${Math.abs(value)}`}</td>
      <td>{category_title}</td>
      <td>{description}</td>
    </tr>
  );
};

export default Expense;
