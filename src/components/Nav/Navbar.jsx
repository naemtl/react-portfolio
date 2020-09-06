import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

import { useOnClickOutside } from '../../hooks';
import Burger from "./Burger";

import { bool, func } from 'prop-types';
import styled from 'styled-components';

const Nav = styled.nav`
    width: 100%;
    height: 95px;
    display: flex;
    justify-content: space-between;
    padding: 30px 15px;
    border-bottom: 1px solid black;
    position: fixed;
    top: 0;
    z-index: 999;
    background: #fff;

    .navbar-logo {
        color: #000000;
        font-weight: 700;
        font-size: 1.5rem;
        display: flex; 
        align-items: center;

        &:hover {
            color: #707070;
        }
    }
    
    .navbar-inner-left {
        display: flex;
    }

    .navbar-inner-right {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 420px;
        .navbar-item {
            display: flex; 
            align-items: center;
            font-size: 20px;
            text-transform: lowercase;
            font-weight: bold;
            /* color: ${({ theme }) => theme.primaryDark}; */
            color: #000;
            text-decoration: underline;
            &:hover {
                color: #707070;
            }
            .icon {
                font-size: 2rem;
                &:hover {
                    color: #707070;
                }
            }
        }

        @media (max-width: 740px) {
            display: none;
        }
    }
`

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    return (
        <Nav className="navbar-container" ref={node}>
            <div className="navbar-inner-left">
                <Link to='/' className="navbar-logo">Matthew's Portfolio</Link>
            </div>
            <Burger open={open} setOpen={setOpen} />
            <div className="navbar-inner-right">
                <Link to='/profile' className="navbar-item">Profile</Link>
                <Link to='/projects' className="navbar-item">Projects</Link>
                <Link to='/contact' className="navbar-item">Contact</Link>
                <a href='https://github.com/naemtl/' className="navbar-item">
                    <FaGithubSquare className="icon" />
                </a>
                <a href='https://www.linkedin.com/in/matthewstinis/' className="navbar-item">
                    <FaLinkedin className="icon" />
                </a>
            </div>
        </Nav>
    )
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Navbar
