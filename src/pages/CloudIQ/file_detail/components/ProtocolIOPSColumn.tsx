import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const ProtocolLatencyColumn: React.FC = () => {
  
  var data = [{'name': 'nfs3', 'type': 'nfs3_TOP', 'value': 231, 'date': 'July 1-2'}, {'name': 'nfs3', 'type': 'nfs3_TOP', 'value': 194, 'date': 'July 2-3'}, {'name': 'nfs3', 'type': 'nfs3_TOP', 'value': 234, 'date': 'July 3-4'}, {'name': 'nfs3', 'type': 'nfs3_TOP', 'value': 239, 'date': 'July 4-5'}, {'name': 'nfs3', 'type': 'nfs3_TOP', 'value': 259, 'date': 'July 5-6'}, {'name': 'nfs3', 'type': 'nfs3_TOP', 'value': 251, 'date': 'July 6-7'}, {'name': 'nfs3', 'type': 'nfs3_TOP', 'value': 183, 'date': 'July 7-8'}, {'name': 'nfs4', 'type': 'nfs4_TOP', 'value': 249, 'date': 'July 1-2'}, {'name': 'nfs4', 'type': 'nfs4_TOP', 'value': 277, 'date': 'July 2-3'}, {'name': 'nfs4', 'type': 'nfs4_TOP', 'value': 282, 'date': 'July 3-4'}, {'name': 'nfs4', 'type': 'nfs4_TOP', 'value': 223, 'date': 'July 4-5'}, {'name': 'nfs4', 'type': 'nfs4_TOP', 'value': 268, 'date': 'July 5-6'}, {'name': 'nfs4', 'type': 'nfs4_TOP', 'value': 262, 'date': 'July 6-7'}, {'name': 'nfs4', 'type': 'nfs4_TOP', 'value': 251, 'date': 'July 7-8'}, {'name': 's3', 'type': 's3_TOP', 'value': 195, 'date': 'July 1-2'}, {'name': 's3', 'type': 's3_TOP', 'value': 305, 'date': 'July 2-3'}, {'name': 's3', 'type': 's3_TOP', 'value': 209, 'date': 'July 3-4'}, {'name': 's3', 'type': 's3_TOP', 'value': 306, 'date': 'July 4-5'}, {'name': 's3', 'type': 's3_TOP', 'value': 221, 'date': 'July 5-6'}, {'name': 's3', 'type': 's3_TOP', 'value': 271, 'date': 'July 6-7'}, {'name': 's3', 'type': 's3_TOP', 'value': 261, 'date': 'July 7-8'}, {'name': 'smb1', 'type': 'smb1_TOP', 'value': 207, 'date': 'July 1-2'}, {'name': 'smb1', 'type': 'smb1_TOP', 'value': 259, 'date': 'July 2-3'}, {'name': 'smb1', 'type': 'smb1_TOP', 'value': 209, 'date': 'July 3-4'}, {'name': 'smb1', 'type': 'smb1_TOP', 'value': 212, 'date': 'July 4-5'}, {'name': 'smb1', 'type': 'smb1_TOP', 'value': 248, 'date': 'July 5-6'}, {'name': 'smb1', 'type': 'smb1_TOP', 'value': 234, 'date': 'July 6-7'}, {'name': 'smb1', 'type': 'smb1_TOP', 'value': 226, 'date': 'July 7-8'}, {'name': 'smb2', 'type': 'smb2_TOP', 'value': 267, 'date': 'July 1-2'}, {'name': 'smb2', 'type': 'smb2_TOP', 'value': 237, 'date': 'July 2-3'}, {'name': 'smb2', 'type': 'smb2_TOP', 'value': 201, 'date': 'July 3-4'}, {'name': 'smb2', 'type': 'smb2_TOP', 'value': 189, 'date': 'July 4-5'}, {'name': 'smb2', 'type': 'smb2_TOP', 'value': 239, 'date': 'July 5-6'}, {'name': 'smb2', 'type': 'smb2_TOP', 'value': 160, 'date': 'July 6-7'}, {'name': 'smb2', 'type': 'smb2_TOP', 'value': 199, 'date': 'July 7-8'}, {'name': 'nfs3', 'type': 'nfs3_Max', 'value': 171, 'date': 'July 1-2'}, {'name': 'nfs3', 'type': 'nfs3_Max', 'value': 118, 'date': 'July 2-3'}, {'name': 'nfs3', 'type': 'nfs3_Max', 'value': 132, 'date': 'July 3-4'}, {'name': 'nfs3', 'type': 'nfs3_Max', 'value': 99, 'date': 'July 4-5'}, {'name': 'nfs3', 'type': 'nfs3_Max', 'value': 186, 'date': 'July 5-6'}, {'name': 'nfs3', 'type': 'nfs3_Max', 'value': 153, 'date': 'July 6-7'}, {'name': 'nfs3', 'type': 'nfs3_Max', 'value': 120, 'date': 'July 7-8'}, {'name': 'nfs4', 'type': 'nfs4_Max', 'value': 152, 'date': 'July 1-2'}, {'name': 'nfs4', 'type': 'nfs4_Max', 'value': 127, 'date': 'July 2-3'}, {'name': 'nfs4', 'type': 'nfs4_Max', 'value': 164, 'date': 'July 3-4'}, {'name': 'nfs4', 'type': 'nfs4_Max', 'value': 149, 'date': 'July 4-5'}, {'name': 'nfs4', 'type': 'nfs4_Max', 'value': 176, 'date': 'July 5-6'}, {'name': 'nfs4', 'type': 'nfs4_Max', 'value': 162, 'date': 'July 6-7'}, {'name': 'nfs4', 'type': 'nfs4_Max', 'value': 167, 'date': 'July 7-8'}, {'name': 's3', 'type': 's3_Max', 'value': 119, 'date': 'July 1-2'}, {'name': 's3', 'type': 's3_Max', 'value': 158, 'date': 'July 2-3'}, {'name': 's3', 'type': 's3_Max', 'value': 135, 'date': 'July 3-4'}, {'name': 's3', 'type': 's3_Max', 'value': 184, 'date': 'July 4-5'}, {'name': 's3', 'type': 's3_Max', 'value': 119, 'date': 'July 5-6'}, {'name': 's3', 'type': 's3_Max', 'value': 136, 'date': 'July 6-7'}, {'name': 's3', 'type': 's3_Max', 'value': 141, 'date': 'July 7-8'}, {'name': 'smb1', 'type': 'smb1_Max', 'value': 97, 'date': 'July 1-2'}, {'name': 'smb1', 'type': 'smb1_Max', 'value': 169, 'date': 'July 2-3'}, {'name': 'smb1', 'type': 'smb1_Max', 'value': 134, 'date': 'July 3-4'}, {'name': 'smb1', 'type': 'smb1_Max', 'value': 131, 'date': 'July 4-5'}, {'name': 'smb1', 'type': 'smb1_Max', 'value': 158, 'date': 'July 5-6'}, {'name': 'smb1', 'type': 'smb1_Max', 'value': 137, 'date': 'July 6-7'}, {'name': 'smb1', 'type': 'smb1_Max', 'value': 169, 'date': 'July 7-8'}, {'name': 'smb2', 'type': 'smb2_Max', 'value': 125, 'date': 'July 1-2'}, {'name': 'smb2', 'type': 'smb2_Max', 'value': 128, 'date': 'July 2-3'}, {'name': 'smb2', 'type': 'smb2_Max', 'value': 114, 'date': 'July 3-4'}, {'name': 'smb2', 'type': 'smb2_Max', 'value': 132, 'date': 'July 4-5'}, {'name': 'smb2', 'type': 'smb2_Max', 'value': 116, 'date': 'July 5-6'}, {'name': 'smb2', 'type': 'smb2_Max', 'value': 92, 'date': 'July 6-7'}, {'name': 'smb2', 'type': 'smb2_Max', 'value': 121, 'date': 'July 7-8'}, {'name': 'nfs3', 'type': 'nfs3_Avg', 'value': 168, 'date': 'July 1-2'}, {'name': 'nfs3', 'type': 'nfs3_Avg', 'value': 115, 'date': 'July 2-3'}, {'name': 'nfs3', 'type': 'nfs3_Avg', 'value': 129, 'date': 'July 3-4'}, {'name': 'nfs3', 'type': 'nfs3_Avg', 'value': 96, 'date': 'July 4-5'}, {'name': 'nfs3', 'type': 'nfs3_Avg', 'value': 183, 'date': 'July 5-6'}, {'name': 'nfs3', 'type': 'nfs3_Avg', 'value': 150, 'date': 'July 6-7'}, {'name': 'nfs3', 'type': 'nfs3_Avg', 'value': 117, 'date': 'July 7-8'}, {'name': 'nfs4', 'type': 'nfs4_Avg', 'value': 149, 'date': 'July 1-2'}, {'name': 'nfs4', 'type': 'nfs4_Avg', 'value': 124, 'date': 'July 2-3'}, {'name': 'nfs4', 'type': 'nfs4_Avg', 'value': 161, 'date': 'July 3-4'}, {'name': 'nfs4', 'type': 'nfs4_Avg', 'value': 146, 'date': 'July 4-5'}, {'name': 'nfs4', 'type': 'nfs4_Avg', 'value': 173, 'date': 'July 5-6'}, {'name': 'nfs4', 'type': 'nfs4_Avg', 'value': 159, 'date': 'July 6-7'}, {'name': 'nfs4', 'type': 'nfs4_Avg', 'value': 164, 'date': 'July 7-8'}, {'name': 's3', 'type': 's3_Avg', 'value': 116, 'date': 'July 1-2'}, {'name': 's3', 'type': 's3_Avg', 'value': 155, 'date': 'July 2-3'}, {'name': 's3', 'type': 's3_Avg', 'value': 132, 'date': 'July 3-4'}, {'name': 's3', 'type': 's3_Avg', 'value': 181, 'date': 'July 4-5'}, {'name': 's3', 'type': 's3_Avg', 'value': 116, 'date': 'July 5-6'}, {'name': 's3', 'type': 's3_Avg', 'value': 133, 'date': 'July 6-7'}, {'name': 's3', 'type': 's3_Avg', 'value': 138, 'date': 'July 7-8'}, {'name': 'smb1', 'type': 'smb1_Avg', 'value': 94, 'date': 'July 1-2'}, {'name': 'smb1', 'type': 'smb1_Avg', 'value': 166, 'date': 'July 2-3'}, {'name': 'smb1', 'type': 'smb1_Avg', 'value': 131, 'date': 'July 3-4'}, {'name': 'smb1', 'type': 'smb1_Avg', 'value': 128, 'date': 'July 4-5'}, {'name': 'smb1', 'type': 'smb1_Avg', 'value': 155, 'date': 'July 5-6'}, {'name': 'smb1', 'type': 'smb1_Avg', 'value': 134, 'date': 'July 6-7'}, {'name': 'smb1', 'type': 'smb1_Avg', 'value': 166, 'date': 'July 7-8'}, {'name': 'smb2', 'type': 'smb2_Avg', 'value': 122, 'date': 'July 1-2'}, {'name': 'smb2', 'type': 'smb2_Avg', 'value': 125, 'date': 'July 2-3'}, {'name': 'smb2', 'type': 'smb2_Avg', 'value': 111, 'date': 'July 3-4'}, {'name': 'smb2', 'type': 'smb2_Avg', 'value': 129, 'date': 'July 4-5'}, {'name': 'smb2', 'type': 'smb2_Avg', 'value': 113, 'date': 'July 5-6'}, {'name': 'smb2', 'type': 'smb2_Avg', 'value': 89, 'date': 'July 6-7'}, {'name': 'smb2', 'type': 'smb2_Avg', 'value': 118, 'date': 'July 7-8'}, {'name': 'nfs3', 'type': 'nfs3_Min', 'value': 165, 'date': 'July 1-2'}, {'name': 'nfs3', 'type': 'nfs3_Min', 'value': 112, 'date': 'July 2-3'}, {'name': 'nfs3', 'type': 'nfs3_Min', 'value': 126, 'date': 'July 3-4'}, {'name': 'nfs3', 'type': 'nfs3_Min', 'value': 93, 'date': 'July 4-5'}, {'name': 'nfs3', 'type': 'nfs3_Min', 'value': 180, 'date': 'July 5-6'}, {'name': 'nfs3', 'type': 'nfs3_Min', 'value': 147, 'date': 'July 6-7'}, {'name': 'nfs3', 'type': 'nfs3_Min', 'value': 114, 'date': 'July 7-8'}, {'name': 'nfs4', 'type': 'nfs4_Min', 'value': 146, 'date': 'July 1-2'}, {'name': 'nfs4', 'type': 'nfs4_Min', 'value': 121, 'date': 'July 2-3'}, {'name': 'nfs4', 'type': 'nfs4_Min', 'value': 158, 'date': 'July 3-4'}, {'name': 'nfs4', 'type': 'nfs4_Min', 'value': 143, 'date': 'July 4-5'}, {'name': 'nfs4', 'type': 'nfs4_Min', 'value': 170, 'date': 'July 5-6'}, {'name': 'nfs4', 'type': 'nfs4_Min', 'value': 156, 'date': 'July 6-7'}, {'name': 'nfs4', 'type': 'nfs4_Min', 'value': 161, 'date': 'July 7-8'}, {'name': 's3', 'type': 's3_Min', 'value': 113, 'date': 'July 1-2'}, {'name': 's3', 'type': 's3_Min', 'value': 152, 'date': 'July 2-3'}, {'name': 's3', 'type': 's3_Min', 'value': 129, 'date': 'July 3-4'}, {'name': 's3', 'type': 's3_Min', 'value': 178, 'date': 'July 4-5'}, {'name': 's3', 'type': 's3_Min', 'value': 113, 'date': 'July 5-6'}, {'name': 's3', 'type': 's3_Min', 'value': 130, 'date': 'July 6-7'}, {'name': 's3', 'type': 's3_Min', 'value': 135, 'date': 'July 7-8'}, {'name': 'smb1', 'type': 'smb1_Min', 'value': 91, 'date': 'July 1-2'}, {'name': 'smb1', 'type': 'smb1_Min', 'value': 163, 'date': 'July 2-3'}, {'name': 'smb1', 'type': 'smb1_Min', 'value': 128, 'date': 'July 3-4'}, {'name': 'smb1', 'type': 'smb1_Min', 'value': 125, 'date': 'July 4-5'}, {'name': 'smb1', 'type': 'smb1_Min', 'value': 152, 'date': 'July 5-6'}, {'name': 'smb1', 'type': 'smb1_Min', 'value': 131, 'date': 'July 6-7'}, {'name': 'smb1', 'type': 'smb1_Min', 'value': 163, 'date': 'July 7-8'}, {'name': 'smb2', 'type': 'smb2_Min', 'value': 119, 'date': 'July 1-2'}, {'name': 'smb2', 'type': 'smb2_Min', 'value': 122, 'date': 'July 2-3'}, {'name': 'smb2', 'type': 'smb2_Min', 'value': 108, 'date': 'July 3-4'}, {'name': 'smb2', 'type': 'smb2_Min', 'value': 126, 'date': 'July 4-5'}, {'name': 'smb2', 'type': 'smb2_Min', 'value': 110, 'date': 'July 5-6'}, {'name': 'smb2', 'type': 'smb2_Min', 'value': 86, 'date': 'July 6-7'}, {'name': 'smb2', 'type': 'smb2_Min', 'value': 115, 'date': 'July 7-8'}, {'name': 'nfs3', 'type': 'nfs3_Bottom', 'value': 67, 'date': 'July 1-2'}, {'name': 'nfs3', 'type': 'nfs3_Bottom', 'value': 49, 'date': 'July 2-3'}, {'name': 'nfs3', 'type': 'nfs3_Bottom', 'value': 61, 'date': 'July 3-4'}, {'name': 'nfs3', 'type': 'nfs3_Bottom', 'value': 39, 'date': 'July 4-5'}, {'name': 'nfs3', 'type': 'nfs3_Bottom', 'value': 80, 'date': 'July 5-6'}, {'name': 'nfs3', 'type': 'nfs3_Bottom', 'value': 48, 'date': 'July 6-7'}, {'name': 'nfs3', 'type': 'nfs3_Bottom', 'value': 41, 'date': 'July 7-8'}, {'name': 'nfs4', 'type': 'nfs4_Bottom', 'value': 79, 'date': 'July 1-2'}, {'name': 'nfs4', 'type': 'nfs4_Bottom', 'value': 52, 'date': 'July 2-3'}, {'name': 'nfs4', 'type': 'nfs4_Bottom', 'value': 76, 'date': 'July 3-4'}, {'name': 'nfs4', 'type': 'nfs4_Bottom', 'value': 44, 'date': 'July 4-5'}, {'name': 'nfs4', 'type': 'nfs4_Bottom', 'value': 76, 'date': 'July 5-6'}, {'name': 'nfs4', 'type': 'nfs4_Bottom', 'value': 72, 'date': 'July 6-7'}, {'name': 'nfs4', 'type': 'nfs4_Bottom', 'value': 76, 'date': 'July 7-8'}, {'name': 's3', 'type': 's3_Bottom', 'value': 34, 'date': 'July 1-2'}, {'name': 's3', 'type': 's3_Bottom', 'value': 61, 'date': 'July 2-3'}, {'name': 's3', 'type': 's3_Bottom', 'value': 36, 'date': 'July 3-4'}, {'name': 's3', 'type': 's3_Bottom', 'value': 79, 'date': 'July 4-5'}, {'name': 's3', 'type': 's3_Bottom', 'value': 55, 'date': 'July 5-6'}, {'name': 's3', 'type': 's3_Bottom', 'value': 62, 'date': 'July 6-7'}, {'name': 's3', 'type': 's3_Bottom', 'value': 54, 'date': 'July 7-8'}, {'name': 'smb1', 'type': 'smb1_Bottom', 'value': 39, 'date': 'July 1-2'}, {'name': 'smb1', 'type': 'smb1_Bottom', 'value': 70, 'date': 'July 2-3'}, {'name': 'smb1', 'type': 'smb1_Bottom', 'value': 74, 'date': 'July 3-4'}, {'name': 'smb1', 'type': 'smb1_Bottom', 'value': 36, 'date': 'July 4-5'}, {'name': 'smb1', 'type': 'smb1_Bottom', 'value': 59, 'date': 'July 5-6'}, {'name': 'smb1', 'type': 'smb1_Bottom', 'value': 40, 'date': 'July 6-7'}, {'name': 'smb1', 'type': 'smb1_Bottom', 'value': 70, 'date': 'July 7-8'}, {'name': 'smb2', 'type': 'smb2_Bottom', 'value': 48, 'date': 'July 1-2'}, {'name': 'smb2', 'type': 'smb2_Bottom', 'value': 45, 'date': 'July 2-3'}, {'name': 'smb2', 'type': 'smb2_Bottom', 'value': 54, 'date': 'July 3-4'}, {'name': 'smb2', 'type': 'smb2_Bottom', 'value': 63, 'date': 'July 4-5'}, {'name': 'smb2', 'type': 'smb2_Bottom', 'value': 43, 'date': 'July 5-6'}, {'name': 'smb2', 'type': 'smb2_Bottom', 'value': 33, 'date': 'July 6-7'}, {'name': 'smb2', 'type': 'smb2_Bottom', 'value': 48, 'date': 'July 7-8'}]; 
  var config = {
    data: data,
    isStack: true,
    isGroup: true,
    groupField: 'name',
    xField: 'date',
    yField: 'value',
    seriesField: 'type',
    minColumnWidth: 20,
    maxColumnWidth: 20,

  colorField: 'type', // or seriesField in some cases
  color: ({ type }) => {
    if(type.includes('Avg')){
      return '#7CB5EC';
    }else if (type === 'Bottom') {
      return '#FFFFFF';
    }
    return '#E5F0FB';
  },

  };
  return <Column {...config} />;
};

export default ProtocolLatencyColumn;