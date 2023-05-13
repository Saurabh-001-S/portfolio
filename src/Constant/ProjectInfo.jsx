import React from 'react'
import { BsArrowRight } from "react-icons/bs";

const ProjectInfo = (props) => {
      return (
            <div className="project_info-box-img">
                  <img src={props.image} alt="Gericht" />
                  <div className="project_info-box-text">
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                        <a href={props.codeurl} target='_blank'>See code
                              <BsArrowRight />
                        </a>
                        <a href={props.viewurl} target='_blank'>view
                        </a>
                  </div>
            </div>
      )
}

export default ProjectInfo