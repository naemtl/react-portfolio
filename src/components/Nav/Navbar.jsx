import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";

import { useOnClickOutside } from '../../hooks';
import Burger from "./Burger";

import { bool, func } from 'prop-types';
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
        color: #000000;
        font-weight: 700;
        font-size: 2rem;
        display: flex; 
        align-items: center;

        &:hover {
            color: #4d4d4d;
        }
    }
    
    .navbar-inner-left {
        display: flex;
    }
`

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    return (
        <Nav onClick={() => open ? setOpen(!open) : null} className="navbar-container" ref={node}>
            <div className="navbar-inner-left">
                <Link to='/' className="navbar-logo">Matthew's Portfolio</Link>
            </div>
            <Burger open={open} setOpen={setOpen} />
        </Nav>
    )
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Navbar
