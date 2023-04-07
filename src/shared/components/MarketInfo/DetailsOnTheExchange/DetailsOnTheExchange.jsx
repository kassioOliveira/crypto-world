import React from 'react'
import {  CurrencyPairs, DetailsBox, DetailsOnTheExchangeContainer, DetailsSubBox, DetailsTitle, InnerContainerRank, InnerData, InnerTitle, LinkDetails, Rank,  SubContainerSubBox } from './DetailsOnTheExchangeStyle';

export const DetailsOnTheExchange = ({data}) => {

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


  return (
    <DetailsOnTheExchangeContainer>

<DetailsBox >

<Rank>
  <InnerContainerRank n>
  {data.rank}
  </InnerContainerRank>

  <InnerContainerRank>
    rank
  </InnerContainerRank>
</Rank>

<DetailsSubBox w={"60%"} >
  <DetailsTitle>

    {data.name}

  </DetailsTitle>

    <CurrencyPairs>
      {`Negociações ${data.tradingPairs} `} 
    </CurrencyPairs>


</DetailsSubBox>

</DetailsBox>

<DetailsBox>
<DetailsSubBox >
  <SubContainerSubBox>
  <InnerTitle>
    Volume
    </InnerTitle>
    <InnerData>
    {data.volumeUsd?formatCash(Number(data.volumeUsd)):"0"}
    </InnerData>
  </SubContainerSubBox>

  <LinkDetails target='_blank'  to={`${data.exchangeUrl}`}>
Explorar
</LinkDetails>

</DetailsSubBox>

<DetailsSubBox >



    <InnerTitle>
    Capitalização no mercado
    </InnerTitle>
    <InnerData>
      {parseFloat(data.percentTotalVolume).toFixed(2) + "%"}
    </InnerData>

</DetailsSubBox>



</DetailsBox>

    </DetailsOnTheExchangeContainer>
  )
}
