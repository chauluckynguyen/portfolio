import React from 'react'
import Link from 'gatsby-link'
import './_Header.scss'
import Url from '../Url/index';
// import hero from '../../images/hero.svg';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { animate: false };
	}

	componentDidMount() {
		const TIMEOUT_ANIMATE = 50;

		setTimeout(() => {
			this.setState({ animate: true });
		}, TIMEOUT_ANIMATE);
	}

	componentWillUnmount() {
		this.setState({ animate: false });
	}

	render(){
		return (
		  <div className={"header animated animatedFadeInUp" + (this.state.animate ? " fadeInUp" : "")}>
		    <h1 className="header--description">Hi, I'm <Url className="ln-url__contrast" url="/" title="Lucky"/>!</h1>
		    <p className="header--small-description">Unlike most adjectives, I'm also a UX Engineer.</p>
		    <p className="header--status">Currently employed at <Url className="ln-url__contrast" url="https://www.servicenow.com/" title="ServiceNow"/>.</p>
		  </div>
		)
	}
}

export default Header
