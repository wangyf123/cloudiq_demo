import React from 'react';
import { Column } from '@ant-design/charts';
import _ from 'lodash';

const colorMaps = {
  head0: 'rgba(123, 180, 235, 0.5)',
  head1: 'rgba(67, 67, 67, 0.5)',
  head2: 'rgba(143,237,124, 0.5)',
  head3: 'rgba(247,162,90, 0.5)',
  head4: 'rgba(129,132,233, 0.5)',
  foot0: 'rgba(123, 180, 235, 0.5)',
  foot1: 'rgba(67, 67, 67, 0.5)',
  foot2: 'rgba(143,237,124, 0.5)',
  foot3: 'rgba(247,162,90, 0.5)',
  foot4: 'rgba(129,132,233, 0.5)',
  neck0: 'rgba(123, 180, 235)',
  neck1: 'rgba(67, 67, 67)',
  neck2: 'rgba(143,237,124)',
  neck3: 'rgba(247,162,90)',
  neck4: 'rgba(129,132,233)',
  bottom0: 'rgba(123, 180, 235,0)',
  bottom1: 'rgba(123, 180, 235,0)',
  bottom2: 'rgba(123, 180, 235,0)',
  bottom3: 'rgba(123, 180, 235,0)',
  bottom4: 'rgba(123, 180, 235,0)',
};

// const subTypes = Object.keys(colorMaps)

const ProtocolLatencyColumn: React.FC = () => {
  const mockData = [];
  /**
   * {
   *  date: '',
   *  subType: '',  // head0-4, neck0-4, foot0-4, bottom
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
  groups.forEach((group, index) => {
    dateArr.forEach((date) => {
      subTypes.forEach((subType) => {
        const temp = {
          date,
          subType: `${subType}${index}`,
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
      return colorMaps[subType];
    },
  };
  return <Column {...config} />;
};

export default ProtocolLatencyColumn;
