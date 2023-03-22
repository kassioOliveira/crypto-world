import styled from "styled-components";
import {RiArrowDownSFill,RiArrowUpSFill} from "react-icons/ri";


export const GeralMarketBox = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    align-items:center;
    justify-content: space-evenly;
    position: absolute;
    top: 0;
    overflow: hidden;
    @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3,230px);
    grid-template-columns: repeat(3,230px);
 
    
  }

  @media (max-width: 768px) {
    position: initial;
    display: flex;
    flex-direction:column;
    height: calc(100% - 50px);
    top: initial;
    align-items: center;
    
    
    
  }
`;

export const GeralMarketHeader = styled.div`
    
    display: none;
    @media (max-width: 768px) {
    display: initial;
    height: 40px;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    
  }
`

export const MarketHeaderTitle = styled.h2`
    font-size: 1.2rem;
`

export const IconArrownDown = styled(RiArrowDownSFill)`
font-size: 25px;
color: black;
cursor: pointer;
display: none;
@media (max-width: 768px) {
    display: initial;
    
  }
`

export const IconArrownUp = styled(RiArrowUpSFill)`
font-size: 25px;
color: black;
cursor: pointer;

display: none;
@media (max-width: 768px) {
    display: initial;
    
  }
`






