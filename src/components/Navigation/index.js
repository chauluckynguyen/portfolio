import React from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types'

// Components
import Url from '../Url/index'
import Scrollchor from 'react-scrollchor'

// Styles
import './_Navigation.scss'

// Assets
import logo from '../../images/logo.svg'

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      windowWidth: 9999,
      mobileView: false 
    };

    this.handleResize = this.handleResize.bind(this);
    this.renderNavigation = this.renderNavigation.bind(this);
    this.handleMobile = this.handleMobile.bind(this);
    this.mobileNav = React.createRef();
    this.navBar = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({windowWidth: window.innerWidth})
  }

  handleMobile = () => {
    document.body.classList.toggle('open');
  }

  renderNavigation() {
    const { isHome } = this.props 

    if(this.state.windowWidth <= 1000) {
      return (
        <div className="ln-nav-icon" ref={this.mobileNav} onClick={this.handleMobile}>
          <div className="ln-nav-bars">
            <span></span>
          </div>
          <div className="ln-nav-bg">
          <ul className="ln-nav-list">
            <li className="ln-nav-list-item" onClick={this.removeMobile}>
              { isHome ? 
                <Scrollchor className="ln-url" to="#work">work</Scrollchor>
                : <a href="/#work" className="ln-url">work</a>
              }
            </li>
            <li className="ln-nav-list-item" onClick={this.removeMobile}>
              { isHome ? 
                <Scrollchor className="ln-url" to="">home</Scrollchor>                
                : <a href="/" className="ln-url">home</a>
              }
            </li>
            <li className="ln-nav-list-item" onClick={this.removeMobile}>
              <Url url="https://drive.google.com/file/d/1mPdUD47ZdwwROSri6nSN4wlq2GOjTSjz/view?usp=sharing" title="resume"/>
            </li>
          </ul>
          </div>
        </div>
      )
    } else {
      return (
        <ul className="ln-nav-list">
          <li className="ln-nav-list-item">
            { isHome ? 
              <Scrollchor className="ln-url" to="#work">work</Scrollchor>
              : <a href="/#work" className="ln-url">work</a>
            }
          </li>
          <li className="ln-nav-list-item">
            <Url url="https://drive.google.com/file/d/1mPdUD47ZdwwROSri6nSN4wlq2GOjTSjz/view?usp=sharing" title="resume" isNewTab={true}/>
          </li>
        </ul>
      )
    }
  }

  render() {
    const { isPink } = this.props 

    const navClass = classNames({
      'ln-nav': true, 
      '-contrast': isPink
    })

    return (
      <nav className={navClass} aria-label="Main Navigation" ref={this.navBar}>
        <a href="/">
          <img 
            className="ln-nav-logo" 
            src={logo} 
            alt="Lucky's Logo" 
          />
        </a>
        {this.renderNavigation()}
      </nav>
    )
  }
}

// PropTypes
Navigation.propTypes = {
  isHome: PropTypes.bool,
  isPink: PropTypes.bool
}

export default Navigation
