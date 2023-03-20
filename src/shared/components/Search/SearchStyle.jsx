import styled, {keyframes} from "styled-components";
import {FaSearch} from "react-icons/fa";

import {BiLoaderAlt} from "react-icons/bi";



export const SearchComponent = styled.form`
 
    height: 30px;
    width: 200px;
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

