import styled, {keyframes} from "styled-components";
import {FaSearch} from "react-icons/fa";

import {BiLoaderAlt} from "react-icons/bi";
import { Link } from "react-router-dom";



export const SearchComponent = styled.form`
 
    height: 30px;
    width: 200px;
    position: relative;
    border-radius:5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    @media (max-width: 460px) {
    width: 135px;
  } 

  @media (max-width: 300px) {
    width: 120px;
    height: 20px;
  } 
`;

export const SearchInput = styled.input`
    outline: none;
    box-shadow:0000;
    border: none;
    height: 100%;
    width: 85%;
`;

export const IconSearch = styled(FaSearch)`
    font-size: 25px;

    @media (max-width: 460px) {
        font-size: 20px;
  } 

  @media (max-width: 300px) {
    font-size: 15px;
  } 
`;

const loading = keyframes`

	0% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}

`

export const IconLoader = styled(BiLoaderAlt) `
 font-size:25px;

 animation-name: ${loading};
 animation-duration: 2s;
 animation-iteration-count: infinite;
 animation-direction:linear;

@media (max-width: 460px) {
    font-size: 20px;
} 

@media (max-width: 300px) {
font-size: 15px;
} 

`;


export const SearchResultsContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 10px;
  position: absolute;
  top: 105%;
  z-index: 100;
  display: ${({d})=> d && !d.showResults?"none":"flex"};
  flex-direction: column;
  align-items: center;
  background-color: #ffff;
justify-content: space-around;
gap: 10px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const SearchResultTitle = styled.span`
  font-weight: bold;
  font-size: 1.3rem;
`

export const SearchResultsSubContainer = styled.div`
  width: 90%;
  height: 150px;
  display: flex;
flex-direction:column;
justify-content: space-around;
align-items: center;
 
`

export const ListSearchResults = styled.ul`
width: 100%;
height: 80%;
display: flex;
flex-direction:column;
gap: 3px;
  
`
export const ListSearchItem = styled.li`
  width: 100%;
  height: 100%;
  list-style: none;
  text-decoration:none;
`
export const SearchItemLink = styled(Link)`
  width: 100%;
  height: 20px;
color: gray;
font-weight:bold;
  list-style: none;
  text-decoration:none;
  text-align: left;
`

export const Line = styled.hr`
  width: 90%;
  color: black;
  height: 2px;
  font-size:4px;
  display: block;
`

