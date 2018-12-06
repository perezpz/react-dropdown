import React, { PureComponent, createContext } from 'react'
import ReactDOM from 'react-dom'
import ClickOutside from 'react-click-outside'

import './Dropdown.css'

export const DropdownContext = createContext({})

class Dropdown extends PureComponent {
  static defaultProps = {
    trigger: 'click',
    menuAlign: 'bottom-end'
  }

  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      handleClickMenuItem: () => this.handleClickMenuItem(),
      placement: () => this.placement()
    }
  }

  componentDidMount() {
    this.initEvent()
  }

  handleClickMenuItem() {
    if (this.state.visible) {
      this.setState({
        visible: false
      })
    }
  }

  initEvent() {
    const { trigger } = this.props
    const triggerElm = ReactDOM.findDOMNode(this.defaultElem)

    if (trigger === 'hover') {
      triggerElm.addEventListener('mouseenter', this.show.bind(this))
      triggerElm.addEventListener('mouseleave', this.hide.bind(this))
    }

    if (trigger === 'click') {
      triggerElm.addEventListener('click', this.toggleMenu.bind(this))
    }
  }

  toggleMenu() {
    if (this.state.visible) {
      this.hide()
    } else {
      this.show()
    }
  }

  show() {
    this.setState({
      visible: true
    })
  }

  hide() {
    this.setState({
      visible: false
    })
  }

  handleClickOutside() {
    if (this.state.visible) {
      this.setState({ visible: false })
    }
  }

  clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer)
      this.delayTimer = null
    }
  }

  placement() {
    const { menuAlign } = this.props

    return menuAlign
  }

  render() {
    const { menu, children } = this.props

    return (
      <DropdownContext.Provider value={this.state}>
        <div className="br-dropdown">
          {React.cloneElement(children, {
            ref: ref => (this.defaultElem = ref)
          })}
          {React.cloneElement(menu)}
        </div>
      </DropdownContext.Provider>
    )
  }
}

export default ClickOutside(Dropdown)
