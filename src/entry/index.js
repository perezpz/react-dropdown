import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from '../component/Dropdown';

ReactDOM.render(
  <Dropdown
    menu={
      <Dropdown.Menu>
        <Dropdown.Item>1</Dropdown.Item>
        <Dropdown.Item>2</Dropdown.Item>
      </Dropdown.Menu>
    }
    menuAlign="bottom"
  >
    <span>dropdown</span>
  </Dropdown>,
  document.getElementById('root')
);
