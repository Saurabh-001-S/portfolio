import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu, GiCrossMark } from 'react-icons/gi';

import './navbar.css';
import Logo from '../../Images/Logo2.png'

const Navbar = () => {
      const scrollToSection = (sectionId) => {
            const section = document.getElementById(sectionId);
            section.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest"
            });
      };
      const [toggleMenu, setToggleMenu] = useState(false)

      return (
            <div className='navbar'>
                  <nav>
                        <div className="navbar-logo">
                              <img src={Logo} alt="Logo" />
                        </div>
                        <ul className='app__navbar-links'>
                              <li><a onClick={() => scrollToSection("home")} href="#">Home</a></li>
                              <li ><a onClick={() => scrollToSection("home")} href="#about">About</a></li>
                              <li><a onClick={() => scrollToSection("home")} href="#projects">Projects</a></li>
                              <li><a onClick={() => scrollToSection("home")} href="#contact">Contact</a></li>
                        </ul>
                        <div className="navbar-search-box">
                              <input type="text" placeholder='Search' />
                              <BsSearch />
                        </div>

                        <div className="app__navbar-smallscreen">
                              <GiHamburgerMenu color='#FFF' fontSize={27} onClick={() => setToggleMenu(true)} />

                              {toggleMenu && (
                                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                                          <GiCrossMark fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                                          <ul className='app__navbar-smallscreen_links'>
                                                <li>
                                                      <a onClick={() => scrollToSection("home")} href="#">Home</a>
                                                </li>
                                                <li >
                                                      <a onClick={() => { scrollToSection("about"); }} href="#about">About</a>
                                                </li>
                                                <li>
                                                      <a onClick={() => scrollToSection("project")} href="#projects">Projects</a>
                                                </li>
                                                <li>
                                                      <a onClick={() => scrollToSection("contact")} href="#contact">Contact</a>
                                                </li>
                                          </ul>
                                    </div>
                              )}
                        </div>
                  </nav >
            </div >
      )
}

export default Navbar
