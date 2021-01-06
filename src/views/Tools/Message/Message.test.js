import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Message from './Message';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Message/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
