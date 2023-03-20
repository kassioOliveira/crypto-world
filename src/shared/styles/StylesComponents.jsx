import styled from "styled-components";


export const MarketContainer = styled.section`
    position: relative;
    width: 100%;
    height: 300px;
    background-color:#34bad5 ;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffff;
`;

export const MarketBox = styled.div`
    width: 45%;
    height: 100%;


`

export const MarketDataBox = styled.div`
    width: 150px;
    height: 60px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`
export const MarketSubHeader = styled.div`
font-size: 1.3rem;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
    
`

export const MarketDataValue = styled.span`
display: block;
    font-size: 1.2rem;
`