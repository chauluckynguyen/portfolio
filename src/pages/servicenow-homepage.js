import React from 'react'
import Link from 'gatsby-link'

import Footer from '../components/Footer/index'
import Navigation from '../components/Navigation/index'
import Section from '../components/Section/index'
import project1 from '../images/graphic1.gif'

import "@ibm/type/css/ibm-type.min.css"

const Project2 = () => (
  <div>
    <Navigation/>
    	<section>
    		<img src={project1}/>
    	</section>
    <Footer/>
  </div>
)

export default Project2
