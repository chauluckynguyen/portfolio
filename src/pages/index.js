import React from 'react'
import classNames from 'classnames';

// Components
import Header from '../components/Header/index'
import Section from '../components/Section/index'
import Project from '../components/Project/index'
import ProjectList from '../components/ProjectList/index'
import Navigation from '../components/Navigation/index'
import Layout from '../components/layout'
import Scrollchor from 'react-scrollchor'

// Assets
import proj1GIF from '../images/design-system-project.gif'
import proj1PNG from '../images/design-system-project.png'
import proj2GIF from '../images/personal-project.gif'
import proj2PNG from '../images/personal-project.png'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      showJumpUp: false
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll() {
    if (window.pageYOffset > (window.innerHeight/2)) {
      this.setState({
        showJumpUp: true
      })
    } else {
      this.setState({
        showJumpUp: false
      })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const scrollClass = classNames({
      'ln-url': true,
      '-jump-up': true,
      'fadeIn' : this.state.showJumpUp,
      'fadeOut' : !this.state.showJumpUp
    })

    return (
      <Layout>
        <div>
          <Navigation isPink={true} isHome={true}/>
          <Header/>
          <Section title="my work" id="work">
            <ProjectList>
              <Project 
                title="ServiceNow Design System" 
                description="Spring 2017 Internship" 
                link="/servicenow-homepage" 
                gifSrc={proj1GIF} 
                staticSrc={proj1PNG}
              />
              <Project 
                title="Illustrations" 
                description="Personal" 
                link="https://dribbble.com/lalalaluckyy" 
                gifSrc={proj2GIF}
                staticSrc={proj2PNG} 
              />
            </ProjectList>
          </Section>
          <Scrollchor className={scrollClass} to="" aria-label="scroll to top" tabIndex="-1">
            <span tabIndex="0"></span>
          </Scrollchor>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
