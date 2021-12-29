import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-container-inner'>
                <header className='profile-header'>
                    <h2>A little bit about me...</h2>
                </header>
                <div className='profile-bio'>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nulla hic quo provident, possimus quod, ab itaque qui ex mollitia quae consectetur labore eligendi quos molestias placeat voluptas animi minima?
                    </p>
                    <p>
                        If you're interested in working together, you can reach me <Link to='/contact' className='profile-link'>here</Link> or email me directly at <span className='profile-link'>this</span> address.
                    </p>
                </div>
                <div className='profile-skills'>
                    <h4>Skills</h4>
                    <ul className='profile-skills-list'>
                        <li className='profile-skills-list-item'>
                            <span className='profile-skills-item-title'>Frontend: </span>
                            <span className='profile-skills-item-content'>
                                HTML5, CSS3/SASS, JavaScript (ES6) – React + Redux, Shopify Liquid
                            </span>
                        </li>
                        <li className='profile-skills-list-item'>
                            <span className='profile-skills-item-title'>Backend: </span>
                            <span className='profile-skills-item-content'>
                                Node.js, Express, MongoDB, SQL, Bash
                            </span>
                        </li>
                        <li className='profile-skills-list-item'>
                            <span className='profile-skills-item-title'>Tools: </span>
                            <span className='profile-skills-item-content'>
                                Git, Yarn, NPM, JSON, Wordpress, Postman, Photoshop, VS Code
                            </span>
                        </li>
                        <li className='profile-skills-list-item'>
                            <span className='profile-skills-item-title'>Currently learning: </span>
                            <span className='profile-skills-item-content'>
                                AWS, Enzyme/Jest/React Testing Library
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='profile-resume-container'>
                    <div>Get a copy of my <a  className='profile-link' href="#">resume</a></div>
                </div>
            </div>
        </div>
    )
}

export default Profile
