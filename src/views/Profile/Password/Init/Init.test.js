import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Change from './Change';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Change/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
