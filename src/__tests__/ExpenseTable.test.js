import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import ExpenseTable from "../components/ExpenseTable";
import Expense from "../components/Expense";

const expenses = [
  {
    amount: {
      value: 100,
    },
  },
];

for (let i = 0; i < 99; i++) {
  const num = parseFloat((Math.random() * -20000).toFixed(2));
  expenses.push({
    amount: {
      value: num,
      currency_iso: "GBP",
    },
    category_title: "Shopping",
    description: "Harrods",
    date: "1/5/2021",
    id: `${Math.abs(num)}`,
  });
}

it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ExpenseTable expenses={expenses} />, div);
  shallow(<ExpenseTable expenses={expenses} />);
});

it("Renders all the correct headers", () => {
  const wrapper = shallow(<ExpenseTable expenses={expenses} />);
  expect(wrapper.text().includes("Date")).toBe(true);
  expect(wrapper.text().includes("Cost")).toBe(true);
  expect(wrapper.text().includes("Description")).toBe(true);
  expect(wrapper.text().includes("Title")).toBe(true);
});

it("Should render 100 expense items", () => {
  const wrapper = shallow(<ExpenseTable expenses={expenses} />);
  const expenseItems = wrapper.find(Expense);
  expect(wrapper.find(Expense).length).toEqual(100);
});
