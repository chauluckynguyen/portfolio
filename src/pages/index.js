import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header/index'
import Section from '../components/Section/index'
import Project from '../components/Project/index'
import ProjectList from '../components/ProjectList/index'
import About from '../components/About/index'
import AboutList from '../components/AboutList/index'
import Footer from '../components/Footer/index'
import Navigation from '../components/Navigation/index'

import project1 from '../images/graphic1.gif'
import project1_static from '../images/graphic1static.png'
import project2 from '../images/graphic2.gif'
import project2_static from '../images/graphic2static.png'
import project3 from '../images/graphic3.gif'
import project3_static from '../images/graphic3static.png'

import "@ibm/type/css/ibm-type.min.css"

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navigation />
        <Section className="section__hero">
          <Header />
        </Section>
        <Section title="Experience & Projects" link="View all" id="projects">
          <ProjectList>
            <Project title="ServiceNow Design System" link="/servicenow-homepage" gifSrc={ project1 } staticSrc={ project1_static } description="What I worked on during my ServiceNow Internship."/>
            <Project title="Daily UI Challenge" link="/daily-ui" staticSrc={ project2_static } gifSrc={ project2 } description="A chatbot application that seeks to improve the social experiences at UC San Diego."/>
            <Project title="Wonder Plates" link="/wonder-plates" staticSrc={ project3_static } gifSrc={ project3 } description="A chatbot application that seeks to improve the social experiences at UC San Diego."/>
          </ProjectList>
        </Section>
        <Section title="Lucky" id="about">
          <p>/ˈləkē/</p>
          <p>noun</p>

          <p>Graduate from University of California, San Diego</p>
          <p>Enthusiast of moving pixels to prototype and prototype to product</p>

          <p>I am facsinated by the intersection of design and technology, and how it can be used for the greater good.</p>
        </Section>
        <Footer/>
      </div>
      )
  }
}

export default IndexPage
