import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, LineSeries, Tooltip } from '@syncfusion/ej2-react-charts'

import {lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis} from '../../data/dummy'


 
const LineChart = () => {


  return (
    <div>
      <ChartComponent
        id='line-chart'
        height='420px'
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis = {LinePrimaryYAxis}
        chartArea ={{ border: {width: 0}}}
        tooltip={{enable: true}}
        
      >
        <Inject services={[DateTime,Legend, Tooltip, LineSeries]}/>
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default LineChart
