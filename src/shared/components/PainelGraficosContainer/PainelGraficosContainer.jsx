import React, { useEffect, useState } from 'react'
import { Box, PainelContainer, SubBox } from './PainelGraficosContainerStyle';

import { AssetsService } from '../../services/api/assets/AssetsService';
import { AreaChart } from '../Charts/AreaChart';
import { BarChart } from '../Charts/BarChart';
import { RadialBarChart } from '../Charts/RadialBarChart';



export const PainelGraficosContainer = ({}) => {

    const [topFive,setTopFive] = useState([]);
    const [data,Setdata] = useState([]);


    useEffect(() => {

         AssetsService.getAll(0,5).then( async(res)=> {

          const dataResponse = res.data;
 
          const historyData = await  AssetsService.getTop5HistoryById(dataResponse[0].id,
            dataResponse[1].id,dataResponse[2].id,dataResponse[3].id,dataResponse[4].id);

         const formattedData = historyData.map((arr,index)=>{

          const prices = arr.data.data.map((item) => Number(item.priceUsd.toLocaleString('pt-BR')).toFixed(2))

          const dates = arr.data.data.map((item)=> {
            return item.date;
          });

          return {name:dataResponse[index].id,prices:prices,dates:dates};
         })

         Setdata(formattedData)

         setTopFive(dataResponse);


         }).catch((error) => alert(error));
        

    },[]);


  return (
    <PainelContainer>
      <Box>
        <AreaChart data={data} />
      </Box>

      <Box flex>

      <SubBox>
      <RadialBarChart data={topFive}/>
      </SubBox>

      <SubBox>
      <BarChart data={topFive}/>
      </SubBox>

      </Box>

      
      
    </PainelContainer>
  )
}
