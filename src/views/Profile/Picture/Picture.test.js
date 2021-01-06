import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Picture from './Picture';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Picture/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
