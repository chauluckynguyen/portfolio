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

import project1 from '../images/todolist.png'
import project2 from '../images/weather.png'

import "@ibm/type/css/ibm-type.min.css"

const IndexPage = () => (
  <div>
    <Navigation />
    <Section className="section__hero">
      <Header />
    </Section>
    <Section className="section__about" title="Hey There, Stranger 👋" id="about">
      <AboutList>
        <About title="Nice to meet you ✨" description="I'm Lucky, a front-end developer passionate about designing and building UI solutions that empower people. 💪 I graduated from UC San Diego with a degree in Computer Science and a minor in Cognitive Science. I currently work as a UX Engineer at ServiceNow. In my spare time, I enjoy learning new languages, tools, and frameworks and building fun, personal projects. I also love playing with dogs 🐶, trying new foods 🍣, and dancing to groovy music. 🕺 I'd love to chat with you about technology, design, music, or food. So let's be friends! 😊"/>
      </AboutList>
    </Section>
    <Section title="Creative Work 🎈" link="View all" id="projects">
      <ProjectList>
        <Project title="Focus" link="/focus" imageSrc={ project1 }/>
        <Project title="Forecast Fun" link="/forecast-fun" imageSrc={ project2 }/>
      </ProjectList>
      <div className="section--background"></div>
    </Section>
    <Footer />
  </div>
)

export default IndexPage
