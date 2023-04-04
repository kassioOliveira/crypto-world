import styled, { css } from "styled-components";


export const DateTimeContainer = styled.div`
    width:93%;
    height:500px;
    margin:0 auto;
    margin-top:30px;
    margin-bottom:70px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const DateTimeBox = styled.div`
    width:100%;
    height:${({h}) => h? h: "350px"};


    ${({top}) => top && (css`
        display:flex;
        justify-content:space-around;
        align-items:center;

        @media (max-width:300px){
        flex-direction:column;
    
    }
    `)}
`

export const DateTimeLogo = styled.img`

@media (max-width:370px){
        width:40px;
    }
    
`

export const ContainerButtons = styled.div`
    width:230px;
    height:50px;
    display:flex;
    justify-content:end;
    align-items:center;

    @media (max-width:370px){
        width:200px;
    }

    @media (max-width:300px){
        width:100%;
        justify-content:space-around;
    }
`

export const ButtonHistory = styled.button`
    padding: 0 5px;
    height:30px;
    cursor:pointer;
    margin-right:5px;
    background:blue;
    color:#ffff;
    border:none;
    border-radius:5px;

    @media (max-width:370px){
        padding:0 4px;
        font-size:.7rem;
    }

`