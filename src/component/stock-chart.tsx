import { ChartData } from 'chart.js/auto';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
} from 'chart.js';
import { StockChartDatum } from '../types/stock-chart.types';
import "./stock-chart.css"

ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend
);

interface StockChartProps {
   stocks: StockChartDatum;
}

export const StockChart: React.FC<StockChartProps> = ({ stocks }) => {
   const [chartData, setChartData] = useState<
      ChartData<'bar', (number | [number, number] | null)[], unknown>
   >({ labels: [], datasets: [] });

   useEffect(() => {
      const isStocksEmpty = Object.keys(stocks).length === 0;
      if (isStocksEmpty) return;
      const chartData = {
         labels: Object.keys(stocks).reverse(),
         datasets: [
            {
               label: 'AAPL',
               data: stocks['AAPL'].chart.map((item) => item.close),
               borderColor: 'red',
               backgroundColor: 'red',
               fill: false,
            },
            {
               label: 'MSFT',
               data: stocks['MSFT'].chart.map((item) => item.close),
               borderColor: 'blue',
               backgroundColor: 'blue',
               fill: false,
            },
            {
               label: 'TSLA',
               data: stocks['TSLA'].chart.map((item) => item.close),
               borderColor: 'green',
               backgroundColor: 'green',
               fill: false,
            },
            {
               label: 'AMZN',
               data: stocks['AMZN'].chart.map((item) => item.close),
               borderColor: 'purple',
               backgroundColor: 'purple',
               fill: false,
            },
            {
               label: 'META',
               data: stocks['META'].chart.map((item) => item.close),
               borderColor: 'orange',
               backgroundColor: 'orange',
               fill: false,
            },
         ],
      };
      setChartData(chartData);
   }, [stocks]);

   return <div>{chartData && <Bar className='canvas' data={chartData} />}</div>;
};
