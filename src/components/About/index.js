import React from 'react'
import PropTypes from 'prop-types'
import './_About.scss'
// import profile from '../../images/me.png'

class About extends React.Component {
  render() {
    const { title, description } = this.props;

    return (
      <li className="about">
        <div className="about--title-container">
          <h2 className="about--title">{ title }</h2>
        </div>
        { description && <p className="about--description">{ description }</p> }

      </li>
    )
  }
}

About.propTypes = {
  description: PropTypes.string,
}

export default About;
