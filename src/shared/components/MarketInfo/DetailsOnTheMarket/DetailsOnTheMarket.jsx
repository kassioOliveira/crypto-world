import React from "react";
import { ChangePercent24Hr, CurrencyPrice, DetailsBox, DetailsOnTheMarketDetailsContainer, DetailsSubBox, DetailsTitle, IconArrownDownDetails, IconArrownUpDetails, InnerContainerRank, InnerData, InnerTitle, LinkDetails, Rank, SubContainerPrice, SubContainerSubBox } from './DetailsOnTheMarketStyle'

export const DetailsOnTheMarket = ({data}) => {

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

  const formatString = (str) => {
    return str.toString().charAt(0).toUpperCase() + str.substr(1);
  }

  const percent = parseFloat(data.changePercent24Hr).toFixed(2);
  const isPositive = Math.sign(percent);
  
  return (

      <DetailsOnTheMarketDetailsContainer>
      <DetailsBox>

        <Rank>
          <InnerContainerRank n>
          {data.rank}
          </InnerContainerRank>

          <InnerContainerRank>
            rank
          </InnerContainerRank>
        </Rank>

        <DetailsSubBox w={"60%"}>
          <DetailsTitle>

            {`${formatString(data.id)} (${data.symbol})`}

          </DetailsTitle>

          <SubContainerPrice>
            <CurrencyPrice>
              {Number(data.priceUsd).toLocaleString(`pt-BR`)}
            </CurrencyPrice>

            <ChangePercent24Hr c={{isPositive}}>

              {`${percent} %`}
              {
               Math.sign(percent) === 1  || 0?(<IconArrownUpDetails c={{isPositive}}/>):( <IconArrownDownDetails c={{isPositive}}/>)
              }
            </ChangePercent24Hr>
          </SubContainerPrice>

        </DetailsSubBox>

      </DetailsBox>

      <DetailsBox>
        <DetailsSubBox d={"space-between"} >
          <SubContainerSubBox>
            <InnerTitle>
            Capitalização
            </InnerTitle>
            <InnerData>
              {formatCash(Number(data.marketCapUsd))}
            </InnerData>
          </SubContainerSubBox>

          <SubContainerSubBox>
            <InnerTitle>
            Fornecer
            </InnerTitle>
            <InnerData>
              {formatCash(Number(data.supply))}
            </InnerData>
          </SubContainerSubBox>


        </DetailsSubBox>

        <DetailsSubBox d={"space-between"}>

        <SubContainerSubBox>
        <InnerTitle>
            Volume (24Hr)
            </InnerTitle>
            <InnerData>
              {formatCash(Number(data.volumeUsd24Hr))}
            </InnerData>
        </SubContainerSubBox>
        <LinkDetails target='_blank'  to={`${data.explorer}`}>
        Explorar
        </LinkDetails>

        </DetailsSubBox>

        
        
      </DetailsBox>
    </DetailsOnTheMarketDetailsContainer>

  )
}
