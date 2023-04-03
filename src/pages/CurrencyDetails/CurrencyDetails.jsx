import React from 'react'
import { LayoutBase } from '../../shared/layouts/LayoutBase/Layout'
import { Navigate, useParams } from 'react-router-dom'
import { DetailsOnTheMarket } from '../../shared/components/MarketInfo/DetailsOnTheMarket/DetailsOnTheMarket';
import { useEffect } from 'react';
import { useState } from 'react';
import { AssetsService } from '../../shared/services/api/assets/AssetsService';

export const CurrencyDetails = () => {

  const [details,setDetails] = useState({});

  const {id} = useParams();
  

  useEffect(() => {

    if(!id){
      Navigate('/');
      return ;
    }

    AssetsService.getById(id).then((response) => {
      setDetails(response.data)
    }).catch((error) => console.log(error));

  },[id]);


  return (
    <LayoutBase>
        {details && (
          <DetailsOnTheMarket data={details}/>
        )}
    </LayoutBase>
  )
}
