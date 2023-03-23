import { Link } from "react-router-dom";
import styled from "styled-components";

import {FaBitcoin} from "react-icons/fa";
import {RiArrowLeftRightFill} from "react-icons/ri";
import {BsGraphUp} from "react-icons/bs";


export const MenuContainer = styled.div`
    display: none;
    
    @media (max-width: 768px) {
    display: initial;
    height: 100%;
    transition: .5s all ease-out;
    width: ${({isOpen}) => isOpen? "30%": "0"} ;
    height: 100vh;
    position: absolute;
    z-index: 100;
    background-color:#ffff;
    display: flex;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    overflow: hidden;
  }

  @media (max-width:500px){
    width: 40%;
  }

  @media (max-width:300px){
    width: 50%;
  }

`;

export const MenuNav = styled.nav`
    transition:none;
    height: 60%;
    width: 90%;
    position: absolute;
    border-bottom: 1px solid gray;
    z-index: 100;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-evenly;
`

export const NavItem = styled(Link)`
    text-decoration:none;
    color: black;
    font-size: 1.3rem;
    display: flex;
    flex-direction:column;
    align-items: center;
    gap: 10px;
    @media (max-width:500px){
        font-size: 1.1rem;
  }
    @media (max-width:300px){
    font-size: 1rem;
  }
`

export const IconBitcoin = styled(FaBitcoin)`
font-size: 30px;
color: black;
`

export const IconArrowLeftRight = styled(RiArrowLeftRightFill)`
font-size: 30px;
color: black;
`
export const IconGraph = styled(BsGraphUp)`
font-size: 30px;
color: black;
`