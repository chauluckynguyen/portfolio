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
    this.setState({
      imgSrc: this.props.gifSrc
    });

  }

  handleMouseLeave() {
    this.setState({
      imgSrc: this.props.staticSrc
    });
  }

  render() {
    const {title, link, description} = this.props;

    return (
      <li className="ln-project" aria-label={title} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <a className="ln-project__link" href={link} target="_blank">
          <article className="ln-project__article">
            <img src={this.state.imgSrc} alt=""/>
          </article>
        </a>
        <div className="ln-project__description">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </li>
    )
  }
}

Project.propTypes = {
  title: PropTypes.string,
}

export default Project;
