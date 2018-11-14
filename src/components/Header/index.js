import React from 'react'
import './_Header.scss'
import bioGraphic from '../../images/lucky.svg';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			animate: false 
		};
	}

	componentDidMount() {
		const TIMEOUT_ANIMATE = 50;

		setTimeout(() => {
			this.setState({ 
				animate: true 
			});
		}, TIMEOUT_ANIMATE);
	}

	componentWillUnmount() {
		this.setState({ 
			animate: false 
		});
	}

	render(){
		const {animate} = this.state;

		return (
		  <div className={"ln-bio animated animatedFadeInUp" + (animate ? " fadeInUp" : "")}>
				<img src={bioGraphic} alt="Lucky"/>
		    <p className="ln-bio__punchline">unlike most adjectives, i'm also a ux engineer.</p>
				<p className="ln-bio__info">currently @ servicenow<span>/</span>san diego, ca<span>/</span>chocolate-lover</p>
		  </div>
		)
	}
}

export default Header
