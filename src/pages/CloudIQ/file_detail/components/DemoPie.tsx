import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  var data = [
    {
      type: 'used',
      value: 30,
    },
    {
      type: 'free',
      value: 120,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.5,
    innerRadius: 0.4,
    label: {
      type: 'spiders',
      offset: '-50%',
    },
    legend: false,
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    statistic: {
      showTitle: true,
      title: 'true',
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '20%\nUsed',
      },
    },
  };
  return <Pie {...config} />;
};

export default DemoPie;
