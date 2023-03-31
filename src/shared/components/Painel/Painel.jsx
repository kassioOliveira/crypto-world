import React, { useEffect, useState } from 'react'
import { Box, PainelContainer } from './PainelStyle'

import { MarketService } from '../../services/api/markets/MarketsService';
import { AssetsService } from '../../services/api/assets/AssetsService';



export const Painel = () => {

    const [topFive,setTopFive] = useState([]);
    const [market,setMarket] = useState([]);

    const [historyPrice,setHistoryPrice] = useState([]);
    const [historyDate,setHistoryDate] = useState([]);



    useEffect(() => {

         MarketService.getAll(5).then( async(res)=> {

          const data = res.data;
 
          const historyData = await  AssetsService.getTop5HistoryById(data[0].baseId,
         data[1].baseId,data[2].baseId,data[3].baseId,data[4].baseId);

         const formattedData = historyData.map((arr)=>{

          const arrPrice = arr.data.data.map((item) => Number(item.priceUsd).toFixed(2))

          const arrDate = arr.data.data.map((item)=> {
            return item.date;
          });

          return [arrPrice,arrDate];
         })

         setTopFive(data);


         setHistoryPrice([
          formattedData[0][0],
          formattedData[1][0],
          formattedData[2][0],
          formattedData[3][0],
          formattedData[4][0],
         ])

         setHistoryDate([
          ...formattedData[0][1],
          ...formattedData[1][1],
          ...formattedData[2][1],
          ...formattedData[3][1],
          ...formattedData[4][1],
         
         ])

         }).catch((error) => alert(error));
        

    },[]);

  return (
    <PainelContainer>
      
    </PainelContainer>
  )
}
