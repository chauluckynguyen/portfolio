import React from 'react';
import PropTypes from 'prop-types';
import './_Project.scss';
import Url from '../Url/index';

class Project extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imgSrc: this.props.staticSrc,
      isHover: false
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({
      imgSrc: this.props.gifSrc,
      isHover: true
    });

  }

  handleMouseLeave() {
    this.setState({
      imgSrc: this.props.staticSrc,
      isHover: false
    });
  }

  render() {
    const {title, link} = this.props;
    const {isHover} = this.state;

    return (
      <li className="project" aria-label={title} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <a className="project--link" href={link}>
          <article className="project--article">
            <img src={this.state.imgSrc} alt=""/>
          </article>
        </a>
        <div>
          <Url className={isHover && "is-hover"} url={link} title={title}/>
        </div>
      </li>
    )
  }
}

Project.propTypes = {
  title: PropTypes.string,
}

export default Project;
