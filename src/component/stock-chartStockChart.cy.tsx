import React from 'react'
import { StockChart } from './stock-chart'

describe('<StockChart />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<StockChart />)
  })
})