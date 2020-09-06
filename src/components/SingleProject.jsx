import React from "react";

const SingleProject = ({ location }) => {
    const { project } = location.state
    return (
        <div>
            <div>{project.title}</div>
            <div>{project.desc}</div>
        </div>
    )
}

export default SingleProject;