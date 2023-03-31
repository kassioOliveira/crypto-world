import React from 'react'
import { LogoTop5, Top5Container, TopMarketContainer, TopMarketTitle } from './TopMarketStyle'

export const TopMarket = ({data}) => {
  return (
    <TopMarketContainer>
        <TopMarketTitle>
            Top °5 Cryptos
        </TopMarketTitle>

        <Top5Container>
            {
                data && (
                    data?.map((item,index) => (<LogoTop5 key={index} src={`https://assets.coincap.io/assets/icons/${item.baseSymbol.toLowerCase()}@2x.png`}/>))
                )
            }

        </Top5Container>

    </TopMarketContainer>
  )
}
