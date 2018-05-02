import React from 'react';
import PropTypes from 'prop-types';
import './_Project.scss';

class Project extends React.Component {
  render() {
    const { title, link, imageSrc } = this.props;
    return (
      <li className="project">
        <a className="project--link" href={ link }>
          <img alt="" src={ imageSrc }/>
        </a>
        <div>
          <a className="project--title" href={ link }>{ title }</a>
        </div>
      </li>
    )
  }
}

Project.propTypes = {
  title: PropTypes.string,
}

export default Project;
