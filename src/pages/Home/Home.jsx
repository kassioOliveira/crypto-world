import React, {useEffect, useState} from 'react'
import { GeralMarket } from '../../shared/components/MarketInfo/GeralMarket/GeralMarket';
import Table from '../../shared/components/Table/Table';
import { LayoutBase } from '../../shared/layouts/LayoutBase/Layout';
import { AssetsService } from '../../shared/services/api/assets/AssetsService';

export const Home = () => {

    const [assets, setAssets] = useState([]);

    const titles = [{ title: "Rank", w: false, }, { title: "Nome", w: "150px" }, { title: "Preço US", w: false }
    , { title: "Capitalização de mercado", w: false }, { title: "Volume (24h)", w: false }, { title: "Alteração (24h)", w: false }];

  const titleColumnsRemoveResizing = ["Rank", "Volume (24h)", "Capitalização de mercado"];


    useEffect(()=>{
        AssetsService.getAll(0, 20).then(res => setAssets(res.data))
        .catch(err => alert(err.message))
    },[]);

    const handlePageClick = (e) => {
        const offset = (e.selected * 20);
    
        AssetsService.getAll(offset, 20).then(res => setAssets(res.data))
          .catch(err => alert(err.message))
      }
    
    

  return (
    <LayoutBase>
        <GeralMarket/>
        {assets && (
        <Table isAssets showPagination  data={assets}
          columnsTitles={titles}
          columnsNotToRemoveWhenResizing={titleColumnsRemoveResizing}
          handlePageClick={handlePageClick} totalRecords={2000} recordsPerPage={20} />
      )}
    </LayoutBase>
  )
}
