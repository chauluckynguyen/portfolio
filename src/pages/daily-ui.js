import React from 'react'

import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Section from '../components/Section'
import image1 from '../images/graphic2.gif'

import "@ibm/type/css/ibm-type.min.css"

const Project4 = () => (
  <div>
    <Navigation/>
      <Section headerClass="ln-section__title--project">
        <div className="ln-section__display">
          <div className="ln-section__display-container">
            <p className="ln-section__period">April - June 2017</p>
            <h2 className="ln-section__title ln-section__title--project">Daily UI Challenge</h2>
            <p className="ln-section__position">Design for Fun</p>
          </div>
          <img alt="" src={image1}></img>
        </div>
        <div className="ln-section__body">
          <h2 className="ln-section__title">What is the ServiceNow Design System</h2>
          <p className="ln-section__summary">
            The ServiceNow Design System, in short, is a living ecosystem that encompasses all elements starting from reusable components, patterns, and interactions to principles, resources, and style.
            By defining the pattern and guidelines, the workflow for designers, developers, and product managers is improved. Designers can focus on user experience, developers can focus on implementation, 
            and product managers can focus on the product vision and business goals. The Design System brings cohesion and familiarity across all ServiceNow products,
            thus also improving the user experience for our customers. 
          </p>
          <h2 className="ln-section__title">Home Page Implementation</h2>
          <p className="ln-section__summary">
            One of the first projects I worked on was the implementation of the ServiceNow Design System's home page. As stated before, the Design System is a collection of
            elements that enable designers, developers, product managers to focus on their main objectives, consequentally eliminating the worry of recreating new patterns or principles.
            Indubitably, the design of the home page had to mirror the Design System's purpose. When I was first assigned this task, I was given the design specs from the designer. Fortunately,
            we sat in close proximity, making it easy to communicate for any clarifications or concerns. From this experience, I was able to hone in my design and developer skills, following design specs and patterns,
            and 
          </p>
          <h2 className="ln-section__title">Keyboard Accessibility</h2>
          <p className="ln-section__summary">The ServiceNow Design System, in short, a living ecosystem that encompasses all elements starting from reusable components, patterns, and interactions to principles, resources, and style.
            By defining the pattern and guidelines, the workflow for designers, developers, and product managers is improved. Designers can focus on user experience, developers can focus on implementation, 
            and product managers can focus on the product vision and business goals. The Design System brings cohesion and familiarity across all ServiceNow products,
            thus also improving the user experience for our customers. 
          </p>
        </div>
    	</Section>
    <Footer/>
  </div>
)

export default Project4

