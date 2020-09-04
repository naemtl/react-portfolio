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

  
  @media (max-width: 740px) {
    width: 100%;
    border: none
  }

  @media (min-width: 740px) {
    display: none;
  }
  
  .navbar-item {
    font-size: 2rem;
    text-transform: lowercase;
    margin: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    /* color: ${({ theme }) => theme.primaryDark}; */
    color: #000;
    text-decoration: underline;
    .icon {
      font-size: 3rem;
      text-decoration: none;
      &:hover {
        color: #707070;
      }
    }
    
    @media (max-width: 740px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      /* color: ${({ theme }) => theme.primaryHover}; */
      color: #707070;
    }
  }
`;

const RightNav = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link onClick={() => setOpen(!open)} to='/profile' className="navbar-item">Profile</Link>
      <Link onClick={() => setOpen(!open)} to='/' className="navbar-item">Projects</Link>
      <Link onClick={() => setOpen(!open)} to='/contact' className="navbar-item">Contact</Link>
      <a href='https://github.com/naemtl/' onClick={() => setOpen(!open)} className="navbar-item">
        <FaGithubSquare className="icon" />
      </a>
      <a href='https://www.linkedin.com/in/matthewstinis/' onClick={() => setOpen(!open)} className="navbar-item">
        <FaLinkedin className="icon" />
      </a>
    </StyledMenu>
  )
}

RightNav.propTypes = {
  open: bool.isRequired,
}

export default RightNav
