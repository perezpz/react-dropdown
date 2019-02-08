import React, { PureComponent, createContext } from 'react';
import ReactDOM from 'react-dom';
import ClickOutside from 'react-click-outside';

import './Dropdown.css';

export const DropdownContext = createContext({});

class Dropdown extends React.Component {
  static defaultProps = {
    trigger: 'hover',
    menuAlign: 'bottom-end'
  };

  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.providerData = {
      handleClickMenuItem: () => this.handleClickMenuItem(),
      placement: () => this.placement(),
      showHandler: () => this.show(),
      hideHandler: () => this.hide()
    };
  }

  componentDidMount() {
    this.initEvent();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.visible !== this.state.visible) {
      this.refs.dropdown.onVisibleChange(this.state.visible);
    }
  }

  handleClickMenuItem() {
    if (this.state.visible) {
      this.setState({
        visible: false
      });
    }
  }

  initEvent() {
    const { trigger, menu } = this.props;
    const triggerElem = ReactDOM.findDOMNode(this.defaultElem);

    if (!triggerElem) {
      return;
    }

    if (trigger === 'hover') {
      triggerElem.addEventListener('mouseenter', this.show.bind(this));
      triggerElem.addEventListener('mouseleave', this.hide.bind(this));
    }

    if (trigger === 'click') {
      triggerElem.addEventListener('click', this.toggleMenu.bind(this));
    }
  }

  toggleMenu() {
    if (this.state.visible) {
      this.hide();
    } else {
      this.show();
    }
  }

  show() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.setState({ visible: true }), 250);
  }

  hide() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.setState({ visible: false }), 150);
  }

  handleClickOutside() {
    if (this.state.visible) {
      this.setState({ visible: false });
    }
  }

  clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  }

  placement() {
    const { menuAlign } = this.props;

    return menuAlign;
  }

  render() {
    const { menu, children } = this.props;

    return (
      <DropdownContext.Provider value={{ ...this.state, ...this.providerData }}>
        <div className="br-dropdown">
          {React.cloneElement(children, {
            ref: ref => (this.defaultElem = ref)
          })}
          {React.cloneElement(menu, { ref: 'dropdown' })}
        </div>
      </DropdownContext.Provider>
    );
  }
}

export default ClickOutside(Dropdown);
