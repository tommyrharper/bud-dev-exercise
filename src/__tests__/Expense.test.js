import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Expense from "../components/Expense";

const mockExpense = {
  amount: {
    value: -100.53,
    currency_iso: "GBP",
  },
  category_title: "Shopping",
  description: "Harrods",
  date: "1/5/2021",
};

it("Renders without crashing", () => {
  const tbody = document.createElement("tbody");
  ReactDOM.render(<Expense expense={mockExpense} />, tbody);
  shallow(<Expense expense={mockExpense} />);
});

it("Renders a description", () => {
  const wrapper = shallow(<Expense expense={mockExpense} />);
  expect(wrapper.text().includes("Harrods")).toBe(true);
});

it("Renders a title", () => {
  const wrapper = shallow(<Expense expense={mockExpense} />);
  expect(wrapper.text().includes("Shopping")).toBe(true);
});

it("Renders a date", () => {
  const wrapper = shallow(<Expense expense={mockExpense} />);
  expect(wrapper.text().includes("1/5/2021")).toBe(true);
});

it("Renders the amount", () => {
  const wrapper = shallow(<Expense expense={mockExpense} />);
  expect(wrapper.text().includes("£ 100.53")).toBe(true);
});
