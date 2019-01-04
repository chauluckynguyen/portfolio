import React from 'react'

import './_EmailButton.scss'

class EmailButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if (window) window.location.href = "mailto:luckyknguyen@gmail.com"
  }
  render() {
    return (
      <button className="ln-btn" onClick={() => this.handleClick()}>drop a message</button>
    )
  }
}

export default EmailButton