// import React from 'react';
// import { CandlestickSeries, Chart, ChartCanvas, XAxis, YAxis } from 'react-stockcharts/lib/series';
// import { discontinuousTimeScaleProvider } from 'react-stockcharts/lib/scale';
// import { CrossHairCursor, MouseCoordinateX, MouseCoordinateY } from 'react-stockcharts/lib/coordinates';
// import { fitWidth } from 'react-stockcharts/lib/helper';
// import { last } from 'react-stockcharts/lib/utils';
// import { timeIntervalBarWidth } from 'react-stockcharts/lib/scale/scaleInterval';

// const CandlestickChart = ({ data, width, ratio, interval }) => {
//   const xAccessor = (d) => d.date;
//   const xExtents = [xAccessor(last(data)), xAccessor(data[0])];

//   const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor((d) => d.date);
//   const { data: linearData, xScale, xAccessor: xAcc, displayXAccessor } = xScaleProvider(data);

//   const xScaleWithInterval = timeIntervalBarWidth(xAcc, data, xScale, interval);

//   return (
//     <ChartCanvas
//       height={400}
//       ratio={ratio}
//       width={width}
//       margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
//       type="hybrid"
//       seriesName="MSFT"
//       data={linearData}
//       xAccessor={(d) => d.date}
//       xScale={xScaleWithInterval}
//       xExtents={xExtents}
//     >
//       <Chart id={1} yExtents={(d) => [d.high, d.low]}>
//         <XAxis axisAt="bottom" orient="bottom" ticks={6} />
//         <YAxis axisAt="left" orient="left" ticks={5} />
//         <CandlestickSeries />
//       </Chart>
//       <CrossHairCursor />
//       <MouseCoordinateX at="bottom" orient="bottom" displayFormat={(d) => displayXAccessor(d)} />
//       <MouseCoordinateY at="left" orient="left" displayFormat={(d) => d.toFixed(2)} />
//     </ChartCanvas>
//   );
// };

// export default fitWidth(CandlestickChart);

import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const CandlestickChart = ({ data, interval }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Transform the incoming data to the format expected by ApexCharts
    const transformedData = data.map((item) => ({
      x: new Date(item.date).getTime(),
      y: [item.open, item.high, item.low, item.close],
    }));

    // Update the chartData state with the transformed data
    setChartData(transformedData);
  }, [data]);

  const options = {
    chart: {
      type: 'candlestick',
      height: 350,
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  const series = [
    {
      data: chartData,
    },
  ];

  return <ReactApexChart options={options} series={series} type="candlestick" height={350} />;
};

export default CandlestickChart;
