import React from 'react'
import './_Navigation.scss'

class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav" aria-label="Main Navigation">
        <ul className="nav--list">
          <li className="nav--link"><a href="#about">About</a></li>
          <li className="nav--link"><a href="#projects">Projects</a></li>
        </ul>
        <a className="nav--logo" href="/">Lucky Nguyen</a>
        <ul className="nav--list">
          <li className="nav--link"><a href="#resume">Resume</a></li>
          <li className="nav--link"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
