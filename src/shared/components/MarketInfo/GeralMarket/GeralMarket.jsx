

import React, { useEffect, useState } from 'react';
import { useAppMenuContext } from '../../../contexts/MenuContext';
import { AssetsService } from '../../../services/api/assets/AssetsService';
import { ExchangesService } from '../../../services/api/exchanges/ExchangesService';
import { MarketService } from '../../../services/api/markets/MarketsService';

import { MarketContainer, MarketDataBox, MarketDataValue, MarketSubHeader, RankContainer } from '../../../styles/StylesComponents'

import { GeralMarketBox, GeralMarketHeader, IconArrownDown, IconArrownUp, MarketHeaderTitle } from './GeralMarketStyle';


export const GeralMarket = () => {

    const {dropDownMarketOverview,handleDropDownMarketOverview} = useAppMenuContext();

    const [market,setMarket] = useState([]);
    const [assets,setAssets] = useState([]);
    const [exchanges,setExchanges] = useState([]);


    useEffect(() => {

        AssetsService.getAll()
            .then(response => {
                setAssets(response.data);
            })
            .catch(error => alert(error.message))

            MarketService.getAll()
            .then(response => {
                setMarket(response.data);
            })
            .catch(error => alert(error.message))

            ExchangesService.getAll()
            .then(response => {
                setExchanges(response.data);
            })
            .catch(error => alert(error.message))

           
            .catch(error => alert(error.message))

    }, []);
    
    const formatCash = (n) => {

        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
    };


    const calcArray = (array) => {
        return array.reduce((some,i) => some + i);
    }


    const marketCapValue = (array) => {

        const pricesUsd = array.map(m => Number(m.marketCapUsd))
    
        const value = calcArray(pricesUsd);
    
        return formatCash(value);
    
    };


    const exChangeVolume = (array)=> {
        const pricesUsd = array.map(m => Number(m.volumeUsd24Hr));
    
        const value = calcArray(pricesUsd)

        return formatCash(value);
    }
   

    const formatPercentage = (value)=> parseFloat(value.percentExchangeVolume).toFixed(2)+"%";


    return (
        <MarketContainer h={dropDownMarketOverview} >
            <GeralMarketHeader>
                    <MarketHeaderTitle>
                        Visão geral de mercado
                    </MarketHeaderTitle>
                    {!dropDownMarketOverview && (<IconArrownDown onClick={handleDropDownMarketOverview}/>)}
                    {dropDownMarketOverview && (<IconArrownUp onClick={handleDropDownMarketOverview}/>)}
                </GeralMarketHeader>
            <GeralMarketBox>

                <MarketDataBox>
                    <MarketSubHeader>Valor de mercado</MarketSubHeader>
                    <MarketDataValue>
                        ${assets.length && (marketCapValue(assets))}
                    </MarketDataValue>
                </MarketDataBox>

                <MarketDataBox>
                    <MarketSubHeader>Transacionado</MarketSubHeader>
                    <MarketDataValue>
                        ${assets.length && (exChangeVolume(assets))}
                    </MarketDataValue>
                </MarketDataBox>

                <MarketDataBox>
                    <MarketSubHeader>Corretoras</MarketSubHeader>
                    <MarketDataValue>
                        {exchanges?.length}
                    </MarketDataValue>
                </MarketDataBox>

                <MarketDataBox>
                    <MarketSubHeader>Mercados</MarketSubHeader>
                    <MarketDataValue>
                        {market?.length}
                    </MarketDataValue>
                </MarketDataBox>

                <MarketDataBox>
                    <MarketSubHeader>Assets</MarketSubHeader>
                    <MarketDataValue>
                        {assets?.length}
                    </MarketDataValue>
                </MarketDataBox>

                <MarketDataBox>
                    <MarketSubHeader>BTC Dom Index</MarketSubHeader>
                    <MarketDataValue>
                        {market.length && (formatPercentage(market[0]))}
                    </MarketDataValue>
                </MarketDataBox>

            </GeralMarketBox>

        </MarketContainer>
    )
}
