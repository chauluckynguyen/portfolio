import React from 'react';
import PropTypes from 'prop-types';
import '../Project/_Project.scss';

class ProjectList extends React.Component {
  render() {
    return (
      <ul className="project--list">
        { this.props.children }
      </ul>
    )
  }
}

export default ProjectList;
