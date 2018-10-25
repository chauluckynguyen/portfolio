import React from 'react';
import './_Navigation.scss';
import Url from '../Url/index';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.handleResize = this.handleResize.bind(this);
    this.renderNavigation = this.renderNavigation.bind(this);
    this.handleMobile = this.handleMobile.bind(this);
    this.mobileNav = React.createRef();
    this.navBar = React.createRef();
    this.state = { windowWidth: window.innerWidth, mobileView: false };
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
    this.setState( prevState => ({mobileView: !prevState.mobileView }) );
  }

  renderNavigation() {
    if(this.state.windowWidth <= 1050) {
      return (
        <div className="nav--icon" ref={ this.mobileNav } onClick={ this.handleMobile }>
          <div className="nav--bars">
            <div className={"nav--bar nav--bar__1" + (this.state.mobileView ? " nav--bar__1__rotated" : "") }></div>
            <div className={"nav--bar nav--bar__2" + (this.state.mobileView ? " nav--bar__2__expanded": "")}>
              <div className={"nav__mobile" + (this.state.mobileView ? "" : " nav__mobile__hidden")}>
                <ul className="nav--list__mobile">
                  <li className="nav--link__mobile"><Url url="#work" title="work"/></li>
                  <li className="nav--link__mobile"><Url url="#resume" title="resume"/></li>
                  <li className="nav--link__mobile"><Url url="#contact" title="take a chance with me"/></li>
                </ul>
              </div>
            </div>
            <div className={"nav--bar nav--bar__3" + (this.state.mobileView ? " nav--bar__3__rotated" : "") }></div>
          </div>
        </div>
      )
    } else {
      return (
        <ul className="nav--list">
          <li className="nav--link"><Url url="#work" title="work"/></li>
          <li className="nav--link"><Url url="#resume" title="resume"/></li>
          <li className="nav--link"><Url url="mailto:luckyknguyen@gmail.com" title="take a chance with me"/></li>
        </ul>
      )
    }
  }

  render() {
    return (
      <nav className="nav" aria-label="Main Navigation" ref={ this.navBar }>
        <Url className="ln-url__logo" url="/" title="lucky nguyen"/>
        {this.renderNavigation()}
      </nav>
    )
  }
}

export default Navigation
