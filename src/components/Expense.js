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

  return (
    <tr>
      <td>{date}</td>
      <td>{value}</td>
      <td>{currency_iso}</td>
      <td>{category_title}</td>
      <td>{description}</td>
    </tr>
  );
};

export default Expense;
