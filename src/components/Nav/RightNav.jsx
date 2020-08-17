import React from 'react'
import { Link } from "react-router-dom";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import styled from 'styled-components';

const NavDiv = styled.div`
    display: flex;
    flex-flow: row nowrap;

    .navbar-item {
        padding: 0px 10px;
        display: flex;
        align-items: center;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        position: fixed;
        top: 0;
        right: 0;
        background-color: #fff;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;

        .navbar-item {
            padding: 18px 10px
        }
    }
`

const RightNav = () => {
    return (
        <NavDiv>
            <Link to='/profile' className="navbar-item">Profile</Link>
            <Link to='/' className="navbar-item">Projects</Link>
            <Link to='/contact' className="navbar-item">Contact</Link>
            <Link to='/' className="navbar-item">
                <FaGithubSquare />
            </Link>
            <Link to='/' className="navbar-item">
                <FaLinkedin />
            </Link>
        </NavDiv>
    )
}

export default RightNav
