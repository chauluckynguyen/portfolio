import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './_Project.scss';

class Project extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      imgSrc: this.props.staticSrc
    }

    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleMouseEnter() {
    this.setState({
      imgSrc: this.props.gifSrc
    })
  }

  handleMouseLeave() {
    this.setState({
      imgSrc: this.props.staticSrc
    })
  }

  render() {
    const { title, link, description } = this.props

    return (
      <li className="ln-project" aria-label={title} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <a className="ln-project-link" href={link} aria-label={title}>
          <article className="ln-project-article">
            <img src={this.state.imgSrc} alt=""/>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        </a>
      </li>
    )
  }
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Project;
