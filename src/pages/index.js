import React from 'react'

// Components
import Header from '../components/Header/index'
import Section from '../components/Section/index'
import Project from '../components/Project/index'
import ProjectList from '../components/ProjectList/index'
import Footer from '../components/Footer/index'
import Navigation from '../components/Navigation/index'
import Layout from '../components/layout'

// Assets
import project1 from '../images/graphic1.gif'
import project1_static from '../images/graphic1static.png'
import project2 from '../images/graphic2.gif'
import project2_static from '../images/graphic2static.png'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
      <div>
        <Navigation />
          <Header/>
          <Section title="my work" id="work">
            <ProjectList>
              <Project title="Servicenow Design System" description="Spring 2017 Internship" link="/servicenow-homepage" gifSrc={ project1 } staticSrc={ project1_static }/>
              <Project title="Illustrations" description="Personal" link="https://dribbble.com/lalalaluckyy" staticSrc={ project2_static } gifSrc={ project2 }/>
            </ProjectList>
          </Section>
        <Footer/>
      </div>
      </Layout>
      )
  }
}

export default IndexPage
