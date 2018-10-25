import React from 'react'

import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Section from '../components/Section'
import image1 from '../images/graphic2.gif'

import "@ibm/type/css/ibm-type.min.css"

const Project4 = () => (
  <div>
    <Navigation/>
      <Section>
        <div className="section--display">
            <div className="section--display--content">
              <p className="section--period">July 2018 - Present</p>
              <h2 className="section--title section--title__project">Daily UI Challenge</h2>
              <p className="section--position">For Funsies</p>
            </div>
            <img alt="" src={image1}></img>
          </div>
        {/* <p className="section--body">
          I spent an enlightening 3 months with the Experience Organization at ServiceNow. 
          Being it as my first internship, I was fortunate to have the opportunity to hone my 
          design and engineer skills from a talented and creative team while also developing my business acumen. 
          My main project was ServiceNow's first Design System, which you can check out here!
        </p>
        <p className="section--body">
          Even though I was an intern, I immediately felt like I was part of the team, the company, the family. 
          Here, I learned something new almost every day. I was able to contribute in the design process, and 
          I grew into a stronger developer whenever I received critical feedback. I am proud to say that I am 
          still with ServiceNow as a full-time UX engineer :) I can go on and on about my experience, 
          but if you would like to know more, please feel free to reach out to me!
        </p> */}
    	</Section>
    <Footer/>
  </div>
)

export default Project4
