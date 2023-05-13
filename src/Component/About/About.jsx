import React from 'react'
import { CSS, Html, Js, bootsp, gitIcon, githubIcon, reacticon } from "../../Images/index";

import './About.css';
const About = () => {
      return (
            <div className='about section-padding' id='about'>
                  <div className="about-heading section-heading" >
                        <span>About</span>
                  </div>
                  <div className="about-text">
                        <div className="line-hor" />
                        <div className="about-text-content">
                              <p>I have acquired and sharpened m ipsum dolor sit amet, consectetur adipiscing alit,Etiam eu turpis molestie,dictumest a,mattis tellus.Sed dignissim,metus nec fringilla accuman vn organization.I am
                                    <span> trustworthy, creative ,ans an effective communicator. </span>
                                    I fondly anticipate working in a challenging yet rewarding organization to attain its visionsnfor personal growth.
                              </p>
                        </div>
                  </div>
                  <div className="myskill-heading section-heading">
                        <span>My Skills</span>
                  </div>
                  <div className="about_skill-box">
                        <div className="skill-box_row r1">
                              <div className="skill-box_image b1">
                                    <img src={CSS} alt="Img" />
                                    <h4>CSS</h4>
                              </div>

                              <div className="skill-box_image b2">
                                    <img src={Html} alt="Img" />
                                    <h4>HTML</h4>
                              </div>

                              <div className="skill-box_image b3">
                                    <img src={Js} alt="Img" />
                                    <h4>JavaScript</h4>
                              </div>

                              <div className="skill-box_image b4">
                                    <img src={bootsp} alt="Img" />
                                    <h4>Bootstrap</h4>
                              </div>
                        </div>

                        <div className="skill-box_row r2">
                              <div className="skill-box_image b5">
                                    <img src={gitIcon} alt="Img" />
                                    <h4>Git</h4>
                              </div>

                              <div className="skill-box_image b6">
                                    <img src={githubIcon} alt="Img" />
                                    <h4>GitHub</h4>
                              </div>

                              <div className="skill-box_image b7">
                                    <img src={reacticon} alt="Img" />
                                    <h4>React Js</h4>
                              </div>
                        </div>
                  </div>
                  {/* <div className="atTheTop">
                        <a href="#">
                        <div className="line" />
                        <p className='txt'>Top</p>
                        </a>
                  </div> */}

            </div>
      )
}

export default About
