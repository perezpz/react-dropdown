import React, { PureComponent } from 'react'
import Animate from 'rc-animate'
import classNames from 'classnames'
import { DropdownContext } from './Dropdown'
import Popper from 'popper.js'

class DropdownMenu extends PureComponent {
  componentWillUnmount() {
    if (this.popperElem) {
      this.popperElem.destroy()
    }
  }

  getTransitionName() {
    const { placement = '' } = this.props

    if (placement.indexOf('top') >= 0) {
      return 'slide-down'
    }
    return 'slide-up'
  }

  render() {
    return (
      <DropdownContext.Consumer>
        {({ visible, placement }) => {
          const Box = props => {
            return (
              <div
                style={{ display: props.visible ? 'block' : 'none' }}
                className="br-dropdown-inner"
                ref={ref => this.renderPopper(ref, placement)}
              >
                <ul className="br-dropdown-menu">{this.props.children}</ul>
              </div>
            )
          }

          return (
            <Animate
              component=""
              exclusive
              showProp="visible"
              transitionName={this.getTransitionName()}
            >
              <Box visible={visible} />
            </Animate>
          )
        }}
      </DropdownContext.Consumer>
    )
  }

  renderPopper(ref, placement) {
    if (!ref) {
      return
    }

    this.popperElem = new Popper(ref.parentNode, ref, {
      placement: placement(),
      modifiers: {
        computeStyle: {
          gpuAcceleration: false
        }
      }
    })
  }
}

export default DropdownMenu
