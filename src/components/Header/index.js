import React from 'react'
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
			<section className="ln-section ln-section--hero">
				<div className={"ln-bio animated animatedFadeInUp" + (animate ? " fadeInUp" : "")}>
					<h1 className="ln-bio__heading">
						hi there! i'm <span>lucky</span><br/>
						unlike most adjectives, <br/>
						i'm also a ux engineer.
					</h1>
					<p className="ln-bio__punchline">
						( Another fun fact: I'm very bad at puns. 🤣 ) 
					</p>
				</div>
			</section>
		)
	}
}

export default Header
