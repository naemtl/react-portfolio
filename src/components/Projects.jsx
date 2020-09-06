import React, { useState, useEffect } from 'react';
import projectData from "../project-data";

const Projects = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(projectData);
    }, [])

    console.log(data);

    return (
        <div>

        </div>
    )
}

export default Projects
