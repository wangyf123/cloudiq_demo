import {
  Space,
  Select,
  Row,
  Col,
  Card,
  Typography,
  Divider,
  Descriptions,
  Table,
} from 'antd';
import { GridContent, PageContainer } from '@ant-design/pro-layout';
import React, { Component } from 'react';
import { Pie } from './components/Charts';
import type { Dispatch } from 'umi';
import { connect } from 'umi';
import type { AdvancedProfileData } from './data.d';
import styles from './style.less';
import OfflineDataBack from '../components/OfflineDataBack';
import DemoColumn from './components/DemoColumn';
import PerformanceColumn from './components/PerformanceColumn';
import IOPSColumn from './components/IOPSColumn';
import BandwidthColumn from './components/BandwidthColumn';
import ClientColumn from './components/ClientColumn';
import CPUColumn from './components/CPUColumn';
import DemoPie from './components/DemoPie';

import ProtocolLatencyColumn from './components/ProtocolLatencyColumn';
import ProtocolIOPSColumn from './components/ProtocolIOPSColumn';
import ProtocolBandwidthColumn from './components/ProtocolBandwidthColumn';

const queryString = require('query-string');

const configurationTabList = [
  {
    key: 'key1',
    tab: 'NODE POOLS',
  },
];

const capacityTabList = [
  {
    key: 'capacity1',
    tab: 'CAPACITY BY SUBSCRIPTION',
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

const issueData = [
  { key: 1, name: 'Components', count: 0 },
  { key: 2, name: 'Configuration', count: 0 },
  { key: 3, name: 'Capacity', count: 1 },
  { key: 4, name: 'Performance', count: 0 },
  { key: 5, name: 'Data Protection', count: 0 },
];

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
    title: 'Subscription',
    dataIndex: 'subscription',
    key: 'subscription',
  },
  {
    title: 'Node Pool',
    dataIndex: 'pool',
    key: 'pool',
  },
  {
    title: 'Identifier',
    dataIndex: 'identifier',
    key: 'identifier',
  },
  {
    title: 'Used',
    dataIndex: 'used',
    key: 'used',
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
  {
    title: 'On-Demand Capacity Used',
    dataIndex: 'demand_used',
    key: 'demand',
  },
];

const capacityData = [
  { subscription: 'Node_Pool_1', identifier: 1,  used: '36.9 TB', free: '40 TB', usable: '76.9.0 TB', demand_used: '20%' },
  { subscription: 'Node_Pool_2', identifier: 2,  used: '36.9 TB', free: '40 TB', usable: '76.9.0 TB', demand_used: '20%' },
  { subscription: 'Node_Pool_3', identifier: 3,  used: '36.9 TB', free: '40 TB', usable: '76.9.0 TB', demand_used: '20%' },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Subscriptions',
    dataIndex: 'subscriptions',
    key: 'host_group_name',
      render: (_, record) => [
        <a>{record.subscriptions}</a>,
      ],

  },
];

interface AdvancedState {
  operationKey: string;
  configurationKey: string;
  tabActiveKey: string;
}

class Advanced extends Component<
  { loading: boolean; cloudIQFileDetail: AdvancedProfileData; dispatch: Dispatch },
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
      type: 'cloudIQFileDetail/fetchAdvanced',
    });
  }

  onOperationTabChange = (key: string) => {
    console.log('key: ', key);
    this.setState({ operationKey: key });
  };

  onConfigurationTabChange = (key: string) => {
    this.setState({ configurationKey: key });
  };

  onTabChange = (tabActiveKey: string) => {
    this.setState({ tabActiveKey });
  };

  render() {
    const { operationKey, configurationKey } = this.state;
    const { loading } = this.props;

    const advancedOperation2 = [
      {
        id:
          'POWERSTORE-APEX_Block_Boston__HOST__f06b4f6b-c581-4dce-8faa-e5e2c2a57911',
        name: 'Node_Pool_1',
        subscriptions: 'Tier 1 File Service'
      },
      {
        id:
          'POWERSTORE-APEX_Block_Boston__HOST__f06b4f6b-c581-4dce-8faa-e5e2c2a57912',
        name: 'Node_Pool_2', 
        subscriptions: 'Tier 2 File Service'
      },
      { 
        id:
          'POWERSTORE-APEX_Block_Boston__HOST__f06b4f6b-c581-4dce-8faa-e5e2c2a57913',
        name: 'Node_Pool_3', 
        subscriptions: 'Tier 3 File Service'
      },
    ];

    const configurationStorageData = [
      {
        name: 'fs_auto_1',
        type: 'File System',
        usedLogicalSize: '1.5',
        totalLogicalSize: '200.0',
        protectionPolicy: '\u2014',
        performancePolicy: '\u2014',
        nasServerName: 'NasCCT_dev__0',
      },
      {
        name: 'fs_auto_2',
        type: 'File System',
        usedLogicalSize: '1.5',
        totalLogicalSize: '200.0',
        protectionPolicy: '\u2014',
        performancePolicy: '\u2014',
        nasServerName: 'NasCCT_dev__0',
      },
      {
        name: 'fs_auto_3',
        type: 'File System',
        usedLogicalSize: '1.5',
        totalLogicalSize: '200.0',
        protectionPolicy: '\u2014',
        performancePolicy: '\u2014',
        nasServerName: 'NasCCT_dev__1',
      },
      {
        name: 'fs_auto_4',
        type: 'File System',
        usedLogicalSize: '1.5',
        totalLogicalSize: '200.0',
        protectionPolicy: '\u2014',
        performancePolicy: '\u2014',
        nasServerName: 'NasCCT_dev__1',
      },
      {
        name: 'fs_auto_1',
        type: 'File System',
        usedLogicalSize: '1.5',
        totalLogicalSize: '200.0',
        protectionPolicy: '\u2014',
        performancePolicy: '\u2014',
        nasServerName: 'NasCCT_dev__0',
      },
      {
        name: 'fs_auto_2',
        type: 'File System',
        usedLogicalSize: '1.5',
        totalLogicalSize: '200.0',
        protectionPolicy: '\u2014',
        performancePolicy: '\u2014',
        nasServerName: 'NasCCT_dev__0',
      },
      {
        name: 'fs_auto_3',
        type: 'File System',
        usedLogicalSize: '1.5',
        totalLogicalSize: '200.0',
        protectionPolicy: '\u2014',
        performancePolicy: '\u2014',
        nasServerName: 'NasCCT_dev__1',
      },
      {
        name: 'fs_auto_4',
        type: 'File System',
        usedLogicalSize: '1.5',
        totalLogicalSize: '200.0',
        protectionPolicy: '\u2014',
        performancePolicy: '\u2014',
        nasServerName: 'NasCCT_dev__1',
      },
    ];

    const configurationVirtualMachineData = [
      {
        name: 'APEX_Block_Boston_VM2',
        vcenter: '10.0.0.100',
        networkAddresses: '10.0.2.2',
        operatingSystem: 'Red Hat Enterprise Linux 5 (64-bit)',
        esxName: 'APEX_Block_Boston_App1_Server1',
        cluster: 'APEX Cluster',
      },
      {
        name: 'APEX_Block_Boston_VM1',
        vcenter: '10.0.0.100',
        networkAddresses: '10.0.2.1',
        operatingSystem: 'Red Hat Enterprise Linux 5 (64-bit)',
        esxName: 'APEX_Block_Boston_App1_Server1',
        cluster: 'APEX Cluster',
      },
      {
        name: 'APEX_Block_Boston_VM3',
        vcenter: '10.0.0.100',
        networkAddresses: '10.4.103.3',
        operatingSystem: 'Red Hat Enterprise Linux 5 (64-bit)',
        esxName: 'APEX_Block_Boston_App1_Server1',
        cluster: 'APEX Cluster',
      },
      {
        name: 'APEX_Block_Boston_VM4',
        vcenter: '10.0.0.100',
        networkAddresses: '10.4.102.4',
        operatingSystem: 'Red Hat Enterprise Linux 5 (64-bit)',
        esxName: 'APEX_Block_Boston_App1_Server1',
        cluster: 'APEX Cluster',
      },
      {
        name: 'APEX_Block_Boston_VM5',
        vcenter: '10.0.0.100',
        networkAddresses: '10.4.101.5',
        operatingSystem: 'Red Hat Enterprise Linux 5 (64-bit)',
        esxName: 'APEX_Block_Boston_App1_Server1',
        cluster: 'APEX Cluster',
      },
      {
        name: 'APEX_Block_Boston_VM6',
        vcenter: '10.0.0.100',
        networkAddresses: '10.4.100.6',
        operatingSystem: 'Red Hat Enterprise Linux 5 (64-bit)',
        esxName: 'APEX_Block_Boston_App1_Server1',
        cluster: 'APEX Cluster',
      },
    ];

    const configurationStorageContainerData = [
      {
        id:
          'POWERSTORE-APEX_Block_Boston__STORAGE_CONTAINER__0a3d060f-9edc-479c-84fc-d536ff0a4c8a',
        systemId: 'APEX_Block_Boston',
        storageSystemId: 'APEX_Block_Boston',
        name: 'APEX Block Datastore',
        usedPercent: 22.1,
        quota: 0.0,
        totalSize: '12,627.2',
        freeSize: '9,833.3',
      },
    ];

    const offlineChartData = [];
    for (let i = 0; i < 12; i += 1) {
      var date = new Date();
      date.setMonth(i + 1);
      offlineChartData.push({
        x: i + 1 + '.Jun',
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
  <Typography.Title level={3}>
    Capacity is the top health check category impacting
    APEX-File-Austin's health score.
  </Typography.Title>
  <div style={{ width: 170, marginLeft: -30 }}>
    <Pie
      animate={false}
      color="#6EA204"
      percent={95}
      total={
	<Typography.Title level={1} style={{ color: '#6EA204' }}>
	  {queryString.parse(window.location.search).name ==
	  'APEX-File-Austin'
	    ? 100
	    : 95}
	</Typography.Title>
      }
      subTitle={
	<Typography.Text strong={true} style={{ color: '#6EA204' }}>
	  GOOD
	</Typography.Text>
      }
      style={{ marginTop: 20 }}
      height={150}
      lineWidth={8}
    />
  </div>

  <Typography.Title level={4}>Health Issues</Typography.Title>
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
	headStyle={{ background: '#6EA204', color: '#ffffff' }}
	style={{ borderRadius: 4 }}
      >
	<Typography.Paragraph>
	  about 6 hours ago The Cluster 'FNM00183501337' is predicted to
	  run out of space within a quarter.
	</Typography.Paragraph>
	<Typography.Text type="secondary">-5</Typography.Text>
	<Divider />
	<Typography.Paragraph>Resolution:</Typography.Paragraph>
	<Typography.Text type="secondary">
	  This information has been sent to the DTMS Account Team, and
	  they will reach out to you should any action be required.
	</Typography.Text>
      </Card>
    </Col>
  </Row>
  <OfflineDataBack offlineChartData={offlineChartData} />
</>
),
tab2: (
<>
  <Descriptions style={{ marginLeft: 20, marginTop: 20 }} column={2}>
    <Descriptions.Item label="Site">ACME Branch Office</Descriptions.Item>
    <Descriptions.Item label="Last Contact Time">about 1 hour ago</Descriptions.Item>
    <Descriptions.Item label="Location">Hopkinton, MA</Descriptions.Item>
  </Descriptions>

<Divider />

<Card
  className={styles.tabsCard}
  bordered={false}
  tabList={configurationTabList}
  onTabChange={this.onConfigurationTabChange}
>
  {configurationContentList[configurationKey]}
</Card>
</>
),
tab3: (
<Card
  title="Effective Capacity"
  extra={<a href="#">MANAGE SUBSCRIPTIONS</a>}
>
  <Row>
  <Col span={18} style={{ borderRight: '1px solid #DDDDDD'}}>
  <p style={{ marginButtom: 20, marginRight: 20 }}>Total Usable<span style={{ float: 'right', position: 'relative' }}>230.7 TB</span></p>
  <DemoColumn />
  </Col>
  <Col span={6}>
  <div style={{marginLeft: 15 }}>On-Demand Capacity Used</div>
		<Pie
		  subTitle={
		    <Typography.Text
		      strong={true}
		    >Used</Typography.Text>
		  }
		  percent={20}
		  total="20%"
		  style={{ marginTop: 20 }}
		  height={180}
		  lineWidth={10}
		/>
  <div style={{textAlign: 'center' }}>30 TB of 150 TB</div>

  </Col>
  </Row>
  <Divider />

<Card
  className={styles.tabsCard}
  bordered={false}
  tabList={capacityTabList}
>

<Table
  pagination={false}
  loading={loading}
  dataSource={capacityData}
  columns={capacityColumns}
/>

        </Card>


        </Card>
      ),
      tab4: (
        <Card
          className={styles.tabsCard}
          bordered={false}
        >

<div style={{ textAlign: 'right' }}>Viewing data from the Last 7 days</div>
<Typography.Title level={5}>Latency</Typography.Title>
<PerformanceColumn />


<Typography.Title style={{  marginTop: 50 }} level={5}>IOPS</Typography.Title>
<IOPSColumn />

<Typography.Title style={{  marginTop: 50 }} level={5}>Bandwidth</Typography.Title>
<BandwidthColumn />

<Typography.Title style={{  marginTop: 50 }} level={5}>Client</Typography.Title>
<ClientColumn />

<Typography.Title style={{  marginTop: 50 }} level={5}>CPU</Typography.Title>
<CPUColumn />

<Typography.Title style={{  marginTop: 50 }} level={5}>Protocol Latency</Typography.Title>
<ProtocolLatencyColumn />

<Typography.Title style={{  marginTop: 50 }} level={5}>Protocol IOPS</Typography.Title>
<ProtocolIOPSColumn />

<Typography.Title style={{  marginTop: 50 }} level={5}>Protocol Bandwidth</Typography.Title>
<ProtocolBandwidthColumn />


        </Card>
      ),
    };
    return (
      <PageContainer>
        <div className={styles.main}>
          <GridContent>
            <Card
              className={styles.tabsCard}
              bordered={false}
              tabList={operationTabList}
              onTabChange={this.onOperationTabChange}
              bodyStyle={{
                padding: operationKey === 'tab1' ? '24px' : 0,
              }}
            >
              {contentList[operationKey]}
            </Card>
          </GridContent>
        </div>
      </PageContainer>
    );
  }
};

export default connect(
  ({
    cloudIQFileDetail,
    loading,
  }: {
    cloudIQFileDetail: AdvancedProfileData;
    loading: {
      effects: Record<string, boolean>;
    };
  }) => ({
    cloudIQFileDetail,
    loading: loading.effects['cloudIQFileDetail/fetchAdvanced'],
  })
)(Advanced);
