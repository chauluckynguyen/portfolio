import React from 'react'

class AboutList extends React.Component {
  render() {
    return (
      <ul className="about--list">
        { this.props.children }
      </ul>
    )
  }
}

export default AboutList
