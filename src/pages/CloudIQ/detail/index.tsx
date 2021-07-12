import {
  Space,
  Select,
  Row,
  Col,
  Card,
  Typography,
  Divider,
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

const capacityData = [
  { name: 'Total', used: '20 TB', free: '25 TB', usable: '45.0 TB' },
  { name: 'Base', used: '20 TB', free: '10 TB', usable: '30 TB' },
  { name: 'On-Demand', used: '0 B', free: '15 TB', usable: '15 TB' },
];

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
        storageSystemType: 'APEX Block Storage Services',
        storageSystemId: 'APEX_Block_Boston',
        systemId: 'APEX_Block_Boston',
        name: 'APEX_host1.acme.com',
        description: '\u2014',
        operatingSystem: 'ESXi',
        hostGroupName: 'APEX_HG1',
        volumeCount: 5,
        initiatorCount: 1,
        initiatorType: 'iSCSI',
      },
      {
        id:
          'POWERSTORE-APEX_Block_Boston__HOST__f06b4f6b-c581-4dce-8faa-e5e2c2a57912',
        storageSystemType: 'APEX Block Storage Services',
        storageSystemId: 'APEX_Block_Boston',
        systemId: 'APEX_Block_Boston',
        name: 'APEX_host2.acme.com',
        description: '\u2014',
        operatingSystem: 'ESXi',
        hostGroupName: 'APEX_HG2',
        volumeCount: 5,
        initiatorCount: 1,
        initiatorType: 'iSCSI',
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
            APEX-Block-Boston's health score.
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
        <Card
          title="Effective Capacity"
          extra={<a href="#">MANAGE SUBSCRIPTIONS</a>}
        >
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
            <Typography.Title level={5}>
              Predicted Date to Full Aug 2, 2021
            </Typography.Title>
          </Space>
          <br />
          <Space>
            <Typography.Title level={5}>From</Typography.Title>
            <Select defaultValue="3 month ago">
              {[
                'Yesterday',
                '1 week ago',
                '1 month ago',
                '3 month ago',
                '6 month ago',
                '1 year ago',
                '2 year ago',
                'Custom',
              ].map((item) => (
                <Select.Option key={item}>{item}</Select.Option>
              ))}
            </Select>
            <Typography.Title level={5}>To</Typography.Title>
            <Select defaultValue="Predicted Full">
              {[
                'Today',
                'Tommorrow',
                '1 week from today',
                '1 month from today',
                '3 month from today',
                '6 month from today',
                'Predicted Full',
                'Custom',
              ].map((item) => (
                <Select.Option key={item}>{item}</Select.Option>
              ))}
            </Select>
            <Typography.Title level={5}>
              Actual Growth per Month
            </Typography.Title>
            <Typography.Text>(13.3 TB) 24.6 % of Total</Typography.Text>
          </Space>

          <OfflineDataBack offlineChartData={offlineChartData} />
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
  })
)(Advanced);
