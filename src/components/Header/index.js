import React from 'react'

// Components 
import Scrollchor from 'react-scrollchor'

// Styles
import './_Header.scss'
import '../Section/_Section.scss'

class Header extends React.Component {
	state = { animate: false }

	componentDidMount() {
		const TIMEOUT_ANIMATE = 50

		this.timer = setTimeout(() => {
			this.setState({ 
				animate: true 
			});
		}, TIMEOUT_ANIMATE)
	}

	componentWillUnmount() {
		clearInterval(this.timer)
		this.setState({
			animate: false
		})
	}

	render(){
		const { animate } = this.state

		return (
			<section className="ln-section -hero">
				<div className={"ln-header animated animatedFadeInUp" + (animate ? " fadeInUp" : "")}>
					<h1 className="ln-header-heading">
						hi, my name is <span>lucky</span>. <br/>
						unlike most adjectives, <br/>
						i'm also a ux engineer.
					</h1>
					<p className="ln-header-subheading">
						( Another fun fact: I'm very bad at puns. <span role="img" aria-label="embarassed emoji">😳</span> ) 
					</p>
				</div>
				<div className="ln-header -jump">
					<Scrollchor className="ln-url -jump-down" to="#work" aria-label="scroll down">
						<span></span>
					</Scrollchor>
				</div>
			</section>
		)
	}
}

export default Header
