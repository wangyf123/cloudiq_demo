import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const PerformanceColumn: React.FC = () => {
  
  var data = [{'type': 'TOP', 'value': 202, 'date': 'July 1-2'}, {'type': 'TOP', 'value': 190, 'date': 'July 2-3'}, {'type': 'TOP', 'value': 250, 'date': 'July 3-4'}, {'type': 'TOP', 'value': 173, 'date': 'July 4-5'}, {'type': 'TOP', 'value': 276, 'date': 'July 5-6'}, {'type': 'TOP', 'value': 275, 'date': 'July 6-7'}, {'type': 'TOP', 'value': 246, 'date': 'July 7-8'}, {'type': 'Max', 'value': 136, 'date': 'July 1-2'}, {'type': 'Max', 'value': 136, 'date': 'July 2-3'}, {'type': 'Max', 'value': 132, 'date': 'July 3-4'}, {'type': 'Max', 'value': 115, 'date': 'July 4-5'}, {'type': 'Max', 'value': 154, 'date': 'July 5-6'}, {'type': 'Max', 'value': 146, 'date': 'July 6-7'}, {'type': 'Max', 'value': 155, 'date': 'July 7-8'}, {'type': 'Avg', 'value': 133, 'date': 'July 1-2'}, {'type': 'Avg', 'value': 133, 'date': 'July 2-3'}, {'type': 'Avg', 'value': 129, 'date': 'July 3-4'}, {'type': 'Avg', 'value': 112, 'date': 'July 4-5'}, {'type': 'Avg', 'value': 151, 'date': 'July 5-6'}, {'type': 'Avg', 'value': 143, 'date': 'July 6-7'}, {'type': 'Avg', 'value': 152, 'date': 'July 7-8'}, {'type': 'Min', 'value': 130, 'date': 'July 1-2'}, {'type': 'Min', 'value': 130, 'date': 'July 2-3'}, {'type': 'Min', 'value': 126, 'date': 'July 3-4'}, {'type': 'Min', 'value': 109, 'date': 'July 4-5'}, {'type': 'Min', 'value': 148, 'date': 'July 5-6'}, {'type': 'Min', 'value': 140, 'date': 'July 6-7'}, {'type': 'Min', 'value': 149, 'date': 'July 7-8'}, {'type': 'Bottom', 'value': 77, 'date': 'July 1-2'}, {'type': 'Bottom', 'value': 46, 'date': 'July 2-3'}, {'type': 'Bottom', 'value': 40, 'date': 'July 3-4'}, {'type': 'Bottom', 'value': 42, 'date': 'July 4-5'}, {'type': 'Bottom', 'value': 57, 'date': 'July 5-6'}, {'type': 'Bottom', 'value': 59, 'date': 'July 6-7'}, {'type': 'Bottom', 'value': 71, 'date': 'July 7-8'}]; 
  var config = {
    data: data,
    isStack: true,
    xField: 'date',
    yField: 'value',
    seriesField: 'type',
    minColumnWidth: 20,
    maxColumnWidth: 20,

  colorField: 'type', // or seriesField in some cases
  color: ({ type }) => {
    if(type === 'Avg'){
      return '#7CB5EC';
    }else if (type === 'Bottom') {
      return '#FFFFFF';
    }
    return '#E5F0FB';
  },

  };
  return <Column {...config} />;
};

export default PerformanceColumn;
