import React from 'react';
import PropTypes from 'prop-types';
import './_Project.scss';

class Project extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imgSrc: this.props.staticSrc
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({ imgSrc: this.props.gifSrc })
  }

  handleMouseLeave() {
    this.setState({ imgSrc: this.props.staticSrc })
  }

  render() {
    const { title, link, staticSrc, gifSrc, description, onMouseOver } = this.props;

    return (
      <li className="project" aria-label={ title } onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <a className="project--link" href={ link }>
          <article className="project--article">
            <img src={ this.state.imgSrc }/>
          </article>
        </a>
      </li>
    )
  }
}

Project.propTypes = {
  title: PropTypes.string,
}

export default Project;
