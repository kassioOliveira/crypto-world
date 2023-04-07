
import styled, {css} from "styled-components";
import { Link } from "react-router-dom";


export const DetailsOnTheExchangeContainer = styled.section`
width:100%;
height:300px;
display:flex;
align-items:center;
color:#ffff;
background-image: linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%);

@media (max-width: 768px) {
display:flex;
height:400px;
flex-direction:column;
justify-content:space-around;

}
`


export const DetailsBox = styled.article`
    height:90%;
    width:90%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    gap: 10px;

    @media (max-width: 768px) {
    height:45%;
    
  }
`

export const DetailsSubBox = styled.div`
    width:${({w}) => w? w:"40%"};
    height:${({h}) => h? h: "50%"};
    display:flex;
    flex-direction:column;
    justify-content:${({d}) => d ? d : "space-evenly"};
    align-items:center;

    @media (max-width:780px){
        width:35%;
        height:${({h}) => h? h: "60%"};
    }

    @media (max-width:300px){
        align-items: center;
        width:50%;
        height:${({h}) => h? h: "60%"};
    }

`

export const  InnerTitle = styled.span`
font-weight:initial;
font-size:1.5rem;
@media (max-width:300px){
        font-size:1rem;
    }
`

export const InnerData = styled.span`
font-weight:bold;
font-size:1.3rem;
@media (max-width:300px){
        font-size:1rem;
    }
`



export const DetailsTitle = styled.h1`
font-size:1.7rem;


@media (max-width:368px){
        font-size:1.2rem;
    }
    
`



export const SubContainerDetails = styled.div`
    width:100%;
    height:40%;
    display:flex;
    justify-content:space-around;
   

`
export const SubContainerSubBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    gap:5px;

    
    
`

export const CurrencyPairs = styled.span`
 font-size:1.4rem;
font-weight:bold;
color:#ffff;
    @media (max-width:300px){
        font-size:1rem;
    }

`


export const Rank = styled.div `
    width:75px;
    height:60%;
    border-radius: 5px;
    background: #0ac00a;
    color:#ffff;
    
    font-weight:bold;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    font-style:Uppercase;
`

export const InnerContainerRank = styled.span`
    font-size:15;
    ${({n}) => n && (css`
     font-size:35px;
    `)}
    text-transform:uppercase;
`

export const LinkDetails = styled(Link)`

text-decoration:none;
color:#fff;
padding:5px 15px;
border-radius:5px;
background: #0ac00a;
font-weight:bold;

@media (max-width:300px){
        font-size:1rem;
    }
    
`