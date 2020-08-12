import React from 'react';
import { Link } from "react-router-dom";

import '../styles/navbar.css'

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-inner-left">
                <Link to='/' className="navbar-logo">Matthew's Portfolio</Link>
            </div>
            <div className="navbar-inner-right">
                <Link to='/' className="">Resume</Link>
                <Link to='/' className="">Portfolio</Link>
                <Link to='/' className="">Contact</Link>
                <Link to='/' className="">Github</Link>
                <Link to='/' className="">LinkedIn</Link>
            </div>
        </div>
    )
}

export default Navbar
