import styled, { css } from "styled-components";

export const PainelContainer = styled.div `
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
 

`

export const Box = styled.div`
    width: 90%;
    height: 350px;
    margin:10px 0;

    ${({flex}) => flex && (css`
        display:flex;
        justify-content:space-between;

        @media (max-width:600px) {
            flex-direction:column;
            align-items:center;
        }
    `)}
    
  
    
`

export const SubBox = styled.div`
    width:50%;
    height:350px;
    margin:10px 0;

    @media (max-width:600px) {
        width:90%;
        }
    
`