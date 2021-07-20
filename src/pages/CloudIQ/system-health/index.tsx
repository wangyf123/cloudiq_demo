import {
  Checkbox,
  Alert,
  Typography,
  Tooltip,
  Space,
  Card,
  Col,
  Row,
  Statistic,
} from 'antd';
import type { Dispatch } from 'umi';
import { connect } from 'umi';
import React, { Component } from 'react';
import { CheckOutlined } from '@ant-design/icons';
import type { StateType } from './model';
import { Pie } from './components/Charts';
import ComponentIssueIcon from './components/Icons/ComponentIssueIcon';
import ConfigurationIssueIcon from './components/Icons/ConfigurationIssueIcon';
import CapacityIssueIcon from './components/Icons/CapacityIssueIcon';
import PerformanceIssueIcon from './components/Icons/PerformanceIssueIcon';
import DataProtectionIssueIcon from './components/Icons/DataProtectionIssueIcon';
import { PageContainer } from '@ant-design/pro-layout';

import styles from './style.less';

const cardData = [
  {
    id: 'APEX_Block_Boston',
    location: 'Hopkinton, MA',
    name: 'APEX-Block-Boston',
    model: 'APEX Block Storage Services',
    type: 'POWERSTORE',
    serialNumber: 'PS4cf934129a35',
    displayIdentifier: '6CC0643',
    healthState: { raw: 'GOOD', text: 'Good' },
    systemHealthImpact: 0,
    systemHealthIssueCount: 0,
    healthScore: 100,
    configurationImpact: 0,
    configurationIssueCount: 0,
    capacityImpact: 0,
    capacityIssueCount: 0,
    performanceImpact: 0,
    performanceIssueCount: 0,
    dataProtectionImpact: 0,
    dataProtectionIssueCount: 0,
    healthIssueCount: 0,
  },
  {
    id: 'APEX-File-Austin',
    location: 'Hopkinton, MA',
    name: 'APEX-File-Austin',
    model: 'APEX File Storage Services',
    type: 'ISILON',
    serialNumber: 'ELMISLFAGEF876',
    displayIdentifier: 'ELMISLFAGEF876',
    healthState: { raw: 'GOOD', text: 'Good' },
    systemHealthImpact: 0,
    systemHealthIssueCount: 0,
    healthScore: 95,
    configurationImpact: -5,
    configurationIssueCount: 1,
    capacityImpact: 0,
    capacityIssueCount: 0,
    performanceImpact: 0,
    performanceIssueCount: 0,
    dataProtectionImpact: 0,
    dataProtectionIssueCount: 0,
    healthIssueCount: 1,
  },
  {
    id: 'Business Analytics',
    location: 'Round Rock, TX',
    name: 'Business Analytics',
    model: 'SC7020F',
    type: 'SC',
    serialNumber: '95148',
    displayIdentifier: '95148',
    healthState: { raw: 'GOOD', text: 'Good' },
    systemHealthImpact: -20,
    systemHealthIssueCount: 1,
    healthScore: 60,
    configurationImpact: 0,
    configurationIssueCount: 0,
    capacityImpact: 0,
    capacityIssueCount: 0,
    performanceImpact: 0,
    performanceIssueCount: 0,
    dataProtectionImpact: 0,
    dataProtectionIssueCount: 0,
    healthIssueCount: 0,
  },
  {
    id: 'SIO00174657444',
    location: 'Hopkinton, MA',
    name: 'ERP Production',
    model: 'X2-R',
    type: 'XIO',
    serialNumber: 'SIO00174657444',
    displayIdentifier: 'SIO00174657444',
    healthState: { raw: 'GOOD', text: 'Good' },
    systemHealthImpact: 0,
    systemHealthIssueCount: 0,
    healthScore: 80,
    configurationImpact: -10,
    configurationIssueCount: 1,
    capacityImpact: -30,
    capacityIssueCount: 1,
    performanceImpact: 0,
    performanceIssueCount: 0,
    dataProtectionImpact: 0,
    dataProtectionIssueCount: 0,
    healthIssueCount: 0,
  },
];

interface MonitorProps {
  dashboardAndmonitor: StateType;
  dispatch: Dispatch;
  loading: boolean;
}

class Monitor extends Component<MonitorProps> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'dashboardAndmonitor/fetchTags',
    });
  }

  render() {
    return (
      <PageContainer>
        <React.Fragment>
          <div style={{ textAlign: 'right' }}>
            <a>
              <Space>Go To APEX SUPPORT</Space>
            </a>
          </div>
          <div style={{ paddingLeft: 24 }}>
            <Alert
              style={{ borderColor: '#0672CB', borderRadius: 4 }}
              message={
                <Typography.Title style={{ color: '#0076c1' }} level={3}>
                  Introducing your CloudIQ Health Score.
                </Typography.Title>
              }
              description={
                <>
                  <div>
                    Below is an overview of your system’s health. Click on View
                    Health Details for more comprehensive details on system
                    health scores and performance data.
                  </div>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Space style={{ marginTop: 30 }}>
                      <>
                        <div
                          style={{
                            width: 10,
                            height: 10,
                            background: '#1B8B09',
                          }}
                        />
                        <Typography.Text style={{ color: '#1B8B09' }}>
                          Good 95-100
                        </Typography.Text>
                      </>
                      <>
                        <div
                          style={{
                            width: 10,
                            height: 10,
                            background: '#FBCA6E',
                          }}
                        />
                        <Typography.Text style={{ color: '#FBCA6E' }}>
                          FAIR 71-94
                        </Typography.Text>
                      </>
                      <>
                        <div
                          style={{
                            width: 10,
                            height: 10,
                            background: '#D93A2F',
                          }}
                        />
                        <Typography.Text style={{ color: '#D93A2F' }}>
                          POOR 0-70
                        </Typography.Text>
                      </>
                    </Space>
                    <Space
                      style={{
                        marginTop: 30,
                        marginLeft: 'auto',
                        marginRight: 0,
                      }}
                    >
                      <Checkbox>Don't show again</Checkbox>
                      <a style={{ marginLeft: 'auto', marginRight: 0 }}>
                        LEARN MORE
                      </a>
                    </Space>
                  </div>
                </>
              }
              type="info"
              closable
            />
          </div>
          <Card
            title={
              <div
                style={{
                  borderBottom: '1px solid #cccccc',
                  paddingBottom: 16,
                  fontSize: 16,
                }}
              >
                4 Systems
              </div>
            }
            tabList={[
              { key: 'storage', tab: 'STORAGE' },
              { key: 'networking', tab: 'NETWORKING' },
              { key: 'hci', tab: 'HCI' },
              { key: 'dataprotection', tab: 'DATA PROTECTION' },
            ]}
            tabProps={{ centered: true }}
            style={{ marginTop: 12 }}
          >
            <Row gutter={24}>
              {cardData.map((item, index) => (
                <Col
                  xl={6}
                  lg={24}
                  sm={24}
                  xs={24}
                  style={{ marginBottom: 24 }}
                >
                  <Card
                    title={
                      <div style={{ display: 'flex', alignItems: 'baseline' }}>
                        <Typography.Title
                          level={4}
                          style={{
                            color: '#0672CB',
                            marginBottom: 0,
                            marginRight: 8,
                          }}
                        >
                          {item.name}
                        </Typography.Title>
                        <div
                          style={{
                            width: 120,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {item.model + '|' + item.displayIdentifier}
                        </div>
                      </div>
                    }
                    bordered={true}
                    style={{ height: 320, cursor: 'pointer' }}
                    className={styles.pieCard}
                    onClick={() => {
                      if (cardData[index].name == 'APEX-Block-Boston') { 
                        window.location.href = '/health/block_detail';
                      }else {
                        window.location.href = '/health/file_detail';
                      }
                    }}
                  >
                    <Row>
                      <Col span={10}>
                        <div style={{ textAlign: 'center' }}>
                          <Typography.Text type="secondary">
                            Health Score
                          </Typography.Text>
                        </div>
                        <Pie
                          subTitle={
                            <Typography.Text
                              strong={true}
                              style={{
                                color:
                                  item.healthScore < 80
                                    ? '#F2AF00'
                                    : item.healthScore >= 95
                                    ? '#6EA204'
                                    : '#ff5353',
                              }}
                            >
                              {item.healthScore < 80
                                ? 'FAIR'
                                : item.healthScore >= 95
                                ? 'GOOD'
                                : 'POOR'}
                            </Typography.Text>
                          }
                          color={
                            item.healthScore < 80
                              ? '#F2AF00'
                              : item.healthScore >= 95
                              ? '#6EA204'
                              : '#ff5353'
                          }
                          percent={item.healthScore}
                          total={
                            <Typography.Title
                              level={1}
                              style={{
                                color:
                                  item.healthScore < 80
                                    ? '#F2AF00'
                                    : item.healthScore >= 95
                                    ? '#6EA204'
                                    : '#ff5353',
                              }}
                            >
                              {item.healthScore}
                            </Typography.Title>
                          }
                          style={{ marginTop: 20 }}
                          height={180}
                          lineWidth={10}
                        />
                      </Col>
                      <Col span={14}>
                        <div>
                          <Statistic
                            title="Issues"
                            value={item.healthIssueCount}
                            style={{ marginBottom: 80 }}
                          />
                          <div style={{ display: 'flex' }}>
                            <div style={{ marginRight: 8 }}>
                              <Tooltip
                                placement="bottomRight"
                                title={
                                  <Statistic
                                    title="Component Issues"
                                    value={item.systemHealthIssueCount}
                                  />
                                }
                                color="white"
                              >
                                <ComponentIssueIcon
                                  style={{ color: '#6EA201' }}
                                />
                                {item.systemHealthIssueCount == 0 && (
                                  <CheckOutlined style={{ color: '#77A814' }} />
                                )}
                                {item.systemHealthIssueCount != 0 && (
                                  <div
                                    style={{
                                      color:
                                        item.healthScore < 80
                                          ? '#ff5353'
                                          : item.healthScore >= 95
                                          ? '#6EA204'
                                          : '#F2AF00',
                                    }}
                                  >
                                    {item.systemHealthImpact}
                                  </div>
                                )}
                              </Tooltip>
                            </div>
                            <div style={{ marginRight: 8 }}>
                              <Tooltip
                                placement="bottomRight"
                                title={
                                  <Statistic
                                    title="Configuration Issues"
                                    value={item.configurationIssueCount}
                                  />
                                }
                                color="white"
                              >
                                <ConfigurationIssueIcon
                                  style={{ color: '#6EA201' }}
                                />
                                {item.configurationIssueCount == 0 && (
                                  <CheckOutlined style={{ color: '#77A814' }} />
                                )}
                                {item.configurationIssueCount != 0 && (
                                  <div
                                    style={{
                                      color:
                                        item.healthScore < 80
                                          ? '#ff5353'
                                          : item.healthScore >= 95
                                          ? '#6EA204'
                                          : '#F2AF00',
                                    }}
                                  >
                                    {item.configurationImpact}
                                  </div>
                                )}
                              </Tooltip>
                            </div>
                            <div style={{ marginRight: 8 }}>
                              <Tooltip
                                placement="bottomRight"
                                title={
                                  <Statistic
                                    title="Capacity Issues"
                                    value={item.capacityIssueCount}
                                  />
                                }
                                color="white"
                              >
                                <CapacityIssueIcon
                                  style={{ color: '#6EA201' }}
                                />

                                {item.capacityIssueCount == 0 && (
                                  <CheckOutlined style={{ color: '#77A814' }} />
                                )}
                                {item.capacityIssueCount != 0 && (
                                  <div
                                    style={{
                                      color:
                                        item.healthScore < 80
                                          ? '#ff5353'
                                          : item.healthScore >= 95
                                          ? '#6EA204'
                                          : '#F2AF00',
                                    }}
                                  >
                                    {item.capacityImpact}
                                  </div>
                                )}
                              </Tooltip>
                            </div>
                            <div style={{ marginRight: 8 }}>
                              <Tooltip
                                placement="bottomRight"
                                title={
                                  <Statistic
                                    title="Performance Issues"
                                    value={item.performanceIssueCount}
                                  />
                                }
                                color="white"
                              >
                                <PerformanceIssueIcon
                                  style={{ color: '#6EA201' }}
                                />

                                {item.performanceIssueCount == 0 && (
                                  <CheckOutlined style={{ color: '#77A814' }} />
                                )}
                                {item.performanceIssueCount != 0 && (
                                  <div
                                    style={{
                                      color:
                                        item.healthScore < 80
                                          ? '#ff5353'
                                          : item.healthScore >= 95
                                          ? '#6EA204'
                                          : '#F2AF00',
                                    }}
                                  >
                                    {item.performanceImpact}
                                  </div>
                                )}
                              </Tooltip>
                            </div>
                            <div style={{ marginRight: 0 }}>
                              <Tooltip
                                placement="bottomRight"
                                title={
                                  <Statistic
                                    title="Data Protection Issues"
                                    value={item.dataProtectionIssueCount}
                                  />
                                }
                                color="white"
                              >
                                <DataProtectionIssueIcon
                                  style={{ color: '#6EA201' }}
                                />
                                {item.dataProtectionIssueCount == 0 && (
                                  <CheckOutlined style={{ color: '#77A814' }} />
                                )}
                                {item.dataProtectionIssueCount != 0 && (
                                  <div style={{ color: 'red' }}>
                                    {item.dataProtectionImpact}
                                  </div>
                                )}
                              </Tooltip>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </React.Fragment>
      </PageContainer>
    );
  }
}

export default connect(
  ({
    dashboardAndmonitor,
    loading,
  }: {
    dashboardAndmonitor: StateType;
    loading: {
      models: Record<string, boolean>;
    };
  }) => ({
    dashboardAndmonitor,
    loading: loading.models.dashboardAndmonitor,
  })
)(Monitor);
