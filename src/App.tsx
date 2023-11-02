import { useEffect, useState } from 'react';
import './App.css';
import { API_URL } from './constant/api';
import { StockChart } from './component/stock-chart';

function App() {
   const [stocks, setStocks] = useState({});
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchStockData = async () => {
         try {
            const response = await fetch(API_URL);
            const data = await response.json();
            console.log("data", data);
            setStocks(data);
            setIsLoading(false);
         } catch (error) {
            console.error('Error fetching stock data:', error);
            setIsLoading(false);
         }
      };
      fetchStockData();
   }, []);

   return (
      <div className='App'>
         <p>Stock prices</p>
         {isLoading && <p>Loading...</p>}
         {!isLoading && Object.keys(stocks).length === 0 && (
            <p>No stocks found</p>
         )}
         {!isLoading && Object.keys(stocks).length > 0 && (
            <div>
               <StockChart stocks={stocks} />
            </div>
         )}
      </div>
   );
}

export default App;
