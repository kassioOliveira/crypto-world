"use client";

import React, { useEffect, useState } from 'react'
import { LayoutBase } from '../../shared/layouts/LayoutBase/Layout'
import {  useParams, useNavigate } from 'react-router-dom'
import { DetailsOnTheMarket } from '../../shared/components/MarketInfo/DetailsOnTheMarket/DetailsOnTheMarket';
import { AssetsService } from '../../shared/services/api/assets/AssetsService';
import { ExchangesService } from '../../shared/services/api/exchanges/ExchangesService';
import Table from '../../shared/components/Table/Table';
import { AreaDateTimeChart } from '../../shared/components/Charts/AreaDateTimeChart/AreaDateTimeChart';

import { ErrorBoundary} from "react-error-boundary";
import { ErrorPage } from '../../shared/components/Fallback/ErrorPage';



export const CurrencyDetail = () => {

  const { id } = useParams();
  const navigate = useNavigate();



  const [details, setDetails] = useState({});
  const [data, setData] = useState([]);
  const [exchanges, setExchanges] = useState([]);
  const [errorHandler,setErrorHandler] = useState({});


  const titles = [{ title: "Rank", w: false, }, { title: "Nome", w: "150px" }, { title: "Pares de Negociação", w: false }
    , { title: "Volume (24h)", w: false }, { title: "Alteração (24h)", w: false }];

  const titleColumnsRemoveResizing = ["Rank", "Alteração (24h)"];

  useEffect(() => {

    if (!id) {
      navigate('/');
      return;
    }

    AssetsService.getById(id).then(async (response) => {

      if(!response.data){
       throw new Error(response.message);
      }

      const firstResponse = response.data;

      const historyId = firstResponse.id;

      const { data } = await AssetsService.getHistoryById(historyId);

      const historyData = data.map((item) => [item.time, Number(item.priceUsd.toLocaleString('pt-BR')).toFixed(2)])

      setDetails(firstResponse);
      setData(historyData);
      setErrorHandler({});


    }).catch((error) => {
      if(error.message){
        setErrorHandler({message:error.message});
        return;
      }
      setErrorHandler({message:"Ops, Algo deu errado."})

    });



  }, [id,navigate]);

  useEffect(() => {
    ExchangesService.getAll().then(res => setExchanges(res.data))
      .catch(error => {
        // console.log(error)

      })
  }, [navigate]);


  if(errorHandler.message){
    return (<LayoutBase>
      <ErrorPage error={errorHandler}/>
    </LayoutBase>)
  }


  return (
    <LayoutBase>

        <ErrorBoundary fallback={<ErrorPage />} onError={(err) => console.log(err)}>


        <DetailsOnTheMarket data={details} />

        <AreaDateTimeChart serie={data} logo={details} />

        <Table isExchanges data={exchanges.sort((a, b) => a.rank - b.rank)}
          columnsTitles={titles}
          columnsNotToRemoveWhenResizing={titleColumnsRemoveResizing}
          totalRecords={73} recordsPerPage={10} />


      </ErrorBoundary>


    </LayoutBase>
  )
}
