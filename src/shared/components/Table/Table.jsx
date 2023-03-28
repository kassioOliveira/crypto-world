import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimension";

import { LinkToDetails, Logo, NavPagination, PaginationComponet, TableBody, TableContainer, TableFooter, TableRow, TD, TH, THead } from "./TableStyle";

export default ({isCurrency,showPagination, data, columnsTitles,columnsNotToRemoveWhenResizing,
   handlePageClick,totalRecords,recordsPerPage }) => (

  <Table isCurrency={isCurrency} showPagination={showPagination} data={data} titles={columnsTitles}
   titleToRemove={columnsNotToRemoveWhenResizing} handlePageClick={handlePageClick}
   totalRecords={totalRecords}  recordsPerPage={recordsPerPage} />
);

const Table = ({isCurrency, showPagination, data, titles,titleToRemove, handlePageClick,totalRecords,recordsPerPage }) => {


  const nPages = Math.ceil(Number(totalRecords) / Number(recordsPerPage));

  const { width } = useWindowDimensions();


  const formatCash = (number) => {
    let n;
    if (!isNaN(number)) {
      n = Number(number)
    }

    if (n < 1e3) return (n).toLocaleString('pt-br');
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  };

  const formatPercentage = (value) => {
    return parseFloat(value).toFixed(2) + "%";
  }

  const formatString = (str) => {
    return str.toString().charAt(0).toUpperCase() + str.substr(1);
  }

  return (
    <TableContainer cellSpacing={"0"} >

      <THead>
        <TableRow w>
          {width > 500 ? (titles?.map((item, index) => <TH w={item.w} key={index}>{item.title}</TH>)
          ) : (titles?.filter((t)=> !titleToRemove.includes(t.title) ).map((item, index) => <TH w={item.w} key={index}>{item.title}</TH>))}
        </TableRow>
      </THead>
      <TableBody>
        {
          data && (
            data?.map((item, index) => (

              <TableRow key={index}>

                {width > 500 && (<TD>{item.rank}</TD>)}

                <TD>

                  <LinkToDetails to={`/details/${item.id}`}>

                   {isCurrency && (
                     <Logo src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`} />
                   )}
                    {formatString(item.id)}

                  </LinkToDetails>

                </TD>
                <TD>{formatCash(Number(item.priceUsd))}</TD>
                {width > 500 && (<TD>{formatCash(item.marketCapUsd)}</TD>)}
                {width > 500 && (<TD >{formatCash(item.volumeUsd24Hr)}</TD>)}
                <TD>{formatPercentage(Number(item.changePercent24Hr))}</TD>

              </TableRow>

            ))
          )
        }

      </TableBody>
      {showPagination && (
        <TableFooter>
          <TableRow>
            <TD colSpan={6} w={true}>

              <NavPagination>

                <PaginationComponet

                  breakLabel="..."
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={nPages}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}

                />
              </NavPagination>
            </TD>
          </TableRow>
        </TableFooter>
      )}
    </TableContainer>
  )
}


