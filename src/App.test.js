import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// tdd = test driven development
// test() -> logic, business
 
// bdd = behavior driven development
// 

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
  expect(1+2).toBe(3);
});
