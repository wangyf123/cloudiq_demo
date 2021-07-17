import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/charts';

const DemoBar: React.FC = () => {
  var data = [
    {
      year: ' ',
      value: 30,
      type: 'Used',
    },
    {
      year: ' ',
      value: 52,
      type: 'Free',
    },
  ];
  var config = {
    data: data.reverse(),
    isStack: true,
    xField: 'value',
    yField: 'year',
    seriesField: 'type',
    padding: [20, 20, 20, 8],
    legend: {
      position: 'left-bottom',
      layout: 'horizontal',
    },
    yAxis: false,
    xAxis: false,
    tooltip: {
      formatter: (datum) => {
        return {
          name: datum.type,
          value: `${datum.value}TB (${((datum.value / 98) * 100).toFixed(2)}%)`,
        };
      },
    },
  };
  return <Bar {...config} />;
};

export default DemoBar;
