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
        <div className="ln-nav__icon" ref={ this.mobileNav } onClick={ this.handleMobile }>
          <div className="ln-nav__bars">
            <div className={"ln-nav__bar ln-nav__bar--1" + (this.state.mobileView ? " ln-nav__bar--1--slide" : "") }></div>
            <div className={"ln-nav__bar ln-nav__bar--2" + (this.state.mobileView ? " ln-nav__bar--2--expanded": "")}>
              <div className={"ln-nav--mobile" + (this.state.mobileView ? "" : " ln-nav--mobile--hidden")}>
                <ul className="ln-nav__list--mobile">
                  <li className="ln-nav__list-item--mobile"><Url url="#work" title="work"/></li>
                  <li className="ln-nav__list-item--mobile"><Url url="#resume" title="resume"/></li>
                  <li className="ln-nav__list-item--mobile"><Url url="#contact" title="take a chance with me"/></li>
                </ul>
              </div>
            </div>
            <div className={"ln-nav__bar ln-nav__bar--3" + (this.state.mobileView ? " ln-nav__bar--3--slide" : "") }></div>
          </div>
        </div>
      )
    } else {
      return (
        <ul className="ln-nav__list">
          <li className="ln-nav__list__item"><Url url="#work" title="work"/></li>
          <li className="ln-nav__list__item"><Url url="#resume" title="resume"/></li>
          <li className="ln-nav__list__item"><Url url="mailto:luckyknguyen@gmail.com" title="take a chance with me"/></li>
        </ul>
      )
    }
  }

  render() {
    return (
      <nav className="ln-nav" aria-label="Main Navigation" ref={ this.navBar }>
        <Url className="ln-url--logo" url="/" title="lucky nguyen"/>
        {this.renderNavigation()}
      </nav>
    )
  }
}

export default Navigation
