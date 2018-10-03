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

import project1 from '../images/Artboard.png'
import project2 from '../images/Artboard2.png'
import project3 from '../images/Artboard3.png'

import "@ibm/type/css/ibm-type.min.css"

const IndexPage = () => (
  <div>
    <Navigation />
    <Section className="section__hero">
      <Header />
    </Section>
    <Section title="Creative Work" link="View all" id="projects">
      <ProjectList>
        <Project title="ServiceNow Design System Home Page" link="/servicenow-homepage" imageSrc={ project1 } description="What I worked on during my ServiceNow Internship."/>
        <Project title="Daily UI" link="/daily-ui" imageSrc={ project2 } description="A chatbot application that seeks to improve the social experiences at UC San Diego."/>
        <Project title="Wonder Plates" link="/wonder-plates" imageSrc={ project3 } description="A chatbot application that seeks to improve the social experiences at UC San Diego."/>
        <Project title="ServiceNow Agent Workspace" link="/servicenow-workspace" imageSrc={ project1 } description="What I worked on during my ServiceNow Internship."/>
      </ProjectList>
    </Section>
  </div>
)

export default IndexPage
