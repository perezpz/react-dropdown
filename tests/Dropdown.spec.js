import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';

import Dropdown from '../src/component/Dropdown';

describe('Advanced usage', () => {
  const state = {
    menuAlign: 'bottom',
    trigger: 'hover'
  };

  const dropdown = mount(
    <Dropdown
      menu={
        <Dropdown.Menu>
          <Dropdown.Item>1</Dropdown.Item>
          <Dropdown.Item>2</Dropdown.Item>
        </Dropdown.Menu>
      }
      menuAlign={state.menuAlign}
      trigger={state.trigger}
    >
      <span className="dropdown-link">dropdown</span>
    </Dropdown>
  );

  it('allows us to set props', () => {
    expect(dropdown.props().trigger).toEqual('hover');
    dropdown.setProps({ trigger: 'click' });
    expect(dropdown.props().trigger).toEqual('click');
  });

  it('renders correctly', () => {
    dropdown.find('span.dropdown-link').simulate('mouseEnter');
    expect(dropdown.render()).toMatchSnapshot();
  });
});
