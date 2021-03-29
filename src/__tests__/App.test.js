import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import ExpenseTable from "../components/ExpenseTable";
import "whatwg-fetch";
import useFetch from "../Hooks/useFetch";
import App from "../components/App";
import {
  Heading,
  Loader,
  Error,
} from "../components/StyledComponents/StyledComponents";

jest.mock("../Hooks/useFetch");

describe("Basic App functionality", () => {
  it("Renders without crashing", () => {
    useFetch.mockReturnValue([[], false, false]);
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    shallow(<App />);
  });

  it("Renders the heading", () => {
    useFetch.mockReturnValue([[], false, false]);
    const wrapper = shallow(<App />);
    expect(
      wrapper.containsMatchingElement(
        <Heading>Bud - 10 Smallest Expenses</Heading>,
      ),
    ).toEqual(true);
  });
});

describe("Async app functionality", () => {
  it("It renders the expense table when the fetch request is successful", () => {
    useFetch.mockReturnValue([[], false, false]);
    const wrapper = shallow(<App />);
    expect(
      wrapper.containsMatchingElement(<ExpenseTable expenses={[]} />),
    ).toEqual(true);
  });

  it("It displays a loader when the fetch request is loading", () => {
    useFetch.mockReturnValue([null, true, false]);
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Loader />)).toEqual(true);
  });

  it("It warns the user when fetch fails", () => {
    useFetch.mockReturnValue([null, false, true]);
    const wrapper = shallow(<App />);
    expect(
      wrapper.containsMatchingElement(<Error>Oops, there was a problem!</Error>),
    ).toEqual(true);
  });
});
