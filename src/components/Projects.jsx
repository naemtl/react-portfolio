import React, { useState, useEffect } from 'react';
import projectData from "../project-data";

const Projects = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(projectData);
    }, [])

    const projectList = projects => {
        return projects.map(project => {
            return (
                <div>{project}</div>
            )
        });
    }

    return (
        <div>

        </div>
    )
}

export default Projects
