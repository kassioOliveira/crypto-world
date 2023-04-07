import styled from "styled-components";
import {CgSmileSad} from "react-icons/cg";
import { Link } from "react-router-dom";

export const ErrorContainer = styled.div`

    width:60%;
    height:250px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom:0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius:5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media (max-width:300px) {
    height: 150px;

}
`

export const ErrorSubContainer = styled.div`
width: 100%;
height: 50%;
display: flex;
flex-direction:column;
justify-content: space-around;
align-items: center;
 margin: auto 0; 
 @media (max-width:300px) {
    height: 100%;
}
`

export const IconSmileSad = styled(CgSmileSad)`
font-size:50px;
@media (max-width:300px) {
    font-size: 35px;
}

`

export const ErrorTitle = styled.h1`
font-size: 1.4rem;
color: red;

@media (max-width:300px) {
    font-size: 1rem;
}
`

export const ErrorSubTitle = styled.h2`
font-size: 1.4rem;
color: gray;

@media (max-width:300px) {
    font-size: 1rem;
}
`

export const ErrorLink = styled(Link)`
text-decoration:none;
color: none;
    
`

export const SubMessage = styled.span`
display: block;
padding: 5px;
border-radius:5px;

    font-size: .9rem;
    font-weight:bold;
    color:gray;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

`