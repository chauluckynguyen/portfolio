import React from 'react'
import Link from 'gatsby-link'
import './_Header.scss'
import hero from '../../images/hero.svg';

const Header = () => (
  <div className="header">
    <img src={ hero }/>
  </div>
)

export default Header
