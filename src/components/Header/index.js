import React from 'react'
import Link from 'gatsby-link'
import './_Header.scss'
import lucky from '../../images/lucky.svg';
import outline_oval from '../../images/outline-oval.svg'
import triangle from '../../images/triangle.svg'
import square from '../../images/square.svg'
import loop from '../../images/loop.svg'
import circle2 from '../../images/circle2.svg'

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
				<div className="header--background float">
					<img className="circle" src={ outline_oval } alt="" role="presentation"/>
					<img className="triangle spin" src={ triangle } alt="" role="presentation"/>
					<img className="square spin" src={ square } alt="" role="presentation"/>
					<img className="circle2" src={ circle2 } alt="" role="presentation"/>
				</div>
				<img src={ lucky } alt="Lucky"/>
		    <p className="header--small-description">unlike most adjectives, i'm also a ux engineer.</p>
				<p className="header--small-description">currently with servicenow<span>/</span>san diego, ca<span>/</span>chocolate-lover</p>
		  </div>
		)
	}
}

export default Header
