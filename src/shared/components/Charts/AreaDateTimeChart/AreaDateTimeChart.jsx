import React, { useCallback, useEffect, useState } from 'react';

import ApexChart from "react-apexcharts";
import ApexCharts from 'apexcharts';
import { ButtonHistory, ContainerButtons, DateTimeBox, DateTimeContainer, DateTimeLogo } from './AreaDateTimeStyle';

export const AreaDateTimeChart = ({serie, logo}) => {

  const [dates,setDates] = useState([]);

  useEffect(() => {

    const dates = serie.map((item) => item[0]);
    setDates(dates);

  },[serie]);


 const oneMonth = dates?.filter((item) => item > new Date().getTime() - 30 * (24*60*60*1000) && item < new Date().getTime()- 1 * (24*60*60*1000))
   
  const sixMonthes = dates?.filter((item) => item > new Date().getTime() - (24*60*60*1000) * 182 && item < new Date().getTime()- 1 * (24*60*60*1000)  )
  
  const oneWeek = dates?.filter((item) => item >  new Date().getTime() -  8 * (24*60*60*1000) && item < new Date().getTime() -  (24*60*60*1000))
  
  const oneYear = dates?.sort();

    let options2 = {
          
        series: [{
          data: serie
        }],
        options: {
          chart: {
            id: 'area-datetime',
            type: 'area',
            height: 350,
            zoom: {
              autoScaleYaxis: true
            }
          },
          annotations: {
            yaxis: [{
              y: 30,
              borderColor: '#999',
              label: {
                show: true,
                text: 'Support',
                style: {
                  color: "#fff",
                  background: '#00E396'
                }
              }
            }],
            xaxis: [{
              x: new Date().getTime() + 90 * (24 * 69 * 60 * 1000),
              borderColor: '#999',
              yAxisIndex: 0,
              label: {
                show: true,
                text: 'Rally',
                style: {
                  color: "#fff",
                  background: '#775DD0'
                }
              }
            }]
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0,
            style: 'hollow',
          },
          xaxis: {
            type: 'datetime',
            min: new Date().getTime() - 365 * (24 * 69 * 60 * 1000),
            tickAmount: 6,
          },
          tooltip: {
            x: {
              format: 'dd MMM yyyy'
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 100]
            }
          },
        },
      
      };  


      const updateData = useCallback((timeline) => {
          switch (timeline) {
            case 'one_month':
              ApexCharts.exec(
                'area-datetime',
                'zoomX',
                (oneMonth[0] ),
                oneMonth[oneMonth.length - 1]
              )
              break
            case 'six_months':
              ApexCharts.exec(
                'area-datetime',
                'zoomX',
               sixMonthes[0],
                sixMonthes[sixMonthes.length - 1]
              )
              break
            case 'one_year':
              ApexCharts.exec(
                'area-datetime',
                'zoomX',
               oneYear[0],
                oneYear[oneYear.length - 1]
              )
              break
            case 'one_week':
              ApexCharts.exec(
                'area-datetime',
                'zoomX',
                oneWeek[0] ,
                oneWeek[oneWeek.length - 1]
              )
              break
            default:
          }
        },[serie]);

  return (
     <DateTimeContainer>
      <DateTimeBox top h={"100px"}>
     {
      //logo && ( <DateTimeLogo src={`https://assets.coincap.io/assets/icons/${logo.toLowerCase()}@2x.png`}/> )
     }
        <ContainerButtons>
        <ButtonHistory onClick={() => updateData("one_week")}>
                7 dias
              </ButtonHistory>
              <ButtonHistory onClick={() => updateData("one_month")}>
                1 mês
              </ButtonHistory>
              <ButtonHistory onClick={() => updateData("six_months")}>
                6 meses
              </ButtonHistory>
              <ButtonHistory onClick={() => updateData("one_year")}>
                1 ano
              </ButtonHistory>
  
        </ContainerButtons>
      </DateTimeBox>
      <DateTimeBox>
      <ApexChart  options={options2.options} series={options2.series} type="area"   height={350} />
      </DateTimeBox>
     </DateTimeContainer>
  )
}
