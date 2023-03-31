import React from 'react'
import Chart from "react-apexcharts";

export const RadialBarChart = ({data}) => {

  const capitalization = data.map(item => Number(item.marketCapUsd));

  const totalCapitalization = capitalization.reduce((a,b) => (a + b),0 );

  const shareInTotalCapitalization = data.map((item) => {
  const participation =  (Number(item.marketCapUsd) / totalCapitalization) * 100;

  return {name:item.id,participation}
  })

  const formatCash = (number) => {
    let n;
    if (!isNaN(number)) {
      n = Number(number)
    }

    if (n < 1e3) return (n).toLocaleString('pt-br');
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  };

    const options = {
          
        series: shareInTotalCapitalization.map((item) => (parseFloat(item.participation).toFixed(2)) ),
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
            size: '50%'
            
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                  label: 'Capitalização total',
                  fontSize: '15px',
                  formatter: function (w) {
                    return formatCash(totalCapitalization);
                  }
                }
              }
            }
          },
          labels: data.map((item)=> item.id),
        },
      
      
      }
  return (
    <Chart options={options.options}
     series={options.series} type="radialBar" 
      width={"100%"} height={"300px"} />
  )
}
