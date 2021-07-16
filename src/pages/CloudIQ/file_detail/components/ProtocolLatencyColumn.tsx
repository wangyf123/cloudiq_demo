import React from 'react';
import { Column } from '@ant-design/charts';
import _ from 'lodash';

const colors = ['#7BB4EB', '#434348', '#8FED7C', '#F7A25A', '#8184E9'];

const colorMaps = {
  head: {
    0: 'rgba(123, 180, 235, 0.5)',
    1: 'rgba(67, 67, 67, 0,5)',
    2: 'rgba(143,237,124, 0,5)',
    3: 'rgba(247,162,90, 0,5)',
    4: 'rgba(129,132,233, 0,5)',
  },
  foot: {
    0: 'rgba(123, 180, 235, 0.5)',
    1: 'rgba(67, 67, 67, 0,5)',
    2: 'rgba(143,237,124, 0,5)',
    3: 'rgba(247,162,90, 0,5)',
    4: 'rgba(129,132,233, 0,5)',
  },
  neck: {
    0: 'rgba(123, 180, 235)',
    1: 'rgba(67, 67, 67)',
    2: 'rgba(143,237,124)',
    3: 'rgba(247,162,90)',
    4: 'rgba(129,132,233)',
  },
  bottom: {
    0: 'rgba(123, 180, 235,0)',
    1: 'rgba(67, 67, 67,0)',
    2: 'rgba(143,237,124,0)',
    3: 'rgba(247,162,90,0)',
    4: 'rgba(129,132,233,0)',
  },
};

let index = -1;
const ProtocolLatencyColumn: React.FC = () => {
  const mockData = [];
  /**
   * {
   *  date: '',
   *  subType: '',  // head, neck, foot, bottom
   *  value: number,
   *  group: '' // nfs3 nfs4 s3 smb1 smb2
   * }
   */
  const dateArr = [
    'July 8-9',
    'July 9-10',
    'July 10-11',
    'July 11-12',
    'July 12-13',
    'July 13-14',
    'July 14-15',
  ];
  const subTypes = ['head', 'neck', 'foot', 'bottom'];
  const groups = ['nfs3', 'nfs4', 's3', 'smb1', 'smb2'];
  groups.forEach((group) => {
    dateArr.forEach((date) => {
      subTypes.forEach((subType) => {
        const temp = {
          date,
          subType,
          group,
          value: subType === 'neck' ? 20 : _.random(100, 200),
        };
        mockData.push(temp);
      });
    });
  });

  var config = {
    data: mockData,
    isStack: true,
    isGroup: true,
    legend: false,
    groupField: 'group',
    xField: 'date',
    yField: 'value',
    seriesField: 'subType',
    minColumnWidth: 20,
    maxColumnWidth: 20,
    colorField: 'group', // or seriesField in some cases
    color: ({ subType }) => {
      if (subType === 'neck') {
        return colors[0];
      } else if (subType === 'bottom') {
        return 'rgba(255,255,255, 0)';
      }
      return 'rgba(123, 180, 235, 0.5)'
    },
  };
  return <Column {...config} />;
};

export default ProtocolLatencyColumn;
