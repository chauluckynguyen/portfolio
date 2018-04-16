import React from 'react';
import PropTypes from 'prop-types';
import './_Project.scss';

class Project extends React.Component {
  render() {
    const { title, link, imageSrc } = this.props;

    return (
      <li className="project">
        <a href={ link }>
          <img alt="" src={ imageSrc }/>
        </a>
        <div>
          <h1 className="project--title">{ title }</h1>
        </div>
      </li>
    )
  }
}

Project.propTypes = {
  title: PropTypes.string,
}

export default Project;
