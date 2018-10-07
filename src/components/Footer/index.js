import React from 'react'
import './_Footer.scss'
import '../Url/_Url.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
				<a className="ln-url ln-url__social" href="/">
					<FontAwesomeIcon icon={faMedium} />
				</a>
				<a className="ln-url ln-url__social" href="/">
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a className="ln-url ln-url__social" href="/">
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
      </footer>
    )
  }
}

export default Footer
