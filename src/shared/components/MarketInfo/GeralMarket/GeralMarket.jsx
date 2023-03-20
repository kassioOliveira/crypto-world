

import React from 'react'
import { MarketContainer, MarketDataBox, MarketDataValue, MarketSubHeader, RankContainer } from '../../../styles/StylesComponents'

import {  GeralMarketBox} from './GeralMarketStyle'

export const GeralMarket = () => {
  return (
    <MarketContainer>
        <GeralMarketBox>

            <MarketDataBox>
                <MarketSubHeader>Market Cap</MarketSubHeader>
                <MarketDataValue>
                    $1T
                </MarketDataValue>
            </MarketDataBox>

            <MarketDataBox>
                <MarketSubHeader>Exchange Vol</MarketSubHeader>
                <MarketDataValue>
                    $1892B
                </MarketDataValue>
            </MarketDataBox>

            <MarketDataBox>
                <MarketSubHeader>Exchanges</MarketSubHeader>
                <MarketDataValue>
                    73
                </MarketDataValue>
            </MarketDataBox>

            <MarketDataBox>
                <MarketSubHeader>Markets</MarketSubHeader>
                <MarketDataValue>
                    12,7892
                </MarketDataValue>
            </MarketDataBox>

            <MarketDataBox>
                <MarketSubHeader>Assets</MarketSubHeader>
                <MarketDataValue>
                    2,67378
                </MarketDataValue>
            </MarketDataBox>

            <MarketDataBox>
                <MarketSubHeader>BTC Dom Index</MarketSubHeader>
                <MarketDataValue>
                    40.5%
                </MarketDataValue>
            </MarketDataBox>

        </GeralMarketBox>
    </MarketContainer>
  )
}
