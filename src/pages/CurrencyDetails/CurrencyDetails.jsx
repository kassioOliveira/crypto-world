import React, { useEffect, useState } from 'react'
import { LayoutBase } from '../../shared/layouts/LayoutBase/Layout'
import { Navigate, useParams } from 'react-router-dom'
import { DetailsOnTheMarket } from '../../shared/components/MarketInfo/DetailsOnTheMarket/DetailsOnTheMarket';
import { AssetsService } from '../../shared/services/api/assets/AssetsService';
import { ExchangesService } from '../../shared/services/api/exchanges/ExchangesService';
import Table from '../../shared/components/Table/Table';
import { AreaDateTimeChart } from '../../shared/components/Charts/AreaDateTimeChart/AreaDateTimeChart';



export const CurrencyDetails = () => {

  const { id } = useParams();


  const [details, setDetails] = useState({});
  const [data, setData] = useState([]);
  const [exchanges, setExchanges] = useState([]);


  const titles = [{ title: "Rank", w: false, }, { title: "Nome", w: "150px" }, { title: "Pares de Negociação", w: false }
    , { title: "Volume (24h)", w: false }, { title: "Alteração (24h)", w: false }];

  const titleColumnsRemoveResizing = ["Rank", "Alteração (24h)"];

  useEffect(() => {

    if (!id) {
      Navigate('/');
      return;
    }

    AssetsService.getById(id).then((response) => {
      
      setDetails(response.data)
    }).catch((error) => {
     // console.log(error)
      alert(error?.message)
    });

    AssetsService.getHistoryById(id).then((response) => {

      const arr = response.data;

      const arr2 = arr?.map((item) => [item.time, Number(item.priceUsd.toLocaleString('pt-BR')).toFixed(2)])

      setData(arr2);

    }).catch(error => {
      //console.log(error)
      alert(error?.message)
    });

  }, [id]);

  useEffect(() => {
    ExchangesService.getAll().then(res => setExchanges(res.data))
      .catch(error => {
       // console.log(error)
       alert(error.message)
      })
  }, []);


  return (
    <LayoutBase>
      <>
        {
          details && (<DetailsOnTheMarket data={details} />)
        }

        {data && details && (<AreaDateTimeChart serie={data} logo={details?.symbol?.toLowerCase()} />)}

        {
          exchanges && (
            <Table isExchanges data={exchanges.sort((a, b) => a.rank - b.rank)}
              columnsTitles={titles}
              columnsNotToRemoveWhenResizing={titleColumnsRemoveResizing}
              totalRecords={73} recordsPerPage={10} />

          )
        }

      </>

    </LayoutBase>
  )
}
