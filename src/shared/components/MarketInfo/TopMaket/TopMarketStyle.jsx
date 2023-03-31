import styled from "styled-components";

export const TopMarketContainer = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
    background-image: linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;

    @media (max-width: 300px){
    height: 100px;
    }
`

export const TopMarketTitle = styled.h2`
font-size: 1.3rem;
`

export const Top5Container = styled.div`
    width: 90%;
    height: 60%;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const LogoTop5 = styled.img`
    width: 70px;
    height: 70px;

    @media (max-width: 300px){
        width: 30px;
    height: 30px;
    }
`