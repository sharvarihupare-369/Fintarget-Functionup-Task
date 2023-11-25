import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";


const CandlestickChart = ({ data, instrument = "Nifty" }) => {
  const [series, setSeries] = useState([{ data: [] }]);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    let n = 1;

    setGraphData((prev) => [
      ...prev,
      {
        x: new Date().getTime() + (60000 * (n * (n + 1))) / 2,
        y: [
          data[instrument] + Math.random() + 20,
          data[instrument] + Math.random() + 20,
          data[instrument] + Math.random() + 20,
          data[instrument] + Math.random() + 20,
        ],
      },
    ]);

    n++;

  }, [data[instrument], instrument]);

  useEffect(() => {
    setSeries([{ data: graphData }]);
  }, [graphData.length]);

  const options = {
    chart: {
      type: "candlestick",
    },

    xaxis: {
      type: "datetime",
    },

    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div style={{ background: "white" ,padding:"10px",}}>
      <Chart
        options={options}
        series={series}
        type="candlestick"
        height={350}
      />
    </div>
  );
};

export default CandlestickChart;
