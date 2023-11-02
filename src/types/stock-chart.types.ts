type HistoricalPrice = {
   close: number;
   high: number;
   low: number;
   open: number;
   priceDate: string;
   symbol: string;
   volume: number;
   id: string;
   key: string;
   subkey: string;
   date: string;
   updated: number;
   changeOverTime: number;
   marketChangeOverTime: number;
   uOpen: number;
   uClose: number;
   uHigh: number;
   uLow: number;
   uVolume: number;
   fOpen: number;
   fClose: number;
   fHigh: number;
   fLow: number;
   fVolume: number;
   label: string;
   change: number;
   changePercent: number;
};

// Define a type for the AAPL data
type StockData = {
   chart: HistoricalPrice[];
};

// Define a type for the entire MOCK_DATA
export type StockChartDatum = {
   [key: string]: StockData;
};
