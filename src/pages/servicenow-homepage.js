import React from 'react'

import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Section from '../components/Section'
import image1 from '../images/graphic1static.png'
import image2 from '../images/sn-ds-graphic1.svg'
import image3 from '../images/sn-ds-graphic2.svg'
import image4 from '../images/sn-ds-graphic3.svg'
import image5 from '../images/sn-ds-graphic4.svg'
import image6 from '../images/sn-ds-teamphoto.svg'
import banner from '../images/design-system-banner.svg'

import "@ibm/type/css/ibm-type.min.css"

const Project2 = () => (
  <div>
    <Navigation/> 
      <div className="ln-section__banner">
        <img src={banner} alt="Article Banner"/>
      </div>
      <Section headerClass="ln-section__heading--project" className="ln-section__project">
        <h1 className="ln-section__bigheading">ServiceNow Design System</h1>
        <div className="ln-section__body">
          <h2 className="ln-section__heading">tl;dr</h2>
          <p className="ln-section__summary">
            ServiceNow — much like many large, corporate enterprises, faced its own battles with fostering a design-forward mentality into its work culture. 
            I came in as ServiceNow’s first ux/ui engineer intern on the Experience Organization (EO) to tackle the problem of designing and building a Design System, 
            that could establish a design culture and consequently improve the work for the company and our customers. For this project, I specifically worked on 
            designing and implementing the Design System’s homepage and enhancing the site’s accessibility.   
          </p>
          <h2 className="ln-section__heading">what is the design system?</h2>
          <p className="ln-section__summary">
            The ServiceNow Design System, in short, is a living ecosystem that encompasses all elements starting from reusable UI components, patterns, and interactions 
            to principles, resources, and style guides. By defining the pattern and guidelines, the workflow for designers, developers, and product managers is 
            ameliorated. Designers can focus on creatng delightful user experiences, developers can focus on implementing uniform user interfaces, and product managers 
            can focus on executing business goals and achieving product vision.
          </p>
          <p className="ln-section__bigquote">" The Design System aims to bring cohesion and familiarity across all ServiceNow products, thus improving the user experience for both teams and individuals. "</p>
        </div>
        </Section>
        <Section className="ln-section__gallery">
          <div className="ln-section__body">
            <img src={ image5 } alt=""/>
          </div>
        </Section>
        <Section headerClass="ln-section__heading--project" className="ln-section__project">
          <div className="ln-section__body">
          <h2 className="ln-section__heading">the challenge</h2>
          <p className="ln-section__summary">
            I came in as the first ux/ui engineer intern on EO, specifically the Design System team, the centralized team that dealt with defining, designing, and 
            implementing ServiceNow’s first ever Design System. The Design System team was fairly young (being only 4 years old with 4 members). Because of this, 
            I was able to heavily lead and contribute to the project. Prior to my joining, designers had attempted ways to establish a design-forward mentality into 
            the business, but had failed many times. This was due to the fact that the ratio of designers to engineer teams were 1:20, causing important design 
            solutions to be overriden by strict deadlines and “we just want it to work - who cares what it looks like” mentality. Because of the lack of communication 
            between designers and engineers/product managers, many of ServiceNow products were disjointed and complex. Without the knowledge of what 
            UI components, patterns, or resources are available, this slowed down productivity and innovation. Teams often found themselves scrambling to meet 
            deadlines as they were forced to redesign and rebuild components they didn’t know already existed.
          </p>
          <p className="ln-section__bigquote">" Because of the lack of communication between designers and engineers/product managers, many of ServiceNow products were disjointed and complex. "</p>
          <h2 className="ln-section__heading">my approach</h2>
          <p className="ln-section__summary">
            Understanding the problem and analyzing why previous attempts have failed, I wanted to figure out what could be done better. This included setting up 
            what ServiceNow calls “North Star’s” with designers, engineers, and product managers to not only discover the vision and strategy of the Design System, 
            but to also identify the painpoints that each stakeholders faced in their daily work lives. I also read up on design systems in other large enterprises 
            and their approach to problem of building a design sytem while persuading the engineer-driven company the importance and value of human-centered design.
          </p>
          </div>
        </Section>
        <Section headerClass="ln-section__heading--project" className="ln-section__project">
          <div className="ln-section__body">
          <h2 className="ln-section__heading">the solution</h2>
          <p className="ln-section__summary">
            With this problem, I sought out to improve the relationship between the stakeholders of the company, mainly the designers and engineers. Because I was in a 
            unique position of having the skills of a designer and an engineer, I was able to easily understand their “languages” and translate them in a sense so that 
            each party would understand each other’s motivations and goals. For example, during design hand-offs, I would spend time understanding the designer’s UI/UX 
            challenges and solutions. When the time came to implement the designs, I was able to help the engineers, especially those who didn’t understand HTML, CSS, 
            or Sass, on how to approach and build the product in parity to the design. This in turn formed a bridge between the design team and the engineering team, 
            fostering a friendlier, understanding, and overall better and communicative relationship. 
            In addition, I helped design and build the ServiceNow Design System homepage that would help introduce its purpose, audience, and available resources. I often 
            collaborated with both my designer coworker and engineer mentor to create something that would be impactful, eye-catching, and informative, as a homepage should be.
            Through this, I learned how to identify UX problems while efficiently writing cleaner and comprehensive code, especially refining my CSS/Sass skills.  I also worked 
            on enhancing the overall site’s accessibility, such as adding aria landmark roles and attributes, correcting color contrast, and including assistive alt text to images. 
            EO lacked accessibility expertise, and so I found myself execessively reading WCAG and teaching myself how to build accessible UI components. As a result, I found myself 
            growing into the role of baking accessibility into this and future products. 
          </p>
        </div>
        </Section>
        <Section className="ln-section__gallery">
          <div className="ln-section__body">
            <img src={ image2 } alt=""/>
            <img src={ image3 } alt=""/>
            <img src={ image4 } alt=""/>
          </div>
        </Section>
        <Section headerClass="ln-section__heading--project" className="ln-section__project">
        <div className="ln-section__body">
          <h2 className="ln-section__heading">thoughts</h2>
          <p className="ln-section__summary">
            I think this was an incredible experience-- to be able to dive into a problem that would affect the work life of employees and customers in ServiceNow. 
            This was definitely also incredibly challenging-- as the first and only intern on the team (at the time), I definitely had to learn the products, culture, 
            and coding style quickly to solve problems quickly. Looking back at this this internship, I am incrediably grateful to have the opportunity to not only 
            refine my engineering, design, and business acumen skills, but to also contribute to ServiceNow’s transformative initiative of thinking design first 
            while creating delightful user experiences. I also can’t believe that in the following year of my internship, ServiceNow was ranked the # 1 Most 
            Innovative Companies in the world. Woo!
          </p>
          <img src={ image6 } alt=""/>
        </div>
    	</Section>
    <Footer/>
  </div>
)

export default Project2
