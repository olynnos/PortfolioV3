import React from 'react'

import { projects } from '../../data/data'
import SingleProject from './SingleProject'

export default function Projects() {

    return (
        <div className="container" id="myprojects">
            <h3>Projects</h3>
            <p>A select few projects I have made. These projects were made for educational purposes.</p>
            <div className="row">
                {
                    projects.map(project => <SingleProject key={project.id} name={project.name} url={project.url} />)
                }
            </div>
        </div>
    )
}
