import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../components/App';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  shallow(<App />);
});

it('Renders a title', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.text().includes('Bud - 10 Smallest Expenses')).toBe(true);
});
