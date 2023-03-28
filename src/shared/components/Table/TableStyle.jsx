import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import ReactPaginate from 'react-paginate';


export const TH = styled.th`
    text-align: ${({w})=> w?"left":'center'};
    width: ${({w})=> w?"170px":'initial'};
    margin-left:${({w})=> w?"10px":'initial'};
    padding: 10px;

    @media (max-width:500px) {
      width: ${({w})=> w?"250px":'initial'};
      font-size:1rem;
    }

    @media (max-width:500px) {
      width: ${({w})=> w?"250px":'initial'};
      font-size:.8rem;
    }

 
    

`
export const TableRow = styled.tr`
 
text-align: center;

height: 45px;
  ${({w}) => w && (css`
  background-color:#eceff1;
  
  `)}

`;


export const TableContainer = styled.table`
    width: 90%;
    margin: 10px auto;
   
    background-color: #ffff;
    
     border-color: gray;
    z-index: 50;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    @media (max-width: 768px) {
    position: initial;
    margin-top:10px;
    margin-bottom:10px;
   // margin:0;
    width: 90%;
    
  }  
  
  @media (max-width: 500px) {
    width: 100%;
    
  } 
`;

export const THead = styled.thead`
 color: gray;
`;




export const TD = styled.td`
    font-size: .8rem;
   border-bottom:1px solid #eceff1;
`


export const TableBody = styled.tbody`
    border: 1px solid black;
`;

export const TableFooter = styled.tfoot`
    border: 1px solid black;
`;

export const Logo = styled.img`
   width: 30px;
   @media (max-width: 500px) {
    width: 20px;
    
  } 
`

export const LinkToDetails = styled(Link)`
   text-decoration:none;
   color: black;
   width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    gap: 10px;
    align-items: center;
    padding: 5px;
    margin-left:5px;
    @media (max-width: 500px) {
    padding: 1px;
    
  } 
`;

export const NavPagination = styled.nav`
 
  width: 80%;
  height: 100%;
  margin: 0 auto;

  @media (max-width:500px) {
      width: 95%;
      font-size:.8rem;
    }
`

export const PaginationComponet = styled(ReactPaginate).attrs({
  
  breakClassName: "break-me",
  activeClassName: "active",


  
})`
  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;

   a{
    cursor: pointer;
   }
  
  .break-me {
    cursor: pointer;
  }
  .active {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
`
