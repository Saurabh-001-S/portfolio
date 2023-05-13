import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone, BsFacebook, BsInstagram } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { FaLinkedinIn } from 'react-icons/fa'

import './contact.css'
const Contact = () => {
      return (
            <div id='contact' className='contact'>
                  <div className="contact-heading section-heading" >
                        <div className="horizontal_line" ></div>
                        <span>Contact</span>
                        <div className="horizontal_line"></div>
                  </div>
                  <div className="contact-links">
                        <div className="contact-link-row">
                              <a className="contact-link_box" href='http://gmail.com' target='_blank'>
                                    <TfiEmail />
                                    <p>ssc103445@gmail.com</p>
                              </a>
                              <a className="contact-link_box">
                                    <BsTelephone />
                                    <p>
                                          +91-884-027-6768
                                    </p>
                              </a>
                        </div>
                        <div className="contact-link-row">
                              <a className="contact-link_box" href='https://goo.gl/maps/aZKqaj9kAsNV4LVG9' target='_blank'>
                                    <ImLocation2 />
                                    <p>
                                          Sector-3, Kanpur, UP
                                    </p>
                              </a>
                        </div>
                  </div>
                  <div className="contact-footer-links" >
                        <div className="horizontal_line" ></div>
                        <span>
                              <a href="#">
                                    <BsFacebook />
                              </a>
                              <a href="#">
                                    <BsInstagram />
                              </a>
                              <a href="#">
                                    <FaLinkedinIn />
                              </a>
                        </span>
                        <div className="horizontal_line"></div>
                  </div>
                  <div className="footer">
                        <p>
                              <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Ruslan Babkin - Flaticon</a>
                        </p>
                        <p>All Rights Reserved</p>
                  </div>
            </div >
      )
}

export default Contact
