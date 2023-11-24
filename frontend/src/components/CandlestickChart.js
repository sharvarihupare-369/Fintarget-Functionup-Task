// import React, { Component } from 'react';
// import CanvasJSReact from '@canvasjs/react-charts';
// //var CanvasJSReact = require('@canvasjs/react-charts');
 
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// var dataPoints =[];
// class CandlestickChart extends Component {
//   constructor(props) {
//     super(props);
//     let mappedData = props.data.map((el)=>{
//       // console.log(el.Nifty)
//     })
//     // console.log(props.data)
// }

// render() {
// const options = {
// exportEnabled: true,
// title: {
// text: "Algowiz"
// },
// axisX: {
// valueFormatString: "D MMM"
// },
// axisY: {
// title: "Price",
// prefix: "$"
// },
// data: [{
// type: "candlestick",
// name: "Algowiz",
// showInLegend: true,
// yValueFormatString: "$##0.00",
// xValueType: "dateTime",
// dataPoints: dataPoints
// }]
// }
// return (
// <div>
// <CanvasJSChart options = {options} onRef={ref => this.chart = ref}/>
// </div>
// );
// }
// componentDidMount(){
// var chart = this.chart;
// fetch('https://canvasjs.com/data/gallery/react/microsoft-stock-price.json')
// .then(function(response) {
// return response.json();
// })
// .then(function(data) {
// for (var i = 0; i < data.length; i++) {
// dataPoints.push({
// x: data[i].x,
// y: data[i].y
// });
// }
// chart.render();
// });
// }
// }
// export default CandlestickChart;


import React from 'react'
import Chart from 'react-apexcharts'
const CandlestickChart = ({data,interval,instrument}) => {
  const info = [
    {
      data : data.map(item=>({
        x : interval,
        y : [item.open, item.high, item.low, item.close],
      }))
    }
  ]
  const options = {
    chart : {
      type : 'candlestick'
    },
    xaxis: {
      type : 'datetime'
    }
  }
  return (
    <div>
      <h2 style={{color:"white"}}>{instrument}</h2>
      <Chart options={options} series={info} type="candlestick" height={350} />
    </div>
  )
}

export default CandlestickChart