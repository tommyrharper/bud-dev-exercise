import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  shallow(<App />);
});
