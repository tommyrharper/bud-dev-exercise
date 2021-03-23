import React from "react";
import PropTypes from "prop-types";
import { Row, Cell } from "./StyledComponents/StyledComponents";

const Expense = ({ expense }) => {
  const {
    amount, category_title, description, date
  } = expense;
  const { value, currency_iso } = amount;
  const currencyObj = {
    GBP: "£",
    USD: "$",
    EUR: "€",
  };

  return (
    <Row>
      <Cell>{date}</Cell>
      <Cell>{`${currencyObj[currency_iso]} ${Math.abs(value)}`}</Cell>
      <Cell>{description}</Cell>
      <Cell>{category_title}</Cell>
    </Row>
  );
};

Expense.propTypes = {
  expense: PropTypes.shape({
    amount: PropTypes.shape({
      value: PropTypes.number,
      currency_iso: PropTypes.string,
    }),
    category_title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

export default Expense;
