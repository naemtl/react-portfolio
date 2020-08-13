import React from 'react';
import RightNav from "./RightNav";
import { Link } from "react-router-dom";

import styled from 'styled-components';

const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px 15px;
    border-bottom: 1px solid black;
    position: fixed;
    top: 0;
    z-index: 999;
    background: #fff;

    .navbar-logo {
        color: black;
        font-weight: 700;
        font-size: 2rem;
        display: flex; 
        align-items: center;
    }
    
    .navbar-inner-left {
        display: flex;
    }
`

const Navbar = () => {
    return (
        <Nav className="navbar-container">
            <div className="navbar-inner-left">
                <Link to='/' className="navbar-logo">Matthew's Portfolio</Link>
            </div>
            <RightNav />
        </Nav>
    )
}

export default Navbar
