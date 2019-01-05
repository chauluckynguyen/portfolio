import React from 'react'

import Layout from '../components/layout'
import Url from '../components/Url'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Section from '../components/Section'
import Codepen from 'react-codepen-embed'
import image2 from '../images/sn-ds-graphic1.svg'
import image3 from '../images/sn-ds-graphic2.svg'
import image4 from '../images/sn-ds-graphic3.svg'
import image5 from '../images/sn-ds-graphic4.svg'
import image6 from '../images/sn-ds-teamphoto.svg'

const Project2 = () => (
  <Layout>
    <div>
      <Navigation /> 
        <div className="ln-section-banner"></div>
        <h1 className="ln-section__title">ServiceNow Design System</h1>
        <Section headerClass="ln-section-heading -project" className="ln-section -project">
          <table className="ln-section-description">
            <tbody>
              <tr>
                <td>Role</td>
                <td>Front-End Developer Intern</td>
              </tr>
              <tr>
                <td>Timeline</td> 
                <td>April 2016 – June 2016</td>
              </tr>
              <tr>
                <td>Skills</td> 
                <td>HTML, SASS, Accessibility</td>
              </tr>
              <tr>
                <td>Final Project</td> 
                <td><Url url="http://designsystem.servicenow.com/#!/" title="ServiceNow Design System" size="sm" type="contrast" /></td>
              </tr>
            </tbody>
          </table>
        </Section>
        <Section headerClass="ln-section-heading -project" className="ln-section -project">
          <div className="ln-section-body">
            <h2 className="ln-section-heading">Side Note</h2>
            <p>
                Before I dive into my experiences with ServiceNow, I would like to note that I am currently with ServiceNow as full-time UX Engineer in the Experience Organization. As to date, 
                I have designed and implemented new-net components for ServiceNow's Agent Workspace as part of the Design System team,  
                and I have also built high-fidelity prototypes as part of the Design Technology team. If you want to learn more about my full-time experience at ServiceNow, 
                please message me! For the rest of this article, I will be discussing my experience as a Front-End Developer intern for ServiceNow.
            </p>
          </div>
          </Section>
        <Section headerClass="ln-section-heading -project" className="ln-section -project">
          <div className="ln-section-body">
            <h2 className="ln-section-heading">Overview</h2>
            <p>
              ServiceNow — much like many large, corporate enterprises, faced its own battles with fostering a design-forward mentality into its work culture. 
              In spring of 2016, I had the opportunity to be ServiceNow’s first UI/UX engineer intern on the Experience Organization (EO). Here, I tackled the problem of designing and building a Design System 
              that could establish a design culture and consequently improve the work for the company and our customers. For this project, I specifically worked on 
              designing and implementing the Design System’s homepage and enhancing the site’s accessibility.   
            </p>
          </div>
          </Section>
          <Section className="ln-section -gallery">
            <div className="ln-section-body">
              <img src={ image5 } alt=""/>
            </div>
          </Section>
          <Section headerClass="ln-section-heading -project" className="ln-section -project">
            <div className="ln-section-body">
              <h2 className="ln-section-heading">what is the design system?</h2>
              <p>
                The ServiceNow Design System, in short, is a living ecosystem that encompasses all elements starting from reusable UI components, patterns, and interactions 
                to principles, resources, and style guides. By defining the pattern and guidelines, the workflow for designers, developers, and product managers is 
                improved. Designers can focus on creating delightful user experiences, developers can focus on implementing uniform user interfaces, and product managers 
                can focus on executing business goals and achieving product vision.
              </p>
              <p className="ln-section-quote">" The Design System aims to bring cohesion and familiarity across all ServiceNow products, thus improving the user experience for both teams and individuals. "</p>
            </div>
          </Section>
          <Section headerClass="ln-section-heading -project" className="ln-section -project">
            <div className="ln-section-body">
              <h2 className="ln-section-heading">the challenge</h2>
              <p>
                I came in as the first UI/UX engineer intern on EO, specifically the Design System team, the centralized team that dealt with defining, designing, and 
                implementing ServiceNow’s first ever Design System. The Design System team was fairly young, being only two years old with four members. Because of this, 
                I was able to heavily lead and contribute to the project. Prior to my joining, designers attempted to establish a design-forward mentality into 
                the business, but had failed many times. This was due to the fact that the ratio of designers to engineers were 1:20, causing important design 
                solutions to be overriden by strict deadlines and “we just want it to work - who cares what it looks like” mentality. Because of the lack of communication 
                between designers and engineers/product managers, many of ServiceNow products were disjointed and complex. Without the knowledge of what 
                UI components, patterns, or resources are available, this slowed down productivity and innovation. Teams often found themselves scrambling to meet 
                deadlines as they were forced to redesign and rebuild components they didn’t know already existed.
              </p>
              <p className="ln-section-quote">" Because of the lack of communication between designers and engineers/product managers, many of ServiceNow products were disjointed and complex. "</p>
            </div>
          </Section>
          <Section headerClass="ln-section-heading -project" className="ln-section -project">
            <div className="ln-section-body">
              <h2 className="ln-section-heading">my approach</h2>
              <p>
                Understanding the problem and analyzing why previous attempts have failed, I wanted to figure out what could be done better. This included setting up 
                what ServiceNow calls “NorthStar’s” with designers, engineers, and product managers to not only discover the vision and strategy of the Design System, 
                but to also identify the painpoints that each stakeholders faced in their daily work lives. I also studied design systems in other large enterprises 
                and their approach to the problem of building a design sytem while persuading the engineer-driven company the importance and value of human-centered design.
              </p>
            </div>
          </Section>
          <Section headerClass="ln-section-heading -project" className="ln-section -project">
            <div className="ln-section-body">
            <h2 className="ln-section-heading">solution: strengthen relationships</h2>
            <p>
              I sought to improve the relationship between the stakeholders of the company, mainly the designers and engineers. Because I was in a 
              unique position of having the skills of a designer and an engineer, I was able to easily understand their “languages” and translate them in a sense so that 
              each party would understand each other’s motivations and goals. For example, during design hand-offs, I would spend time understanding the designer’s UI/UX 
              challenges and solutions. When the time came to implement the designs, I was able to help the engineers, especially those who didn’t understand HTML, CSS, 
              or Sass, on how to approach and build the product in parity to the design. This in turn formed a bridge between the design team and the engineering team, 
              fostering a friendlier, understanding, and overall better and communicative relationship. 
            </p>
          </div>
          </Section>
          <Section className="ln-section -gallery">
            <div className="ln-section-body">
              <img src={ image2 } alt=""/>
              <img src={ image3 } alt=""/>
              <img src={ image4 } alt=""/>
            </div>
          </Section>
          <Section headerClass="ln-section-heading -project" className="ln-section -project">
            <div className="ln-section-body">
              <h2 className="ln-section-heading">solution: build homepage</h2>
              <p>
                In addition, I helped design and build the ServiceNow Design System homepage that would help introduce its purpose, audience, and available resources. I often 
                collaborated with both my designer coworkers and engineer mentors to create something that would be eye-catching and informative, as a homepage should be.
                Through this, I learned how to identify UX problems while efficiently writing cleaner and more comprehensive code, especially refining my CSS/Sass skills.  I also worked 
                on enhancing the site's overall accessibility, such as adding ARIA landmark roles and attributes, correcting color contrast, and including assistive alt text to images. 
                EO lacked accessibility expertise, and so I found myself reading WCAG and teaching myself how to build accessible UI components. As a result, I found myself 
                growing into the role of baking accessibility into this and future products. You can see the finished project here: <Url url="http://designsystem.servicenow.com/#!/" title="here" size="sm" type="contrast" />
              </p>
              <p className="ln-section-quote">Due to NDA, I'm unable to share details of my implementation. However, I added a fun CodePen to demonstrate how I would build an accessible navigation bar.  
              <span role="img" aria-label="happy emoji"> 🙂</span></p>
            </div>
          </Section>
          <Section className="ln-section -project">
            <Codepen 
              hash="zydomd"
              user="lucky-nguyen"
              height={414}
              loader={() => <div>Loading Codepen...</div>}
              preview={false}
              title="Accessible Navigation"
            />
          </Section>
          <Section headerClass="ln-section-heading -project" className="ln-section -project">
            <div className="ln-section-body">
              <h2 className="ln-section-heading">last thoughts</h2>
              <p>
                This was an incredible experience — to be able to dive into a problem that would affect the work life of employees and customers in ServiceNow. 
                This was definitely also incredibly challenging — as the first and only intern on the team (at the time), I definitely had to learn the products, culture, 
                and coding style quickly to solve problems quickly. Looking back at this this internship, I am incrediably grateful to have the opportunity to not only 
                refine my engineering, design, and business acumen skills, but to also contribute to ServiceNow’s transformative initiative of thinking design first 
                while creating delightful user experiences.
              </p>
            </div>
          </Section>
          <Section className="ln-section -gallery">
            <div className="ln-section-body">
              <img src={ image6 } alt=""/>
            </div>
          </Section>
        <Footer/>
      </div>
    </Layout>
)

export default Project2
