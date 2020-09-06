import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import projectData from "../project-data";

const Projects = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(projectData);
    }, [])

    const projectList = projects => {
        return projects.map(project => {
            console.log('in projects component', project);
            return (
                <div key={project.tag}>
                    <Link to={
                        {
                            pathname: `/projects/${project.tag}`,
                            state: {
                                project
                            }

                        }
                    }>
                        <div>{project.title}</div>
                        <div>
                            <img src={project.img} alt="Project screenshot" />
                        </div>
                    </Link>
                </div>
            )
        });
    }

    return (
        <div className='projects-container'>
            {projectList(data)}
        </div>
    )
}

export default Projects
