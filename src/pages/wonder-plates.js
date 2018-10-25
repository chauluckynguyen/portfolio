import React from 'react'

import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Section from '../components/Section'
import image1 from '../images/graphic3.gif'

import "@ibm/type/css/ibm-type.min.css"

const Project3 = () => (
  <div>
    <Navigation/>
      <Section>
        <div className="section--display">
            <div className="section--display--content">
              <p className="section--period">April - June 2017</p>
              <h2 className="section--title section--title__project">Wonder Plates</h2>
              <p className="section--position">Class Project</p>
            </div>
            <img alt="" src={image1}></img>
          </div>
          <div className="section--body">
          <h2 className="section--title">What is Wonder Plates</h2>
          <p className="section--summary">
            Wonder Plates is a subscription-based delivery service that brings food from all over the world 
            right to your doorstep.
          </p>
          <h2 className="section--title">Home Page Redesign</h2>
          <p className="section--summary">
            My first objective 
          </p>
          {/* <img alt="" src={image2}></img> */}
          <h2 className="section--title">Keyboard Accessibility</h2>
          <p className="section--summary">The ServiceNow Design System, in short, a living ecosystem that encompasses all elements starting from reusable components, patterns, and interactions to principles, resources, and style.
            By defining the pattern and guidelines, the workflow for designers, developers, and product managers is improved. Designers can focus on user experience, developers can focus on implementation, 
            and product managers can focus on the product vision and business goals. The Design System brings cohesion and familiarity across all ServiceNow products,
            thus also improving the user experience for our customers. 
          </p>
          {/* <img alt="" src={image3}></img>
          <img alt="" src={image4}></img> */}
        </div>
    	</Section>
    <Footer/>
  </div>
)

export default Project3
