import React from 'react'
import Helmet from 'react-helmet'
import './index.scss'

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
      { children }
    </div>
  </div>
)

export default TemplateWrapper
