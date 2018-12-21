import React from 'react'
import './_Footer.scss'
import '../Url/_Url.scss'

class Footer extends React.Component {
  render() {
    return (
      <footer className="ln-footer">
				<div className="ln-footer__content-container">
					<div className="ln-footer__content">
						<h2 className="ln-footer__heading">
							about <span>lucky</span>
						</h2>
						<div className="ln-footer__bio">						
							<p> 
								Currently a UX Engineer 👩‍💻 at ServiceNow, I love
								solving cool problems and building delightful experiences for individuals and teams.
								When I'm not coding, you can find me eating dark chocolate pastries 🍫, scrolling through #shibainu 😍, and laughing at memes 😆.
								I'd love to talk about ui/ux thinking, good food, cute dogs, or your favorite meme 💖.
							</p>
						</div>
						<button className="ln-btn">drop a message</button>
					</div>
				</div>
				<div className="ln-footer__content-container">
					<div className="ln-footer__content">
						<p className="ln-footer__heading"><span>design</span> skills</p>
						<ul className="ln-footer__list">
							<li className="ln-footer__list__item"><p>ui design</p></li>
							<li className="ln-footer__list__item"><p>sketch</p></li>
							<li className="ln-footer__list__item"><p>adobe illustrator</p></li>
							<li className="ln-footer__list__item"><p>wireframing</p></li>
							<li className="ln-footer__list__item"><p>competitive analysis</p></li>
							<li className="ln-footer__list__item"><p>user research</p></li>
						</ul>
					</div>
					<div className="ln-footer__content">
						<p className="ln-footer__heading"><span>engineering</span> skills</p>
						<ul className="ln-footer__list">
							<li className="ln-footer__list__item"><p>javascript</p></li>
							<li className="ln-footer__list__item"><p>html</p></li>
							<li className="ln-footer__list__item"><p>css/sass</p></li>
							<li className="ln-footer__list__item"><p>react</p></li>
							<li className="ln-footer__list__item"><p>redux</p></li>
							<li className="ln-footer__list__item"><p>web accessibility</p></li>
							<li className="ln-footer__list__item"><p>hi-fi prototyping</p></li>
						</ul>
					</div>
				</div>
      </footer>
    )
  }
}

export default Footer
