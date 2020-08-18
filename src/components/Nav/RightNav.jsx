import React from 'react'
import { Link } from "react-router-dom";
import { bool } from 'prop-types';

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import styled from 'styled-components';

// const NavDiv = styled.div`
//     display: flex;
//     flex-flow: row nowrap;

//     .navbar-item {
//         padding: 0px 10px;
//         display: flex;
//         align-items: center;
//     }

//     @media (max-width: 768px) {
//         flex-flow: column nowrap;
//         position: fixed;
//         transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
//         top: 0;
//         right: 0;
//         background-color: #fff;
//         height: 100vh;
//         width: 300px;
//         padding-top: 3.5rem;
//         transition: transform 0.3s ease-in-out;

//         .navbar-item {
//             padding: 18px 10px
//         }
//     }
// `

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: grey;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};

  
  @media (max-width: 768px) {
    width: 100%;
  }

  .navbar-item {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    /* color: ${({ theme }) => theme.primaryDark}; */
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      /* color: ${({ theme }) => theme.primaryHover}; */
      color: blue;
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
        <FaGithubSquare />
      </Link>
      <Link onClick={() => setOpen(!open)} to='/' className="navbar-item">
        <FaLinkedin />
      </Link>
    </StyledMenu>
  )
}

RightNav.propTypes = {
  open: bool.isRequired,
}

export default RightNav
