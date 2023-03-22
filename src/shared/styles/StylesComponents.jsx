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

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: space-around;
      height: ${({ h }) => h ? "350px" : "50px"} ;
      
  }
`;

export const MarketBox = styled.div`
    width: 45%;
    height: 100%;


`

export const MarketDataBox = styled.div`
    width: 180px;
    height: 70px;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;


   @media (max-width: 1024px) {
        width: 230px;
  }

    @media (max-width: 768px) {
        width: 230px;
        width: 95%;
        flex-direction: row;
        justify-content: space-between;
        height: 45px;
        border: none;
        border-bottom:1px solid gray;
  }

`
export const MarketSubHeader = styled.div`
font-size: .9rem;
text-transform:uppercase;
font-weight:bold;
width: 100%;
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 1024px) {
        font-size:1rem;
  }


@media (max-width: 768px) {
        font-size: .8rem;
    width: initial;
    justify-content: start;
  }
    
`

export const MarketDataValue = styled.span`
    display: block;
    font-size: 1.2rem;

`