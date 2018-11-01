import React from 'react'

import Header from '../components/Header/index'
import Section from '../components/Section/index'
import Project from '../components/Project/index'
import ProjectList from '../components/ProjectList/index'
import Footer from '../components/Footer/index'
import Navigation from '../components/Navigation/index'
import Layout from '../components/layout'

import project1 from '../images/graphic1.gif'
import project1_static from '../images/graphic1static.png'
import project2 from '../images/graphic2.gif'
import project2_static from '../images/graphic2static.png'
import project3 from '../images/graphic3.gif'
import project3_static from '../images/graphic3static.png'

import "@ibm/type/css/ibm-type.min.css"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
      <div>
        <Navigation />
        <Section className="section__hero">
          <Header />
        </Section>
        <Section title="work" id="work">
          <ProjectList>
            <Project title="ServiceNow Design System" link="/servicenow-homepage" gifSrc={ project1 } staticSrc={ project1_static }/>
            <Project title="Wonder Plates" link="/wonder-plates" staticSrc={ project3_static } gifSrc={ project3 }/>
            <Project title="Daily UI Challenge" link="/daily-ui" staticSrc={ project2_static } gifSrc={ project2 }/>
          </ProjectList>
        </Section>
        <Footer/>
      </div>
      </Layout>
      )
  }
}

export default IndexPage
