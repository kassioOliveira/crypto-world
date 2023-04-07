import React, { useEffect, useState ,useCallback} from 'react'
import { LayoutBase } from '../../shared/layouts/LayoutBase/Layout'
import { DetailsOnTheExchange } from '../../shared/components/MarketInfo/DetailsOnTheExchange/DetailsOnTheExchange'
import { useParams } from 'react-router-dom'
import { ExchangesService } from '../../shared/services/api/exchanges/ExchangesService'
import { ErrorBoundary, useErrorBoundary } from 'react-error-boundary'
import { ErrorPage } from '../../shared/components/Fallback/ErrorPage'
import Table from '../../shared/components/Table/Table'
import { AssetsService } from '../../shared/services/api/assets/AssetsService'

export const ExchangeDetails = () => {


  const {showBoundary} = useErrorBoundary()

  const {id} = useParams();

  const [details,setDetails] = useState({});
  const [assets,setAssets] = useState([])
  const [isMounted,setIsMounted] = useState(false);
  const [timer,setTimer] = useState(null)

  const titles = [{ title: "Rank", w: false, }, { title: "Nome", w: "150px" }, { title: "Preço US", w: false }
  , { title: "Capitalização de mercado", w: false }, { title: "Volume (24h)", w: false }, { title: "Alteração (24h)", w: false }];

const titleColumnsRemoveResizing = ["Rank", "Volume (24h)", "Capitalização de mercado"];



 const updateDevicePosition  =  useCallback( async () =>{
    try {
      const result = await ExchangesService.getById(id);
      setDetails(result.data);
    } catch (error) {
      showBoundary(error)
    }

    clearTimeout(timer);
    setTimer(setTimeout(updateDevicePosition,10000));


  },[id, showBoundary,timer]);

  useEffect(() => {

    if(!isMounted){
      updateDevicePosition(id);
      setIsMounted(true);
    }

    AssetsService.getAll(0,20).then((res) => setAssets(res.data))
    .catch((err) => showBoundary(err))

  },[id,showBoundary,isMounted,updateDevicePosition]);


  const handlePageClick = (e) => {
    const offset = (e.selected * 20);

    AssetsService.getAll(offset,20).then(res => setAssets(res.data))
      .catch(err => showBoundary(err))
  }

  return (
    <LayoutBase>
        <ErrorBoundary fallback={<ErrorPage/>}>
        <DetailsOnTheExchange data={details}/>

        <Table isAssets showPagination  data={assets}
          columnsTitles={titles}
          columnsNotToRemoveWhenResizing={titleColumnsRemoveResizing}
          handlePageClick={handlePageClick} totalRecords={2000} recordsPerPage={20} />

        </ErrorBoundary>
    </LayoutBase>
  )
}
