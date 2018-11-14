import React from 'react';
import '../Project/_Project.scss';

class ProjectList extends React.Component {
  render() {
    return (
      <ul className="ln-project__list">
        { this.props.children }
      </ul>
    )
  }
}

export default ProjectList;
