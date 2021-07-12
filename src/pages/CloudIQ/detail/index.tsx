import {
  DingdingOutlined,
  DownOutlined,
  EllipsisOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import {
  Badge,
  Space,
  Select,
  DatePicker,
  Row,
  Col,
  Button,
  Card,
  Statistic,
  Descriptions,
  Typography,
  Divider,
  Dropdown,
  Menu,
  Popover,
  Steps,
  Table,
  Tooltip,
  Empty,
} from 'antd';
import { GridContent, PageContainer, RouteContext } from '@ant-design/pro-layout';
import React, { Component, Fragment } from 'react';
import { Pie, WaterWave, Gauge, TagCloud, Map } from './components/Charts';
import classNames from 'classnames';
import type { Dispatch } from 'umi';
import { connect } from 'umi';
import type { AdvancedProfileData } from './data.d';
import styles from './style.less';
import OfflineDataBack from '../components/OfflineDataBack';
import OfflineData from './components/OfflineData';

const { Step } = Steps;
const ButtonGroup = Button.Group;
const queryString = require('query-string');

const configurationTabList = [
  {
    key: 'key1',
    tab: 'HOSTS',
  },
  {
    key: 'key2',
    tab: 'STORAGE',
  },
  {
    key: 'key3',
    tab: 'VIRTUAL MACHINES',
  },
  {
    key: 'key4',
    tab: 'STORAGE CONTAINERS',
  },
];

const offlineData = [];
for (let i = 0; i < 10; i += 1) {
  offlineData.push({
    name: `Stores ${i}`,
    cvr: Math.ceil(Math.random() * 9) / 10,
  });
}

const operationTabList = [
  {
    key: 'tab1',
    tab: 'Health Score',
  },
  {
    key: 'tab2',
    tab: 'Configuration',
  },
  {
    key: 'tab3',
    tab: 'Capacity',
  },
  {
    key: 'tab4',
    tab: 'Performance',
  },
];

const issueColumns = [
  {
    title: 'Total Issues',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '1',
    dataIndex: 'count',
    key: 'count',
  },
];

const issueData = [{key:1, name:'Components', count: 0},{key:2, name:'Configuration', count: 0},{key:3, name:'Capacity', count: 1},{key:4, name:'Performance', count: 0},{key:5, name:'Data Protection', count: 0},];

const configurationVirtualMachineColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Network Address',
    dataIndex: 'networkAddresses',
    key: '',
  },

  {
    title: 'Operating System',
    dataIndex: 'operatingSystem',
    key: 'operatingSystem',
  },

  {
    title: 'vCenter',
    dataIndex: 'vcenter',
    key: 'vcenter',
  },
  {
    title: 'ESXi',
    dataIndex: 'esxName',
    key: 'esxName',
  },
  {
    title: 'Cluster',
    dataIndex: 'cluster',
    key: 'cluster',
  },
];

const configurationStorageColumns = [

  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Logical Used (GB)',
    dataIndex: 'usedLogicalSize',
    key: 'usedLogicalSize',
  },

  {
    title: 'Provisioned/Total (GB)',
    dataIndex: 'totalLogicalSize',
    key: 'totalLogicalSize',
  },
  {
    title: 'Protection Policy',
    dataIndex: 'protectionPolicy',
    key: 'protectionPolicy',
  },
  {
    title: 'Performance Policy',
    dataIndex: 'performancePolicy',
    key: 'performancePolicy',
  },
  {
    title: 'Members (#)',
    dataIndex: 'members',
    key: 'members',
  },
  {
    title: 'NAS Server',
    dataIndex: 'nasServerName',
    key: 'nasServerName',
  },


];

const capacityColumns = [

  {
    title: '',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Used',
    dataIndex: 'used',
    key: 'used',
  },
  {
    title: 'Free',
    dataIndex: 'free',
    key: 'free',
  },
  {
    title: 'Usable',
    dataIndex: 'usable',
    key: 'usable',
  },
];

const capacityData = [{"name": "Total", 'used': '20 TB', 'free': '25 TB', 'usable': '45.0 TB' }, {"name": "Base", 'used': '20 TB', 'free': '10 TB', 'usable': '30 TB' },{"name": "On-Demand", 'used': '0 B', 'free': '15 TB', 'usable': '15 TB' },]

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Host Group Name',
    dataIndex: 'hostGroupName',
    key: 'host_group_name',
  },
  {
    title: 'OS',
    dataIndex: 'operatingSystem',
    key: 'os',
  },
  {
    title: 'Protocol',
    dataIndex: 'initiatorType',
    key: 'protocol',
  },
  {
    title: 'Volumes (#)',
    dataIndex: 'volumeCount',
    key: 'volumes',
  },
  {
    title: 'Initiators (#)',
    dataIndex: 'initiatorCount',
    key: 'initiators',
  },
  {
    title: 'Description (#)',
    dataIndex: 'description',
    key: 'description',
  },
];

interface AdvancedState {
  operationKey: string;
  configurationKey: string;
  tabActiveKey: string;
}

class Advanced extends Component<
  { loading: boolean; cloudIQDetail: AdvancedProfileData; dispatch: Dispatch },
  AdvancedState
> {
  public state: AdvancedState = {
    operationKey: 'tab1',
    configurationKey: 'key1',
    tabActiveKey: 'detail',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'cloudIQDetail/fetchAdvanced',
    });
  }

  onOperationTabChange = (key: string) => {
    this.setState({ operationKey: key });
  };

  onConfigurationTabChange = (key: string) => {
    this.setState({ configurationKey: key });
  };

  onTabChange = (tabActiveKey: string) => {
    this.setState({ tabActiveKey });
  };

  render() {
    const { operationKey, configurationKey, tabActiveKey } = this.state;
    const { cloudIQDetail, loading } = this.props;
    const { advancedOperation1, advancedOperation3 } = cloudIQDetail;

const advancedOperation2 = [{"id": "POWERSTORE-APEX_Block_Boston__HOST__f06b4f6b-c581-4dce-8faa-e5e2c2a57911", "storageSystemType": "APEX Block Storage Services", "storageSystemId": "APEX_Block_Boston", "systemId": "APEX_Block_Boston", "name": "APEX_host1.acme.com", "description": "\u2014", "operatingSystem": "ESXi", "hostGroupName": "APEX_HG1", "volumeCount": 5, "initiatorCount": 1, "initiatorType": "iSCSI"}, {"id": "POWERSTORE-APEX_Block_Boston__HOST__f06b4f6b-c581-4dce-8faa-e5e2c2a57912", "storageSystemType": "APEX Block Storage Services", "storageSystemId": "APEX_Block_Boston", "systemId": "APEX_Block_Boston", "name": "APEX_host2.acme.com", "description": "\u2014", "operatingSystem": "ESXi", "hostGroupName": "APEX_HG2", "volumeCount": 5, "initiatorCount": 1, "initiatorType": "iSCSI"}];

const configurationStorageData = [{"name": "fs_auto_1", "type": "File System", "usedLogicalSize": "1.5", "totalLogicalSize": "200.0", "protectionPolicy": "\u2014", "performancePolicy": "\u2014", "nasServerName": "NasCCT_dev__0"}, {"name": "fs_auto_2", "type": "File System", "usedLogicalSize": "1.5", "totalLogicalSize": "200.0", "protectionPolicy": "\u2014", "performancePolicy": "\u2014", "nasServerName": "NasCCT_dev__0"}, {"name": "fs_auto_3", "type": "File System", "usedLogicalSize": "1.5", "totalLogicalSize": "200.0", "protectionPolicy": "\u2014", "performancePolicy": "\u2014", "nasServerName": "NasCCT_dev__1"}, {"name": "fs_auto_4", "type": "File System", "usedLogicalSize": "1.5", "totalLogicalSize": "200.0", "protectionPolicy": "\u2014", "performancePolicy": "\u2014", "nasServerName": "NasCCT_dev__1"}, {"name": "fs_auto_1", "type": "File System", "usedLogicalSize": "1.5", "totalLogicalSize": "200.0", "protectionPolicy": "\u2014", "performancePolicy": "\u2014", "nasServerName": "NasCCT_dev__0"}, {"name": "fs_auto_2", "type": "File System", "usedLogicalSize": "1.5", "totalLogicalSize": "200.0", "protectionPolicy": "\u2014", "performancePolicy": "\u2014", "nasServerName": "NasCCT_dev__0"}, {"name": "fs_auto_3", "type": "File System", "usedLogicalSize": "1.5", "totalLogicalSize": "200.0", "protectionPolicy": "\u2014", "performancePolicy": "\u2014", "nasServerName": "NasCCT_dev__1"}, {"name": "fs_auto_4", "type": "File System", "usedLogicalSize": "1.5", "totalLogicalSize": "200.0", "protectionPolicy": "\u2014", "performancePolicy": "\u2014", "nasServerName": "NasCCT_dev__1"}]; 

const configurationVirtualMachineData = [{"name": "APEX_Block_Boston_VM2", "vcenter": "10.0.0.100", "networkAddresses": "10.0.2.2", "operatingSystem": "Red Hat Enterprise Linux 5 (64-bit)", "esxName": "APEX_Block_Boston_App1_Server1", "cluster": "APEX Cluster"}, {"name": "APEX_Block_Boston_VM1", "vcenter": "10.0.0.100", "networkAddresses": "10.0.2.1", "operatingSystem": "Red Hat Enterprise Linux 5 (64-bit)", "esxName": "APEX_Block_Boston_App1_Server1", "cluster": "APEX Cluster"}, {"name": "APEX_Block_Boston_VM3", "vcenter": "10.0.0.100", "networkAddresses": "10.4.103.3", "operatingSystem": "Red Hat Enterprise Linux 5 (64-bit)", "esxName": "APEX_Block_Boston_App1_Server1", "cluster": "APEX Cluster"}, {"name": "APEX_Block_Boston_VM4", "vcenter": "10.0.0.100", "networkAddresses": "10.4.102.4", "operatingSystem": "Red Hat Enterprise Linux 5 (64-bit)", "esxName": "APEX_Block_Boston_App1_Server1", "cluster": "APEX Cluster"}, {"name": "APEX_Block_Boston_VM5", "vcenter": "10.0.0.100", "networkAddresses": "10.4.101.5", "operatingSystem": "Red Hat Enterprise Linux 5 (64-bit)", "esxName": "APEX_Block_Boston_App1_Server1", "cluster": "APEX Cluster"}, {"name": "APEX_Block_Boston_VM6", "vcenter": "10.0.0.100", "networkAddresses": "10.4.100.6", "operatingSystem": "Red Hat Enterprise Linux 5 (64-bit)", "esxName": "APEX_Block_Boston_App1_Server1", "cluster": "APEX Cluster"}]; 

const configurationStorageContainerData = [
    {
      "id": "POWERSTORE-APEX_Block_Boston__STORAGE_CONTAINER__0a3d060f-9edc-479c-84fc-d536ff0a4c8a",
      "systemId": "APEX_Block_Boston",
      "storageSystemId": "APEX_Block_Boston",
      "name": "APEX Block Datastore",
      "usedPercent": 22.1,
      "quota": 0.0,
      "totalSize": "12,627.2",
      "freeSize": "9,833.3"
    }
  ];

const configurationStorageContainerColumns = [

  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Used (%)',
    dataIndex: 'usedPercent',
    key: 'usedPercent',
  },

  {
    title: 'Quota (GB)',
    dataIndex: 'quota',
    key: 'quota',
  },
  {
    title: 'Provisioned (GB)',
    dataIndex: 'totalSize',
    key: 'totalSize',
  },
  {
    title: 'Free (GB)',
    dataIndex: 'freeSize',
    key: 'freeSize',
  },

];

const forecastData = [{"x": 1519240200000, "y1": 1396.19, "y2": 3227.47, "y3": 183.48}, {"x": 1519240500000, "y1": 1281.37, "y2": 3227.47, "y3": 183.48}, {"x": 1519240800000, "y1": 881.88, "y2": 3227.47, "y3": 96.03}, {"x": 1519241100000, "y1": 918.28, "y2": 3227.47, "y3": 96.03}, {"x": 1519241400000, "y1": 981.12, "y2": 3227.47, "y3": 96.03}, {"x": 1519241700000, "y1": 637.79, "y2": 3227.47, "y3": 96.03}, {"x": 1519242000000, "y1": 1400.43, "y2": 3227.47, "y3": 96.03}, {"x": 1519242300000, "y1": 1384.51, "y2": 3227.47, "y3": 96.03}, {"x": 1519242600000, "y1": 753.6, "y2": 3343.57, "y3": 89.71}, {"x": 1519242900000, "y1": 759.51, "y2": 3343.57, "y3": 89.71}, {"x": 1519243200000, "y1": 907.75, "y2": 3343.57, "y3": 89.71}, {"x": 1519243500000, "y1": 751.59, "y2": 3343.57, "y3": 89.71}, {"x": 1519243800000, "y1": 856.52, "y2": 3343.57, "y3": 89.71}, {"x": 1519244100000, "y1": 1450.66, "y2": 3343.57, "y3": 89.71}, {"x": 1519244400000, "y1": 773.18, "y2": 3343.57, "y3": 89.71}, {"x": 1519244700000, "y1": 1629.7, "y2": 3343.57, "y3": 89.71}, {"x": 1519245000000, "y1": 818.57, "y2": 3343.57, "y3": 89.71}, {"x": 1519245300000, "y1": 629.32, "y2": 3343.57, "y3": 89.71}, {"x": 1519245600000, "y1": 1057.27, "y2": 3343.57, "y3": 89.71}, {"x": 1519245900000, "y1": 901.89, "y2": 3343.57, "y3": 89.71}, {"x": 1519246200000, "y1": 662.54, "y2": 3343.57, "y3": 89.71}, {"x": 1519246500000, "y1": 1112.19, "y2": 3343.57, "y3": 133.99}, {"x": 1519246800000, "y1": 941.52, "y2": 3197.96, "y3": 133.99}, {"x": 1519247100000, "y1": 780.1, "y2": 3197.96, "y3": 133.99}, {"x": 1519247400000, "y1": 933.41, "y2": 3197.96, "y3": 133.99}, {"x": 1519247700000, "y1": 922.3, "y2": 3197.96, "y3": 133.99}, {"x": 1519248000000, "y1": 796.19, "y2": 3197.96, "y3": 114.52}, {"x": 1519248300000, "y1": 877.74, "y2": 3197.96, "y3": 114.52}, {"x": 1519248600000, "y1": 1406, "y2": 3197.96, "y3": 114.52}, {"x": 1519248900000, "y1": 877.83, "y2": 3197.96, "y3": 114.52}, {"x": 1519249200000, "y1": 755.52, "y2": 3197.96, "y3": 114.52}, {"x": 1519249500000, "y1": 830.42, "y2": 3384.87, "y3": 114.52}, {"x": 1519249800000, "y1": 673.85, "y2": 3384.87, "y3": 114.52}, {"x": 1519250100000, "y1": 883.02, "y2": 3384.87, "y3": 114.52}, {"x": 1519250400000, "y1": 890.62, "y2": 3384.87, "y3": 114.52}, {"x": 1519250700000, "y1": 868.22, "y2": 3384.87, "y3": 114.52}, {"x": 1519251000000, "y1": 755.6, "y2": 3384.87, "y3": 114.52}, {"x": 1519251300000, "y1": 1083.97, "y2": 3384.87, "y3": 114.52}, {"x": 1519251600000, "y1": 716.25, "y2": 3384.87, "y3": 105.99}, {"x": 1519251900000, "y1": 1043.54, "y2": 3384.87, "y3": 105.99}, {"x": 1519252200000, "y1": 876.17, "y2": 3384.87, "y3": 105.99}, {"x": 1519252500000, "y1": 846.8, "y2": 3384.87, "y3": 105.99}, {"x": 1519252800000, "y1": 1017.36, "y2": 3384.87, "y3": 105.99}, {"x": 1519253100000, "y1": 998.33, "y2": 3384.87, "y3": 105.99}, {"x": 1519253400000, "y1": 790.31, "y2": 3130.94, "y3": 105.99}, {"x": 1519253700000, "y1": 1039.57, "y2": 3130.94, "y3": 105.99}, {"x": 1519254000000, "y1": 1296.99, "y2": 3130.94, "y3": 105.99}, {"x": 1519254300000, "y1": 793.52, "y2": 3130.94, "y3": 105.99}, {"x": 1519254600000, "y1": 893.85, "y2": 3130.94, "y3": 105.99}, {"x": 1519254900000, "y1": 802.32, "y2": 3130.94, "y3": 105.99}, {"x": 1519255200000, "y1": 643.98, "y2": 3130.94, "y3": 96.48}, {"x": 1519255500000, "y1": 869.28, "y2": 3130.94, "y3": 96.48}, {"x": 1519255800000, "y1": 1035.2, "y2": 3130.94, "y3": 96.48}, {"x": 1519256100000, "y1": 912.89, "y2": 3130.94, "y3": 96.48}, {"x": 1519256400000, "y1": 705.85, "y2": 3130.94, "y3": 96.48}, {"x": 1519256700000, "y1": 769.86, "y2": 3130.94, "y3": 96.48}, {"x": 1519257000000, "y1": 905.95, "y2": 3130.94, "y3": 96.48}, {"x": 1519257300000, "y1": 1068.6, "y2": 2928.42, "y3": 96.48}, {"x": 1519257600000, "y1": 944.71, "y2": 2928.42, "y3": 96.48}, {"x": 1519257900000, "y1": 913.87, "y2": 2842.13, "y3": 96.48}, {"x": 1519258200000, "y1": 826.16, "y2": 2842.13, "y3": 96.48}, {"x": 1519258500000, "y1": 1092.94, "y2": 2842.13, "y3": 96.48}, {"x": 1519258800000, "y1": 701.02, "y2": 2842.13, "y3": 91.13}, {"x": 1519259100000, "y1": 1033.49, "y2": 2842.13, "y3": 91.13}, {"x": 1519259400000, "y1": 1488.56, "y2": 2842.13, "y3": 91.13}, {"x": 1519259700000, "y1": 773.99, "y2": 2842.13, "y3": 91.13}, {"x": 1519260000000, "y1": 1089.56, "y2": 2842.13, "y3": 91.13}, {"x": 1519260300000, "y1": 699.4, "y2": 2842.13, "y3": 91.13}, {"x": 1519260600000, "y1": 652.07, "y2": 2836.24, "y3": 91.13}, {"x": 1519260900000, "y1": 950.65, "y2": 2836.24, "y3": 91.13}, {"x": 1519261200000, "y1": 919.9, "y2": 2836.24, "y3": 91.13}, {"x": 1519261500000, "y1": 779.54, "y2": 2836.24, "y3": 91.13}, {"x": 1519261800000, "y1": 801.86, "y2": 2836.24, "y3": 91.13}, {"x": 1519262100000, "y1": 955.91, "y2": 2836.24, "y3": 91.13}, {"x": 1519262400000, "y1": 648.14, "y2": 2836.24, "y3": 91.13}, {"x": 1519262700000, "y1": 1266.46, "y2": 2836.24, "y3": 102.53}, {"x": 1519263000000, "y1": 821.16, "y2": 3487.54, "y3": 102.53}, {"x": 1519263300000, "y1": 1017.4, "y2": 3487.54, "y3": 102.53}, {"x": 1519263600000, "y1": 747.94, "y2": 3487.54, "y3": 102.53}, {"x": 1519263900000, "y1": 1040.29, "y2": 3487.54, "y3": 102.53}, {"x": 1519264200000, "y1": 668.96, "y2": 3487.54, "y3": 102.53}, {"x": 1519264500000, "y1": 1024.27, "y2": 3487.54, "y3": 102.53}, {"x": 1519264800000, "y1": 1045.35, "y2": 3487.54, "y3": 102.53}, {"x": 1519265100000, "y1": 909.57, "y2": 3487.54, "y3": 102.53}, {"x": 1519265400000, "y1": 948.4, "y2": 3487.54, "y3": 102.53}, {"x": 1519265700000, "y1": 1301.66, "y2": 3487.54, "y3": 102.53}, {"x": 1519266000000, "y1": 790.06, "y2": 3487.54, "y3": 102.53}, {"x": 1519266300000, "y1": 1457.88, "y2": 3487.54, "y3": 102.53}, {"x": 1519266600000, "y1": 745.55, "y2": 3487.54, "y3": 160.28}, {"x": 1519266900000, "y1": 822.04, "y2": 2787.91, "y3": 160.28}, {"x": 1519267200000, "y1": 1014.75, "y2": 2787.91, "y3": 160.28}, {"x": 1519267500000, "y1": 1138.43, "y2": 2787.91, "y3": 0}, {"x": 1519267800000, "y1": 620.03, "y2": 2787.91, "y3": 0}, {"x": 1519268100000, "y1": 1274.69, "y2": 2849.3, "y3": 0}, {"x": 1519268400000, "y1": 1003.91, "y2": 2849.3, "y3": 0}, {"x": 1519268700000, "y1": 798.69, "y2": 2849.3, "y3": 0}, {"x": 1519269000000, "y1": 1135.59, "y2": 2849.3, "y3": 0}, {"x": 1519269300000, "y1": 1188.18, "y2": 2849.3, "y3": 0}, {"x": 1519269600000, "y1": 547.21, "y2": 2849.3, "y3": 0}, {"x": 1519269900000, "y1": 1370.92, "y2": 2849.3, "y3": 0}, {"x": 1519270200000, "y1": 787, "y2": 2849.3, "y3": 0}, {"x": 1519270500000, "y1": 909.02, "y2": 2849.3, "y3": 0}, {"x": 1519270800000, "y1": 725.78, "y2": 2849.3, "y3": 0}, {"x": 1519271100000, "y1": 856.01, "y2": 2849.3, "y3": 0}, {"x": 1519271400000, "y1": 591.78, "y2": 2849.3, "y3": 0}, {"x": 1519271700000, "y1": 940.88, "y2": 3020.46, "y3": 0}, {"x": 1519272000000, "y1": 782.49, "y2": 3020.46, "y3": 0}, {"x": 1519272300000, "y1": 697, "y2": 3020.46, "y3": 0}, {"x": 1519272600000, "y1": 587.05, "y2": 3020.46, "y3": 0}, {"x": 1519272900000, "y1": 831.49, "y2": 3020.46, "y3": 114.66}, {"x": 1519273200000, "y1": 612.57, "y2": 3020.46, "y3": 114.66}, {"x": 1519273500000, "y1": 2196.99, "y2": 3020.46, "y3": 114.66}, {"x": 1519273800000, "y1": 2151.76, "y2": 3110.32, "y3": 114.66}, {"x": 1519274100000, "y1": 739.74, "y2": 8509.86, "y3": 114.66}, {"x": 1519274400000, "y1": 939.65, "y2": 8509.86, "y3": 114.66}, {"x": 1519274700000, "y1": 4993.16, "y2": 8509.86, "y3": 114.66}, {"x": 1519275000000, "y1": 6744.44, "y2": 8509.86, "y3": 114.66}, {"x": 1519275300000, "y1": 6087.46, "y2": 8509.86, "y3": 114.66}, {"x": 1519275600000, "y1": 6960.18, "y2": 8509.86, "y3": 114.66}, {"x": 1519275900000, "y1": 6746.65, "y2": 8509.86, "y3": 114.66}, {"x": 1519276200000, "y1": 6144.58, "y2": 8509.86, "y3": 114.66}, {"x": 1519276500000, "y1": 4817.29, "y2": 8509.86, "y3": 114.66}, {"x": 1519276800000, "y1": 1490.55, "y2": 8509.86, "y3": 130.88}, {"x": 1519277100000, "y1": 998.29, "y2": 8509.86, "y3": 163.32}, {"x": 1519277400000, "y1": 799.92, "y2": 8509.86, "y3": 163.32}, {"x": 1519277700000, "y1": 613.86, "y2": 8509.86, "y3": 87.54}, {"x": 1519278000000, "y1": 1589.86, "y2": 3963.9, "y3": 0}, {"x": 1519278300000, "y1": 800.65, "y2": 3366.89, "y3": 0}, {"x": 1519278600000, "y1": 735.31, "y2": 3226.82, "y3": 0}, {"x": 1519278900000, "y1": 753.62, "y2": 3226.82, "y3": 0}, {"x": 1519279200000, "y1": 840.21, "y2": 3226.82, "y3": 0}, {"x": 1519279500000, "y1": 1179.81, "y2": 3226.82, "y3": 0}, {"x": 1519279800000, "y1": 1259.29, "y2": 3031.18, "y3": 0}, {"x": 1519280100000, "y1": 967.04, "y2": 3031.18, "y3": 0}, {"x": 1519280400000, "y1": 904.28, "y2": 3031.18, "y3": 0}, {"x": 1519280700000, "y1": 1264.13, "y2": 3031.18, "y3": 0}, {"x": 1519281000000, "y1": 1013.13, "y2": 3031.18, "y3": 0}, {"x": 1519281300000, "y1": 869.13, "y2": 3031.18, "y3": 0}, {"x": 1519281600000, "y1": 945.45, "y2": 3031.18, "y3": 0}, {"x": 1519281900000, "y1": 893.19, "y2": 3031.18, "y3": 143.13}, {"x": 1519282200000, "y1": 658.69, "y2": 3031.18, "y3": 143.13}, {"x": 1519282500000, "y1": 631.17, "y2": 3143.64, "y3": 143.13}, {"x": 1519282800000, "y1": 646.57, "y2": 3143.64, "y3": 143.13}, {"x": 1519283100000, "y1": 656.75, "y2": 3143.64, "y3": 143.13}, {"x": 1519283400000, "y1": 638.85, "y2": 3143.64, "y3": 143.13}, {"x": 1519283700000, "y1": 655.48, "y2": 3143.64, "y3": 143.13}, {"x": 1519284000000, "y1": 626.92, "y2": 3143.64, "y3": 143.13}, {"x": 1519284300000, "y1": 737.72, "y2": 3143.64, "y3": 143.13}, {"x": 1519284600000, "y1": 680.93, "y2": 3143.64, "y3": 143.13}, {"x": 1519284900000, "y1": 648.43, "y2": 3143.64, "y3": 143.13}, {"x": 1519285200000, "y1": 634.71, "y2": 3143.64, "y3": 143.13}, {"x": 1519285500000, "y1": 606.86, "y2": 3143.64, "y3": 143.13}, {"x": 1519285800000, "y1": 935.57, "y2": 3143.64, "y3": 143.13}, {"x": 1519286100000, "y1": 674, "y2": 3143.64, "y3": 157.87}, {"x": 1519286400000, "y1": 763.24, "y2": 3143.64, "y3": 157.87}, {"x": 1519286700000, "y1": 715.47, "y2": 2948.54, "y3": 157.87}, {"x": 1519287000000, "y1": 938.59, "y2": 2948.54, "y3": 157.87}, {"x": 1519287300000, "y1": 1091.93, "y2": 2948.54, "y3": 172.1}, {"x": 1519287600000, "y1": 840.74, "y2": 2948.54, "y3": 172.1}, {"x": 1519287900000, "y1": 1134.46, "y2": 2948.54, "y3": 172.1}, {"x": 1519288200000, "y1": 886.82, "y2": 2948.54, "y3": 172.1}, {"x": 1519288500000, "y1": 620.58, "y2": 2948.54, "y3": 113.24}, {"x": 1519288800000, "y1": 1036.38, "y2": 2948.54, "y3": 113.24}, {"x": 1519289100000, "y1": 800.32, "y2": 2948.54, "y3": 113.24}, {"x": 1519289400000, "y1": 891.81, "y2": 2948.54, "y3": 113.24}, {"x": 1519289700000, "y1": 866.59, "y2": 3243.43, "y3": 113.24}, {"x": 1519290000000, "y1": 784.04, "y2": 3243.43, "y3": 113.24}, {"x": 1519290300000, "y1": 655.91, "y2": 3243.43, "y3": 113.24}, {"x": 1519290600000, "y1": 802, "y2": 3243.43, "y3": 113.24}, {"x": 1519290900000, "y1": 1104.78, "y2": 3243.43, "y3": 113.24}, {"x": 1519291200000, "y1": 816.81, "y2": 3243.43, "y3": 113.24}, {"x": 1519291500000, "y1": 872.88, "y2": 3243.43, "y3": 113.24}, {"x": 1519291800000, "y1": 11241.1, "y2": 3243.43, "y3": 113.24}, {"x": 1519292100000, "y1": 10925.39, "y2": 3243.43, "y3": 113.24}, {"x": 1519292400000, "y1": 8055.24, "y2": 3243.43, "y3": 191.72}, {"x": 1519292700000, "y1": 11069.31, "y2": 3243.43, "y3": 193.97}, {"x": 1519293000000, "y1": 10981.63, "y2": 3243.43, "y3": 193.97}, {"x": 1519293300000, "y1": 8061.8, "y2": 3243.43, "y3": 193.97}, {"x": 1519293600000, "y1": 6082.89, "y2": 3088.4, "y3": 193.97}, {"x": 1519293900000, "y1": 6035.76, "y2": 2826.84, "y3": 193.97}, {"x": 1519294200000, "y1": 5031.84, "y2": 2826.84, "y3": 193.97}, {"x": 1519294500000, "y1": 950.65, "y2": 2826.84, "y3": 193.97}, {"x": 1519294800000, "y1": 953.25, "y2": 2826.84, "y3": 193.97}, {"x": 1519295100000, "y1": 975.65, "y2": 2826.84, "y3": 193.97}, {"x": 1519295400000, "y1": 958.53, "y2": 2826.84, "y3": 193.97}, {"x": 1519295700000, "y1": 746.82, "y2": 3631.52, "y3": 193.97}, {"x": 1519296000000, "y1": 1108.68, "y2": 3753.5, "y3": 220.61}, {"x": 1519296300000, "y1": 805.56, "y2": 3950.4, "y3": 220.61}, {"x": 1519296600000, "y1": 786.46, "y2": 4014.29, "y3": 220.61}, {"x": 1519296900000, "y1": 708.63, "y2": 4014.29, "y3": 220.61}, {"x": 1519297200000, "y1": 825.26, "y2": 4014.29, "y3": 220.61}, {"x": 1519297500000, "y1": 609.38, "y2": 4014.29, "y3": 248.73}, {"x": 1519297800000, "y1": 734.97, "y2": 4014.29, "y3": 248.73}, {"x": 1519298100000, "y1": 805.39, "y2": 4014.29, "y3": 248.73}, {"x": 1519298400000, "y1": 725.94, "y2": 4014.29, "y3": 239.26}, {"x": 1519298700000, "y1": 960.13, "y2": 4014.29, "y3": 239.26}, {"x": 1519299000000, "y1": 933.37, "y2": 4014.29, "y3": 239.26}, {"x": 1519299300000, "y1": 720.91, "y2": 4014.29, "y3": 162.83}, {"x": 1519299600000, "y1": 976.77, "y2": 4014.29, "y3": 162.83}, {"x": 1519299900000, "y1": 1040.94, "y2": 4014.29, "y3": 162.83}, {"x": 1519300200000, "y1": 667.18, "y2": 4110.6, "y3": 162.83}, {"x": 1519300500000, "y1": 799.45, "y2": 4522.38, "y3": 162.83}, {"x": 1519300800000, "y1": 942.19, "y2": 4522.38, "y3": 162.83}, {"x": 1519301100000, "y1": 651.39, "y2": 4522.38, "y3": 162.83}, {"x": 1519301400000, "y1": 1118.03, "y2": 4522.38, "y3": 162.83}, {"x": 1519301700000, "y1": 700.73, "y2": 4522.38, "y3": 162.83}, {"x": 1519302000000, "y1": 765.5, "y2": 4522.38, "y3": 162.83}, {"x": 1519302300000, "y1": 1244.45, "y2": 4522.38, "y3": 162.83}, {"x": 1519302600000, "y1": 1451.72, "y2": 4522.38, "y3": 162.83}, {"x": 1519302900000, "y1": 850.84, "y2": 4522.38, "y3": 155.9}, {"x": 1519303200000, "y1": 867.95, "y2": 4522.38, "y3": 155.9}, {"x": 1519303500000, "y1": 890.64, "y2": 4522.38, "y3": 155.9}, {"x": 1519303800000, "y1": 850.45, "y2": 4522.38, "y3": 155.9}, {"x": 1519304100000, "y1": 778.04, "y2": 4522.38, "y3": 155.9}, {"x": 1519304400000, "y1": 670.31, "y2": 2927.11, "y3": 155.9}, {"x": 1519304700000, "y1": 716.09, "y2": 2927.11, "y3": 137.74}, {"x": 1519305000000, "y1": 827.09, "y2": 2927.11, "y3": 137.74}, {"x": 1519305300000, "y1": 1194.2, "y2": 2927.11, "y3": 137.74}, {"x": 1519305600000, "y1": 874.82, "y2": 2927.11, "y3": 137.74}, {"x": 1519305900000, "y1": 936.32, "y2": 2927.11, "y3": 137.74}, {"x": 1519306200000, "y1": 1151.8, "y2": 2927.11, "y3": 137.74}, {"x": 1519306500000, "y1": 843.76, "y2": 2927.11, "y3": 137.74}, {"x": 1519306800000, "y1": 775.14, "y2": 2926.47, "y3": 137.74}, {"x": 1519307100000, "y1": 1006.96, "y2": 2926.47, "y3": 137.74}, {"x": 1519307400000, "y1": 717, "y2": 2926.47, "y3": 137.74}, {"x": 1519307700000, "y1": 771.57, "y2": 2926.47, "y3": 137.74}, {"x": 1519308000000, "y1": 798.56, "y2": 3051.48, "y3": 137.74}, {"x": 1519308300000, "y1": 666.46, "y2": 3051.48, "y3": 137.74}, {"x": 1519308600000, "y1": 903.99, "y2": 3051.48, "y3": 214.27}, {"x": 1519308900000, "y1": 975.38, "y2": 3051.48, "y3": 214.27}, {"x": 1519309200000, "y1": 807.78, "y2": 3051.48, "y3": 214.27}, {"x": 1519309500000, "y1": 882.99, "y2": 3051.48, "y3": 214.27}, {"x": 1519309800000, "y1": 1064.52, "y2": 3051.48, "y3": 214.27}, {"x": 1519310100000, "y1": 701.8, "y2": 3051.48, "y3": 153.79}, {"x": 1519310400000, "y1": 853.72, "y2": 3051.48, "y3": 153.79}, {"x": 1519310700000, "y1": 828.97, "y2": 3051.48, "y3": 153.79}, {"x": 1519311000000, "y1": 759.72, "y2": 3051.48, "y3": 153.79}, {"x": 1519311300000, "y1": 850.79, "y2": 3281.16, "y3": 153.79}, {"x": 1519311600000, "y1": 822.96, "y2": 3281.16, "y3": 153.79}, {"x": 1519311900000, "y1": 654.82, "y2": 3281.16, "y3": 117.56}, {"x": 1519312200000, "y1": 769.32, "y2": 3281.16, "y3": 117.56}, {"x": 1519312500000, "y1": 928.04, "y2": 3281.16, "y3": 117.56}, {"x": 1519312800000, "y1": 814.64, "y2": 3281.16, "y3": 117.56}, {"x": 1519313100000, "y1": 1243.64, "y2": 3281.16, "y3": 117.56}, {"x": 1519313400000, "y1": 1066.98, "y2": 3281.16, "y3": 117.56}, {"x": 1519313700000, "y1": 701.15, "y2": 3281.16, "y3": 117.56}, {"x": 1519314000000, "y1": 633.03, "y2": 3281.16, "y3": 117.56}, {"x": 1519314300000, "y1": 953.66, "y2": 3281.16, "y3": 117.56}, {"x": 1519314600000, "y1": 755.24, "y2": 3281.16, "y3": 117.56}, {"x": 1519314900000, "y1": 912.78, "y2": 3364.5, "y3": 117.56}, {"x": 1519315200000, "y1": 662.15, "y2": 3364.5, "y3": 117.56}, {"x": 1519315500000, "y1": 711.76, "y2": 3364.5, "y3": 117.56}, {"x": 1519315800000, "y1": 769.53, "y2": 3364.5, "y3": 154.53}, {"x": 1519316100000, "y1": 1439.89, "y2": 3364.5, "y3": 154.53}, {"x": 1519316400000, "y1": 780.66, "y2": 3364.5, "y3": 154.53}, {"x": 1519316700000, "y1": 853.98, "y2": 3364.5, "y3": 154.53}, {"x": 1519317000000, "y1": 1122.35, "y2": 3364.5, "y3": 163.78}, {"x": 1519317300000, "y1": 787.89, "y2": 3364.5, "y3": 163.78}, {"x": 1519317600000, "y1": 1022.89, "y2": 3364.5, "y3": 163.78}, {"x": 1519317900000, "y1": 993.64, "y2": 3364.5, "y3": 163.78}, {"x": 1519318200000, "y1": 924.66, "y2": 3364.5, "y3": 163.78}, {"x": 1519318500000, "y1": 816.77, "y2": 3364.5, "y3": 163.78}, {"x": 1519318800000, "y1": 926.06, "y2": 2933.54, "y3": 163.78}, {"x": 1519319100000, "y1": 635.15, "y2": 2933.54, "y3": 163.78}, {"x": 1519319400000, "y1": 842.06, "y2": 2933.54, "y3": 163.78}, {"x": 1519319700000, "y1": 793.31, "y2": 2933.54, "y3": 163.78}, {"x": 1519320000000, "y1": 977.05, "y2": 2933.54, "y3": 129.24}, {"x": 1519320300000, "y1": 815.68, "y2": 2933.54, "y3": 129.24}, {"x": 1519320600000, "y1": 1024.72, "y2": 2933.54, "y3": 129.24}, {"x": 1519320900000, "y1": 623.62, "y2": 2933.54, "y3": 129.24}, {"x": 1519321200000, "y1": 983.54, "y2": 2933.54, "y3": 129.24}, {"x": 1519321500000, "y1": 752.66, "y2": 2933.54, "y3": 129.24}, {"x": 1519321800000, "y1": 1636.73, "y2": 2933.54, "y3": 129.24}, {"x": 1519322100000, "y1": 818.2, "y2": 2933.54, "y3": 129.24}, {"x": 1519322400000, "y1": 766.17, "y2": 2888.12, "y3": 129.24}, {"x": 1519322700000, "y1": 762.95, "y2": 2888.12, "y3": 102.06}, {"x": 1519323000000, "y1": 1045.39, "y2": 2888.12, "y3": 102.06}, {"x": 1519323300000, "y1": 1061.03, "y2": 2888.12, "y3": 102.06}, {"x": 1519323600000, "y1": 691.85, "y2": 2888.12, "y3": 102.06}, {"x": 1519323900000, "y1": 935.37, "y2": 2888.12, "y3": 102.06}, {"x": 1519324200000, "y1": 1072.35, "y2": 2888.12, "y3": 102.06}, {"x": 1519324500000, "y1": 807.81, "y2": 2888.12, "y3": 102.06}, {"x": 1519324800000, "y1": 1000.18, "y2": 2888.12, "y3": 102.06}, {"x": 1519325100000, "y1": 934.38, "y2": 2888.12, "y3": 102.06}, {"x": 1519325400000, "y1": 678.33, "y2": 2888.12, "y3": 102.06}, {"x": 1519325700000, "y1": 879.06, "y2": 2888.12, "y3": 102.06}, {"x": 1519326000000, "y1": 697.9, "y2": 2825.29, "y3": 102.06}, {"x": 1519326300000, "y1": 640.62, "y2": 2825.29, "y3": 102.06}];

const offlineChartData = [];
for (let i = 0; i < 12; i += 1) {
  var date = new Date();
  date.setMonth(i+1)
  offlineChartData.push({
    x: (i+1) + '.Jun',
    y1: Math.floor(Math.random() * 60) + 40,
  });
}

    const configurationContentList = {
      key1: (
        <Table
          pagination={false}
          loading={loading}
          dataSource={advancedOperation2}
          columns={columns}
        />
      ),
      key2: (
        <Table
          pagination={false}
          loading={loading}
          dataSource={configurationStorageData}
          columns={configurationStorageColumns}
        />
      ),
      key3: (
        <Table
          pagination={false}
          loading={loading}
          dataSource={configurationVirtualMachineData}
          columns={configurationVirtualMachineColumns}
        />
      ),
      key4: (
        <Table
          pagination={false}
          loading={loading}
          dataSource={configurationStorageContainerData}
          columns={configurationStorageColumns}
        />
      ),

    };

    const contentList = {
      tab1: (
<>
<Row gutter={24} >
  <Col span={6}>
                    <Pie
                      animate={false}
                      color='#6EA204'
                      percent={95}
                      total={<Typography.Title level={1} style={{ color: '#6EA204' }}>{ queryString.parse(window.location.search).name == "APEX-File-Austin"? 100:95 }</Typography.Title>}
                      subTitle={<Typography.Text strong={true} style={{ color: '#6EA204' }}>GOOD</Typography.Text>}
                      style={{ marginTop: 20 }}
                      height={150}
                      lineWidth={8}
                    />
  </Col>
  <Col span={18}>
    <Typography.Title level={3}>Capacity is the top health check category impacting APEX-Block-Boston's health score.</Typography.Title>
  </Col>
</Row>

<Typography.Text style={{ marginTop: 100 }}>Health Issues</Typography.Text>
<Row title="Health Issues" gutter={24}>
<Col span={6}>
        <Table
          bordered
          pagination={false}
          loading={loading}
          dataSource={issueData}
          columns={issueColumns}
        />
</Col>
<Col span={18}>
        <Card
          title="Capacity"
          headStyle={{ background: '#6EA204' }}
          border={true}
        >
          <Row>
            <Col span={2}>-5</Col>
            <Col span={22}>about 6 hours ago The Cluster 'FNM00183501337' is predicted to run out of space within a quarter.</Col>
          </Row>
          <Divider/>
          <Row>
            <Col span={2}><Typography.Text strong={true}>Resolution:</Typography.Text></Col>            
            <Col span={22}>This information has been sent to the DTMS Account Team, and they will reach out to you should any action be required.</Col>
          </Row>
        </Card>

</Col>
</Row>
          <OfflineDataBack
            offlineChartData={offlineChartData}
          />

</>
      ),
      tab2: (

            <Card
              className={styles.tabsCard}
              bordered={false}
              tabList={configurationTabList}
              onTabChange={this.onConfigurationTabChange}
            >
              {configurationContentList[configurationKey]}
            </Card>
      ),
      tab3: (

        <Card title="Effective Capacity" extra={<a href="#">MANAGE SUBSCRIPTIONS</a>}>
        <Table
          pagination={false}
          loading={loading}
          dataSource={capacityData}
          columns={capacityColumns}
          footer={() => 'Buffer = 15 TB'}
        />
        <Divider />
        <Space>
          <Typography.Title level={3}>Capacity Forecast</Typography.Title>
          <Typography.Title level={5}>Predicted Date to Full Aug 2, 2021</Typography.Title>
        </Space>
        <br/>
        <Space>
          <Typography.Title level={5}>From</Typography.Title>
          <Select defaultValue="3 month ago">
            {
              ["Yesterday", "1 week ago", "1 month ago", "3 month ago", "6 month ago", "1 year ago", "2 year ago", "Custom"].map( item => (
                <Select.Option key={item}>{item}</Select.Option>
              ) )
            }
          </Select>
          <Typography.Title level={5}>To</Typography.Title>
          <Select defaultValue="Predicted Full">
            {
              ["Today", "Tommorrow", "1 week from today", "1 month from today", "3 month from today", "6 month from today", "Predicted Full", "Custom"].map( item => (
                <Select.Option key={item}>{item}</Select.Option>
              ) )
            }
          </Select>
          <Typography.Title level={5}>Actual Growth per Month</Typography.Title>
          <Typography.Text>(13.3 TB) 24.6 % of Total</Typography.Text>
        </Space>

          <OfflineDataBack
            offlineChartData={offlineChartData}
          />


        </Card>
      ),
      tab4: (

            <Card
              className={styles.tabsCard}
              bordered={false}
              tabList={configurationTabList}
              onTabChange={this.onConfigurationTabChange}
            >   
              {configurationContentList[configurationKey]}
            </Card>
      ),
    };
    return (
      <PageContainer
      >
        <div className={styles.main}>
          <GridContent>
            <Card
              className={styles.tabsCard}
              bordered={false}
              tabList={operationTabList}
              onTabChange={this.onOperationTabChange}
            >
              {contentList[operationKey]}
            </Card>
          </GridContent>
        </div>
      </PageContainer>
    );
  }
}

export default connect(
  ({
    cloudIQDetail,
    loading,
  }: {
    cloudIQDetail: AdvancedProfileData;
    loading: {
      effects: Record<string, boolean>;
    };
  }) => ({
    cloudIQDetail,
    loading: loading.effects['cloudIQDetail/fetchAdvanced'],
  }),
)(Advanced);
