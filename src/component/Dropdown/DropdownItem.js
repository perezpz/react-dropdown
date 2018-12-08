import React, { PureComponent } from 'react';
import { DropdownContext } from './Dropdown';

class DropdownItem extends PureComponent {
  handleClick(handleClickMenuItem) {
    const { onCommand } = this.props;

    if (handleClickMenuItem) {
      handleClickMenuItem();
    }

    if (onCommand) {
      onCommand();
    }
  }

  render() {
    return (
      <DropdownContext.Consumer>
        {({ handleClickMenuItem }) => (
          <li
            className="br-dropdown-menu-item"
            onClick={() => this.handleClick(handleClickMenuItem)}
          >
            {this.props.children}
          </li>
        )}
      </DropdownContext.Consumer>
    );
  }
}

export default DropdownItem;
