import React from 'react'
import './_Footer.scss'
import '../Url/_Url.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import about from '../../images/about.svg'

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
				<div className="footer--content">
					<img src={ about } alt="Nice to meet you"/>
					<p>
						I am fascinated by the intersection of design and technology, and how it can be used for the greater good.
						Graduate from University of California, San Diego. Enthusiast of moving pixels to prototype and prototype to product
					</p>
					<div className="footer--content__social">
						<a className="ln-url ln-url__social is-medium" href="/">
							<FontAwesomeIcon icon={faMedium} />
						</a>
						<a className="ln-url ln-url__social is-github" href="/">
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a className="ln-url ln-url__social is-linkedin" href="/">
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</div>
				</div>
				<div className="footer--content">
					<div className="footer--content__skills">
						<p className="footer--skills--header">design skills</p>
						<ul className="footer--skills">
							<li className="footer--skills--item">ui design</li>
							<li className="footer--skills--item">graphic design</li>
							<li className="footer--skills--item">sketch</li>
							<li className="footer--skills--item">adobe illustrator</li>
							<li className="footer--skills--item">wireframing</li>
						</ul>
					</div>
					<div className="footer--content__skills">
						<p className="footer--skills--header">develop skills</p>
						<ul className="footer--skills">
							<li className="footer--skills--item">js</li>
							<li className="footer--skills--item">html</li>
							<li className="footer--skills--item">css</li>
							<li className="footer--skills--item">sass</li>
							<li className="footer--skills--item">react</li>
							<li className="footer--skills--item">redux</li>
							<li className="footer--skills--item">web accessibility</li>
						</ul>
					</div>
				</div>
      </footer>
    )
  }
}

export default Footer
