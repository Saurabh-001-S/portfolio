import React from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

import './Home.css';

const Home = () => {
      return (
            <div className='home section-padding' id='home'>
                  <div className="home-heading">
                        <div className='home-heading_div'>
                              <p> I'M</p>
                              <h1>SAURABH</h1>
                        </div>
                        <h1>SINGH CHAUHAN</h1>
                        <p className='p2'>Frontend Developer</p>
                        <button type='button' className="btn">Contact Me</button>
                  </div>
                  <div className="home-image">

                  </div>
                  <div className="home-right-contact">
                        <div className="line"></div>
                        <a href="#">
                              <BsFacebook />
                        </a>
                        <a href="#">
                              <BsInstagram />
                        </a>
                        <a href="#">
                              <FaLinkedinIn />
                        </a>
                  </div>

            </div>
      )
}

export default Home
