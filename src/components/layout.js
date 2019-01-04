import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../layouts/index.scss'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from '../store'; 

import "./layout.css"

const TemplateWrapper = ({ children }) => (
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <Helmet
            title="Gatsby Default Starter"
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
              { name: 'viewport', content:'width=device-width, initial-scale=1' }
            ]}
          >
            <html lang="en" />
          </Helmet>
          <div className="root">
            {children}
          </div>
        </div>
      </PersistGate>
  </Provider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
