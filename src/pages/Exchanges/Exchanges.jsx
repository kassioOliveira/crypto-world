import React, { useEffect, useState } from 'react'
import { GeralMarket } from '../../shared/components/MarketInfo/GeralMarket/GeralMarket'
import Table from '../../shared/components/Table/Table'
import { LayoutBase } from '../../shared/layouts/LayoutBase/Layout'
import { ExchangesService } from '../../shared/services/api/exchanges/ExchangesService'

export const Exchanges = () => {

    const [exchanges, setExchanges] = useState([]);

    const titles = [{ title: "Rank", w: false, }, { title: "Nome", w: "150px" }, { title: "Pares de Negociação", w: false }
      , { title: "Volume (24h)", w: false }, { title: "Alteração (24h)", w: false }];

  const titleColumnsRemoveResizing = ["Rank", "Alteração (24h)"];

    useEffect(() => {
        ExchangesService.getAll().then(res => setExchanges(res.data))
            .catch(err => alert(err.message))
    }, []);
    
    return (
        <LayoutBase>
            <GeralMarket />
            {
                exchanges && (
                    <Table isExchanges data={exchanges.sort((a,b) => a.rank - b.rank)}
                        columnsTitles={titles}
                        columnsNotToRemoveWhenResizing={titleColumnsRemoveResizing}
                        totalRecords={73} recordsPerPage={10} />

                )
            }
        </LayoutBase>
    )
}
