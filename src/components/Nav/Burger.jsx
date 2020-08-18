import React from 'react';
import RightNav from "./RightNav";
import { bool, func } from 'prop-types';

import styled from "styled-components";

// const StyledBurger = styled.div`
//     width: 2rem;
//     height: 2rem;
//     position: fixed;
//     top: 32px;
//     right: 20px;
//     cursor: pointer;
//     z-index: 20;
//     display: none;

//     @media (max-width: 768px) {
//         display: flex;
//         justify-content: space-around;
//         flex-flow: column nowrap;
//     }

//     div {
//         width: 2rem;
//         height: 0.25rem;
//         background-color: ${({ open }) => open ? '#ccc' : '#333'};
//         border-radius: 10px;
//         transform-origin: 1px;
//         transition: all 0.3s linear;

//         &:nth-child(1) {
//             transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0deg)'};
//         }
//         &:nth-child(2) {
//             transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
//             opacity: ${({ open }) => open ? '0' : '1'};
//         }
//         &:nth-child(3) {
//             transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0deg)'};
//         }
//     }
// `;

const StyledBurger = styled.button`
  position: absolute;
  top: 32px;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? 'black' : 'black'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = ({ open, setOpen }) => {

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav open={open} setOpen={setOpen} />
        </>
    )
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Burger
