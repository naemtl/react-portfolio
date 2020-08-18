import React from 'react'
import { Link } from "react-router-dom";
import { bool } from 'prop-types';

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import styled from 'styled-components';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  border-left: 1px solid black;
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};

  
  @media (max-width: 640px) {
    width: 100%;
    border: none
  }
  
  .navbar-item {
    font-size: 2rem;
    text-transform: lowercase;
    margin: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    /* color: ${({ theme }) => theme.primaryDark}; */
    color: #000;
    text-decoration: none;
    transition: color 0.3s linear;

    .icon {
      font-size: 3rem;
    }
    
    @media (max-width: 640px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      /* color: ${({ theme }) => theme.primaryHover}; */
      color: #4d4d4d;
    }
  }
`;

const RightNav = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link onClick={() => setOpen(!open)} to='/profile' className="navbar-item">Profile</Link>
      <Link onClick={() => setOpen(!open)} to='/' className="navbar-item">Projects</Link>
      <Link onClick={() => setOpen(!open)} to='/contact' className="navbar-item">Contact</Link>

      <Link onClick={() => setOpen(!open)} to='/' className="navbar-item">
        <FaGithubSquare className="icon" />
      </Link>
      <Link onClick={() => setOpen(!open)} to='/' className="navbar-item">
        <FaLinkedin className="icon" />
      </Link>

    </StyledMenu>
  )
}

RightNav.propTypes = {
  open: bool.isRequired,
}

export default RightNav
