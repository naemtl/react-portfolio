import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import projectData from "../../utils/project-data";

const Projects = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(projectData);
    }, [])

    const projectList = projects => {
        return projects.map(project => {
            console.log('in projects component', project);
            return (
                <div className="projects-single-listing" key={project.tag}>
                    <Link to={
                        {
                            pathname: `/projects/${project.tag}`,
                            state: {
                                project
                            }

                        }
                    }>
                        <h3>{project.title}</h3>
                        <div className="projects-single-listing-image">
                            <img src={project.imgUrl} alt="Project screenshot" />
                        </div>
                    </Link>
                </div>
            )
        });
    }

    return (
        <div className='projects-container'>
            <div className='projects-container-inner'>
                {projectList(data)}
            </div>
        </div>
    )
}

export default Projects
