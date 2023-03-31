import React from 'react'
import Chart from "react-apexcharts";

export const BarChart = ({data}) => {


  const formattedData = data.map((item) => {
    return {name:item.symbol, price: Number(item.priceUsd)};
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
          
      series: [{
        name: 'Inflation',
        data: formattedData.map((item) => item.price.toFixed(2))
      }],
      options: {
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top', 
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return formatCash(val)
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
        
        xaxis: {
          categories: formattedData.map((item)=> item.name) ,
          position: 'top',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return   "$"+ val;
            }
          }
        
        },
        title: {
          text: 'Preço $US',
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444'
          }
        }
      },
        
      };


  return (
    <Chart options={options.options} 
       series={options.series} 
    type="bar" width={"100%"} height={"350px"}/>
  )
}
