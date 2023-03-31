import React, { useEffect, useState } from "react";
import { PainelGraficosContainer } from "../../shared/components/PainelGraficosContainer/PainelGraficosContainer";

import { LayoutBase } from "../../shared/layouts/LayoutBase/Layout";
import { AssetsService } from "../../shared/services/api/assets/AssetsService";
import { TopMarket } from "../../shared/components/MarketInfo/TopMaket/TopMarket";

export const Dashboard = () => {


  const [topFive, setTopFive] = useState([]);
  

  useEffect(() => {


    AssetsService.getAll(0, 5).then(res => setTopFive(res.data))
      .catch(err => alert(err.message))


  }, []);






  return (
    <LayoutBase>
      {
        topFive && (
          <>

            <TopMarket data={topFive} />
            <PainelGraficosContainer />

          </>
        )
      }

     
    </LayoutBase>
  )
}
