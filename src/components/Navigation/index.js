import React from 'react'

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
    if(this.state.windowWidth <= 1000) {
      return (
        <div className="ln-nav-icon" ref={ this.mobileNav } onClick={ this.handleMobile }>
          <div className="ln-nav-bars">
            <span></span>
          </div>
          <div className="ln-nav-bg">
          <ul className="ln-nav-list">
            <li className="ln-nav-list-item" onClick={this.removeMobile}><Scrollchor className="ln-url" to="">home</Scrollchor></li>
            <li className="ln-nav-list-item" onClick={this.removeMobile}><Scrollchor className="ln-url" to="#work">work</Scrollchor></li>
            <li className="ln-nav-list-item" onClick={this.removeMobile}><Url url="https://drive.google.com/file/d/1PoZvl59uDGA8TxPqWYLVudIqZN47Cwmp/view?usp=sharing" title="resume"/></li>
          </ul>
          </div>
        </div>
      )
    } else {
      return (
        <ul className="ln-nav-list">
          <li className="ln-nav-list-item"><Scrollchor className="ln-url" to="#work">work</Scrollchor></li>
          <li className="ln-nav-list-item"><Url url="https://drive.google.com/file/d/1PoZvl59uDGA8TxPqWYLVudIqZN47Cwmp/view?usp=sharing" title="resume" isNewTab={true}/></li>
        </ul>
      )
    }
  }

  render() {
    return (
      <nav className="ln-nav" aria-label="Main Navigation" ref={this.navBar}>
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

export default Navigation
