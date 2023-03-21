import React, { useEffect } from 'react'
import { GeralMarket } from '../../shared/components/MarketInfo/GeralMarket/GeralMarket'
import { LayoutBase } from '../../shared/layouts/LayoutBase/Layout'
import { AssetsService } from '../../shared/services/api/assets/AssetsService';
import { MarketService } from '../../shared/services/api/markets/MarketsService';

export const Dashboard = () => {

  useEffect(() => {

    MarketService.getAll()
    .then(response => console.log(response))
    .catch(error => console.log(error))

  },[]);

  return (
    <LayoutBase>
      <GeralMarket>
        
      </GeralMarket>
    </LayoutBase>
  )
}
