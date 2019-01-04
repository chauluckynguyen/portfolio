import React from 'react'

// Components
import Url from '../Url/index'
import EmailButton from '../EmailButton/index'

// Styles
import './_Footer.scss'
import '../Url/_Url.scss'

class Footer extends React.Component {
  render() {
    return (
      <footer className="ln-footer">
				<div className="ln-footer-container">
					<div className="ln-footer-content">
						<h2 className="ln-footer-heading">
							about <span>lucky</span>
						</h2>
						<div className="ln-footer-bio">	
							<p> 
								Currently a UX Engineer <span role="img" aria-label="female developer emoji">👩‍💻</span> at <Url url="https://www.servicenow.com/" title="@ServiceNow" size="sm" type="contrast" />, 
								I enjoy solving cool problems and building delightful experiences for individuals and teams. When I'm not coding, you can find me eating dark chocolate 
								<span role="img" aria-label="chocolate emoji">🍫</span>, liking #shibainu posts on Instagram <span role="img" aria-label="heart-eyed emoji">😍</span>, and laughing at memes 
								<span role="img" aria-label="laughing emoji">😆</span>. I'd love to talk about UI/UX thinking, delicious food, cute dogs, or your favorite meme <span role="img" aria-label="sparkling heart emoji">💖</span>.
							</p>
						</div>
						<EmailButton />
					</div>
				</div>
				<div className="ln-footer-container">
					<div className="ln-footer-content">
						<p className="ln-footer-heading">
							<span>design</span> skills
						</p>
						<ul className="ln-footer-list">
							<li className="ln-footer-list-item">
								<p>ui design</p>
							</li>
							<li className="ln-footer-list-item">
								<p>sketch</p>
							</li>
							<li className="ln-footer-list-item">
								<p>adobe illustrator</p>
							</li>
							<li className="ln-footer-list-item">
								<p>wireframing</p>
							</li>
							<li className="ln-footer-list-item">
								<p>competitive analysis</p>
							</li>
							<li className="ln-footer-list-item">
								<p>user research</p>
							</li>
						</ul>
					</div>
					<div className="ln-footer-content">
						<p className="ln-footer-heading">
							<span>engineering</span> skills
						</p>
						<ul className="ln-footer-list">
							<li className="ln-footer-list-item">
								<p>javascript</p>
							</li>
							<li className="ln-footer-list-item">
								<p>html</p>
							</li>
							<li className="ln-footer-list-item">
								<p>css/sass</p>
							</li>
							<li className="ln-footer-list-item">
								<p>react</p>
							</li>
							<li className="ln-footer-list-item">
								<p>redux</p>
							</li>
							<li className="ln-footer-list-item">
								<p>web accessibility</p>
							</li>
							<li className="ln-footer-list-item">
								<p>hi-fi prototyping</p>
							</li>
						</ul>
					</div>
				</div>
      </footer>
    )
  }
}

export default Footer
