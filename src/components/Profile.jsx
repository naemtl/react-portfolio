import React from 'react'

const Profile = () => {
    return (
        <div className='profile-container'>
            <header className='profile-header'>
                <h2>Matthew Stinis</h2>
                <div>
                    Contact: <span>mpstinis@gmail.com</span>
                </div>
            </header>
            <div className='profile-skills'>
                <h4>Skills</h4>
                <ul className='profile-skills-list'>
                    <li className='profile-skills-list-item'>Frontend</li>
                    <li className='profile-skills-list-item'>Backend</li>
                    <li className='profile-skills-list-item'>Tools</li>
                    <li className='profile-skills-list-item'>Currently learning</li>
                    <li className='profile-skills-list-item'>Spoken languages</li>
                </ul>
            </div>
            <div className='profile-resume-container'>
                <div>Get a copy of my <a href="#">resume</a></div>
            </div>
        </div>
    )
}

export default Profile
