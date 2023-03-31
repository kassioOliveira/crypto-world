import React from "react";
import Chart from "react-apexcharts";

export const AreaChart = ({data}) => {

    const options = {
        series: data.map(item =>{ 
          return { name:item.name, data:item.prices }
         }) ,
        chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories:data.map((item) => item.dates).flat(1)
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
      };

  return (
    <Chart options={options}
      series={options.series} 
      type="area"
       height={"350px"}/>
  )
}
