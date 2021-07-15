import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  var data = [
    {
      country: 'Used',
      year: 'Effective Capacity',
      value: 110.7,
    },
    {
      country: 'Free',
      year: 'Effective Capacity',
      value: 120,
    },
  ];
  var config = {
    data: data,
    xField: 'year',
    yField: 'value',
    seriesField: 'country',
    isPercent: false,
    isStack: true,
    label: {
      position: 'middle',
      content: function content(item) {
        return item.value.toFixed(2) + ' TB';
      },
      style: { fill: '#fff' },
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
