import React from 'react'
import { Gericht } from "../../Images/index";
import ProjectInfo from "../../Constant/ProjectInfo";

import './project.css';
const SKill = () => {
      return (
            <div className='project section-padding' id='projects'>
                  <div className="project-heading section-heading" >
                        <span>Projects</span>
                  </div>

                  <div className="project_info-section">

                        <div className="project_info-box">
                              <ProjectInfo image={Gericht} title="Gericht" description="Modern website for Restaurants"
                                    codeurl={'https://github.com/Saurabh-001-S/gericht'}
                                    viewurl={'https://do3hp0-3000.csb.app/gericht.com'} className="p1" />
                              <ProjectInfo image={Gericht} title="Architect" description="Modern website for Restaurants"
                                    codeurl={'https://github.com/Saurabh-001-S/architect'} viewurl={'https://4quofk-3000.csb.app/'}
                                    className="p2" />
                              <ProjectInfo image={Gericht} title="Gericht" description="Modern website for Restaurants"
                                    url={'https://do3hp0-3000.csb.app/gericht.com'} viewurl={''}
                                    className="p3" />
                              <ProjectInfo image={Gericht} title="Gericht" description="Modern website for Restaurants"
                                    url={'https://do3hp0-3000.csb.app/gericht.com'} viewurl={''}
                                    className="p4" />
                              <ProjectInfo image={Gericht} title="Gericht" description="Modern website for Restaurants"
                                    url={'https://do3hp0-3000.csb.app/gericht.com'} viewurl={''}
                                    className="p5" />
                              <ProjectInfo image={Gericht} title="Gericht" description="Modern website for Restaurants"
                                    url={'https://do3hp0-3000.csb.app/gericht.com'} viewurl={''}
                                    className="p6" />
                        </div>
                  </div>
            </div>
      )
}

export default SKill
