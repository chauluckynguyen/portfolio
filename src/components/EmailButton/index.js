import React from 'react'

// Styles
import './_EmailButton.scss'

class EmailButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.buttonRef = React.createRef()
  }

  componentDidMount() {
    this.buttonRef.current.addEventListener('click', this.handleClick)
  }

  componentWillUnmount() {
    this.buttonRef.current.removeEventListener('click', this.handleClick)
  }

  handleClick() {
    window.location.href = "mailto:luckyknguyen@gmail.com"
  }

  render() {
    return (
      <button ref={this.buttonRef} className="ln-btn">
        drop a message
      </button>
    )
  }
}

export default EmailButton