import React from 'react';
import { Column } from '@ant-design/charts';

const PerformanceColumn: React.FC = ({unit}) => {
  var data = [
    { type: 'TOP', value: 202, date: 'July 8-9' },
    { type: 'TOP', value: 190, date: 'July 9-10' },
    { type: 'TOP', value: 250, date: 'July 10-11' },
    { type: 'TOP', value: 173, date: 'July 11-12' },
    { type: 'TOP', value: 276, date: 'July 12-13' },
    { type: 'TOP', value: 275, date: 'July 13-14' },
    { type: 'TOP', value: 246, date: 'July 14-15' },
    { type: 'Max', value: 136, date: 'July 8-9' },
    { type: 'Max', value: 136, date: 'July 9-10' },
    { type: 'Max', value: 132, date: 'July 10-11' },
    { type: 'Max', value: 115, date: 'July 11-12' },
    { type: 'Max', value: 154, date: 'July 12-13' },
    { type: 'Max', value: 146, date: 'July 13-14' },
    { type: 'Max', value: 155, date: 'July 14-15' },
    { type: 'Avg', value: 20, date: 'July 8-9' },
    { type: 'Avg', value: 20, date: 'July 9-10' },
    { type: 'Avg', value: 20, date: 'July 10-11' },
    { type: 'Avg', value: 20, date: 'July 11-12' },
    { type: 'Avg', value: 20, date: 'July 12-13' },
    { type: 'Avg', value: 20, date: 'July 13-14' },
    { type: 'Avg', value: 20, date: 'July 14-15' },
    { type: 'Min', value: 130, date: 'July 8-9' },
    { type: 'Min', value: 130, date: 'July 9-10' },
    { type: 'Min', value: 126, date: 'July 10-11' },
    { type: 'Min', value: 109, date: 'July 11-12' },
    { type: 'Min', value: 148, date: 'July 12-13' },
    { type: 'Min', value: 140, date: 'July 13-14' },
    { type: 'Min', value: 149, date: 'July 14-15' },
    { type: 'Bottom', value: 77, date: 'July 8-9' },
    { type: 'Bottom', value: 46, date: 'July 9-10' },
    { type: 'Bottom', value: 40, date: 'July 10-11' },
    { type: 'Bottom', value: 42, date: 'July 11-12' },
    { type: 'Bottom', value: 57, date: 'July 12-13' },
    { type: 'Bottom', value: 59, date: 'July 13-14' },
    { type: 'Bottom', value: 71, date: 'July 14-15' },
  ];
  var config = {
    data: data,
    isStack: true,
    legend: false,
    xField: 'date',
    yField: 'value',
    yAxis: {
      label: {
        formatter: (text:string) => {
          return `${text} ${unit}`;
        },
      },
    },
    seriesField: 'type',
    minColumnWidth: 20,
    maxColumnWidth: 20,
    colorField: 'type', // or seriesField in some cases
    color: ({ type }) => {
      if (type === 'Avg') {
        return '#7CB5EC';
      } else if (type === 'Bottom') {
        return 'rgba(255,255,255, 0)';
      }
      return '#E5F0FB';
    },
  };
  return <Column {...config} />;
};

export default PerformanceColumn;
