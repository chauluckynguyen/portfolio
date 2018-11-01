import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../layouts/index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'viewport', content:'width=device-width, initial-scale=1' }
      ]}
    />
    <div className="root">
      {children}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
