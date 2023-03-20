import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import styled from "styled-components";


export const HeaderComponent = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ffff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const Logo = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    font-weight:bold;
    color: #a16ce7;
    @media (max-width: 300px) {
    font-size: 1rem;
  } 
`

export const NavComponent = styled.nav`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content:center;
    gap: 30px;
    align-items: center;
   @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled(Link)`
    color: black;
    text-decoration:none;
    font-size:1.2rem;
`;



export const IconBar = styled(FaBars)`
   display: none;
   @media (max-width: 768px) {
    display: initial;
  }
`;