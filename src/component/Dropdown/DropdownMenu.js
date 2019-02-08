import React, { PureComponent } from 'react';
import Animate from 'rc-animate';
import { DropdownContext } from './Dropdown';
import Popper from 'popper.js';

class DropdownMenu extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showPopper: false
    };
  }

  componentWillUnmount() {
    if (this.popperElem) {
      this.popperElem.destroy();
    }
  }

  getTransitionName() {
    const { placement = '' } = this.props;

    if (placement.indexOf('top') >= 0) {
      return 'slide-down';
    }
    return 'slide-up';
  }

  onVisibleChange(visible) {
    this.setState({
      showPopper: visible
    });
  }

  render() {
    const { showHandler, hideHandler } = this.context;
    const { showPopper } = this.state;

    return (
      <DropdownContext.Consumer>
        {({ placement }) => {
          const Box = props => {
            return (
              <div
                className="br-dropdown-inner"
                ref={ref => this.renderPopper(ref, placement)}
              >
                <ul
                  className="br-dropdown-menu"
                  onMouseEnter={showHandler}
                  onMouseLeave={hideHandler}
                >
                  {this.props.children}
                </ul>
              </div>
            );
          };

          return (
            <Animate
              component=""
              exclusive
              transitionAppear
              transitionName={this.getTransitionName()}
            >
              {showPopper ? <Box /> : null}
            </Animate>
          );
        }}
      </DropdownContext.Consumer>
    );
  }

  renderPopper(ref, placement) {
    if (!ref) {
      return;
    }

    this.popperElem = new Popper(ref.parentNode, ref, {
      placement: placement(),
      modifiers: {
        computeStyle: {
          gpuAcceleration: false
        }
      }
    });
  }
}

DropdownMenu.contextType = DropdownContext;

export default DropdownMenu;
