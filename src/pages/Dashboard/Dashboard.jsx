import React, { useEffect, useState } from "react";
import { PainelGraficosContainer } from "../../shared/components/PainelGraficosContainer/PainelGraficosContainer";

import { LayoutBase } from "../../shared/layouts/LayoutBase/Layout";
import { AssetsService } from "../../shared/services/api/assets/AssetsService";
import { TopMarket } from "../../shared/components/MarketInfo/TopMaket/TopMarket";
import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "../../shared/components/Fallback/ErrorPage";

export const Dashboard = () => {

  const {showBoundary} = useErrorBoundary();

  const [topFive, setTopFive] = useState([]);
  

  useEffect(() => {


    AssetsService.getAll(0, 5).then(res => setTopFive(res.data))
      .catch(err => showBoundary(err))


  }, [showBoundary]);






  return (
    <LayoutBase>
      <ErrorBoundary fallback={<ErrorPage/>}>
           <TopMarket data={topFive} />
            <PainelGraficosContainer />
      </ErrorBoundary>
     
    </LayoutBase>
  )
}
