const SingleProject = ({ location }) => {
    const { project } = location.state
    return (
        <div className="single-project-container">
            <div className="single-project-content">
                <div className="single-project-image">
                    <img src={project.imgUrl} alt="project screenshot"/>
                </div>
                <div className="single-project-info">
                    <h2>{project.title}</h2>
                    <div>{project.desc}</div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject;