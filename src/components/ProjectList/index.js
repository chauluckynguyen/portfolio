import React from 'react'

// Styles
import '../Project/_Project.scss'

class ProjectList extends React.Component {
  render() {
    return (
      <ul className="ln-project-list">
        {this.props.children}
      </ul>
    )
  }
}

export default ProjectList
