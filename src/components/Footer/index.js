import React from 'react'
import './_Footer.scss'
import '../Url/_Url.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import avatar from '../../images/lucky2.jpg'

import Avatar from '../Avatar'

class Footer extends React.Component {
  render() {
    return (
      <footer className="ln-footer">
				<div className="ln-footer__content-container">
					<div className="ln-footer__content">
						<Avatar image={avatar}/>
					</div>
					<div className="ln-footer__content">
						<div className="ln-footer__header">
							hi, i'm lucky
						</div>
						<div className="ln-footer__bio">						
							<p>
								i'm a ux engineer based in san diego. my passion lies 
								in the process of moving pixels to prototype and prototype to product to create the perfect user experience.
							</p>
						</div>
						<a className="ln-url ln-url--social is-medium" href="https://medium.com/@luckyknguyen" rel="noopener noreferrer"  target="_blank" title="Medium" aria-label="Medium">
							<FontAwesomeIcon icon={faMedium} />
						</a>
						<a className="ln-url ln-url--social is-github" href="https://github.com/chauluckynguyen" rel="noopener noreferrer"  target="_blank" title="Github" aria-label="Github">
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a className="ln-url ln-url--social is-linkedin" href="https://www.linkedin.com/in/luckyknguyen/" rel="noopener noreferrer"  target="_blank" title="Linkedin" aria-label="Linkedin">
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</div>
				</div>
				<div className="ln-footer__content-container">
					<div className="ln-footer__content">
						<p className="ln-footer__header">design skills</p>
						<ul className="ln-footer__list">
							<li className="ln-footer__list__item"><p>ui design</p></li>
							<li className="ln-footer__list__item"><p>graphic design</p></li>
							<li className="ln-footer__list__item"><p>sketch</p></li>
							<li className="ln-footer__list__item"><p>adobe illustrator</p></li>
							<li className="ln-footer__list__item"><p>wireframing</p></li>
						</ul>
					</div>
					<div className="ln-footer__content">
						<p className="ln-footer__header">engineering skills</p>
						<ul className="ln-footer__list">
							<li className="ln-footer__list__item"><p>js</p></li>
							<li className="ln-footer__list__item"><p>html</p></li>
							<li className="ln-footer__list__item"><p>css</p></li>
							<li className="ln-footer__list__item"><p>sass</p></li>
							<li className="ln-footer__list__item"><p>react</p></li>
							<li className="ln-footer__list__item"><p>redux</p></li>
							<li className="ln-footer__list__item"><p>web accessibility</p></li>
						</ul>
					</div>
				</div>
      </footer>
    )
  }
}

export default Footer
