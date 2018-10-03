import React from 'react';
import PropTypes from 'prop-types';
import './_Project.scss';

class Project extends React.Component {
  render() {
    const { title, link, imageSrc, description } = this.props;
    return (
      <li className="project" aria-label={ title }>
        <a className="project--link" href={ link }>
          <article className="project--article">
            <img src={ imageSrc }/>
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
