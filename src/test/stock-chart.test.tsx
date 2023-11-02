import { Chart as ChartJS } from 'chart.js';
import { mount } from 'cypress/react18';
import { MOCK_DATA } from '../constant/stock-chart.constant';
import { StockChart } from '../component/stock-chart';

describe('<StockChart />', () => {
   it('renders', () => {
      // see: https://on.cypress.io/mounting-react
      mount(<StockChart stocks={MOCK_DATA} />);

      cy.wait(2000);
      cy.get('canvas').then(($canvas) => {
         const canvasElement = $canvas[0] as HTMLCanvasElement;
         const chartInstance = ChartJS.getChart(canvasElement); // Using ChartJS's getChart function

         if (!chartInstance || !chartInstance.data) {
            assert.fail(
               'Chart instance is not available or not initialized properly.'
            );
         }

         //Test labels
         const chartLabels = chartInstance.data.datasets.map(
            (dataset: any) => dataset.label
         );
         const expectedChartLabels = Object.keys(MOCK_DATA).map(
            (symbol) => symbol
         );
         expect(chartLabels.length).equal(expectedChartLabels.length);
         expectedChartLabels.forEach((expectedLabel) => {
            expect(chartLabels).to.include(expectedLabel);
         });

         //Test values
         const chartValues = chartInstance.data.datasets.map(
            (dataset: any) => dataset.data
         );
         const expectedChartValues = Object.values(MOCK_DATA).map((stock) =>
            stock.chart.map((item) => item.close)
         );
         expect(chartValues.length).equal(expectedChartValues.length);
      });
   });
});
