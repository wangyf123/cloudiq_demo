import { Tabs, Checkbox, Button, Alert, Typography, Badge, Avatar, Tooltip, Space, Divider, Card, Col, Row, Statistic } from 'antd';
import type { Dispatch } from 'umi';
import { FormattedMessage, connect, formatMessage } from 'umi';
import React, { Component } from 'react';
import { FilterOutlined, ExportOutlined, CheckOutlined } from '@ant-design/icons';
import { GridContent } from '@ant-design/pro-layout';
import numeral from 'numeral';
import type { StateType } from './model';
import { Pie, WaterWave, Gauge, TagCloud, Map } from './components/Charts';
import ActiveChart from './components/ActiveChart';
import ComponentIssueIcon from './components/Icons/ComponentIssueIcon';
import ConfigurationIssueIcon from './components/Icons/ConfigurationIssueIcon';
import CapacityIssueIcon from './components/Icons/CapacityIssueIcon';
import PerformanceIssueIcon from './components/Icons/PerformanceIssueIcon';
import DataProtectionIssueIcon from './components/Icons/DataProtectionIssueIcon';

import styles from './style.less';

const { Countdown } = Statistic;

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

const cardData = [{"id": "Test_Dev", "location": "Hopkinton, MA", "name": "Test_Dev", "model": "UnityVSA", "type": "UNITY", "serialNumber": "FCNCH0972C32F3", "displayIdentifier": "FCNCH0972C32F3", "healthState": {"raw": "POOR", "text": "Poor"}, "systemHealthImpact": 0, "systemHealthIssueCount": 0, "healthScore": 60, "configurationImpact": 0, "configurationIssueCount": 0, "capacityImpact": -40, "capacityIssueCount": 3, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 3}, {"id": "POWERVAULT_CIQAPU1", "location": "Round Rock, TX", "name": "Account Management", "model": "ME4012", "type": "POWERVAULT", "serialNumber": "CIQAPU1", "displayIdentifier": "CIQAPU1", "healthState": {"raw": "POOR", "text": "Poor"}, "systemHealthImpact": -40, "systemHealthIssueCount": 4, "healthScore": 60, "configurationImpact": 0, "configurationIssueCount": 0, "capacityImpact": -30, "capacityIssueCount": 1, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 5}, {"id": "Security Office", "location": "Hopkinton, MA", "name": "Security Office", "model": "PowerScale Cluster", "type": "ISILON", "serialNumber": "ELMISLFAGEF789", "displayIdentifier": "ELMISLFAGEF789", "healthState": {"raw": "POOR", "text": "Poor"}, "systemHealthImpact": 0, "systemHealthIssueCount": 0, "healthScore": 60, "configurationImpact": 0, "configurationIssueCount": 0, "capacityImpact": -40, "capacityIssueCount": 1, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 1}, {"id": "Disaster Recovery", "location": "Hopkinton, MA", "name": "Disaster Recovery", "model": "UNITY 400", "type": "UNITY", "serialNumber": "FCNCH0972C32F2", "displayIdentifier": "FCNCH0972C32F2", "healthState": {"raw": "POOR", "text": "Poor"}, "systemHealthImpact": 0, "systemHealthIssueCount": 0, "healthScore": 70, "configurationImpact": -10, "configurationIssueCount": 3, "capacityImpact": -30, "capacityIssueCount": 3, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 6}, {"id": "HR_Remote", "location": "Hopkinton, MA", "name": "HR_Remote", "model": "VMAX950F", "type": "VMAX", "serialNumber": "000296800647", "displayIdentifier": "000296800647", "healthState": {"raw": "POOR", "text": "Poor"}, "systemHealthImpact": 0, "systemHealthIssueCount": 0, "healthScore": 70, "configurationImpact": 0, "configurationIssueCount": 0, "capacityImpact": -30, "capacityIssueCount": 1, "performanceImpact": -5, "performanceIssueCount": 1, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 2}, {"id": "SIOLIC1124", "location": "Hopkinton, MA", "name": "Security DC", "model": "PowerFlex", "type": "POWERFLEX", "serialNumber": "SIOLIC1124", "displayIdentifier": "SIOLIC1124", "healthState": {"raw": "FAIR", "text": "Fair"}, "systemHealthImpact": -20, "systemHealthIssueCount": 1, "healthScore": 80, "configurationImpact": 0, "configurationIssueCount": 0, "capacityImpact": 0, "capacityIssueCount": 0, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 1}, {"id": "Finance Data Center", "location": "Hopkinton, MA", "name": "Finance Data Center", "model": "Isilon Cluster", "type": "ISILON", "serialNumber": "ELMISLFAGEF123", "displayIdentifier": "ELMISLFAGEF123", "healthState": {"raw": "FAIR", "text": "Fair"}, "systemHealthImpact": -20, "systemHealthIssueCount": 1, "healthScore": 80, "configurationImpact": 0, "configurationIssueCount": 0, "capacityImpact": 0, "capacityIssueCount": 0, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 1}, {"id": "Remote DC", "location": "Hopkinton, MA", "name": "Remote DC", "model": "SC5020F", "type": "SC", "serialNumber": "92252", "displayIdentifier": "92252", "healthState": {"raw": "FAIR", "text": "Fair"}, "systemHealthImpact": 0, "systemHealthIssueCount": 0, "healthScore": 85, "configurationImpact": -15, "configurationIssueCount": 1, "capacityImpact": -5, "capacityIssueCount": 1, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 2}, {"id": "Market Research", "location": "Round Rock, TX", "name": "Market Research", "model": "UNITY XT 880F", "type": "UNITY", "serialNumber": "FCNCH0972C32F4", "displayIdentifier": "FCNCH0972C32F4", "healthState": {"raw": "FAIR", "text": "Fair"}, "systemHealthImpact": 0, "systemHealthIssueCount": 0, "healthScore": 90, "configurationImpact": -10, "configurationIssueCount": 3, "capacityImpact": -5, "capacityIssueCount": 2, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 5}, {"id": "Finance", "location": "Round Rock, TX", "name": "Finance", "model": "PowerMax_2000", "type": "VMAX", "serialNumber": "000197900049", "displayIdentifier": "000197900049", "healthState": {"raw": "FAIR", "text": "Fair"}, "systemHealthImpact": 0, "systemHealthIssueCount": 0, "healthScore": 90, "configurationImpact": 0, "configurationIssueCount": 0, "capacityImpact": -10, "capacityIssueCount": 1, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 1}, {"id": "POWERVAULT_MJLZWGR", "location": "Round Rock, TX", "name": "Research and Development", "model": "ME4024", "type": "POWERVAULT", "serialNumber": "MJLZWGR", "displayIdentifier": "MJLZWGR", "healthState": {"raw": "FAIR", "text": "Fair"}, "systemHealthImpact": -10, "systemHealthIssueCount": 1, "healthScore": 90, "configurationImpact": -5, "configurationIssueCount": 2, "capacityImpact": 0, "capacityIssueCount": 0, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 3}, {"id": "SIO00174657731", "location": "Hopkinton, MA", "name": "ERP Remote", "model": "X2-T", "type": "XIO", "serialNumber": "SIO00174657731", "displayIdentifier": "SIO00174657731", "healthState": {"raw": "FAIR", "text": "Fair"}, "systemHealthImpact": 0, "systemHealthIssueCount": 0, "healthScore": 94, "configurationImpact": 0, "configurationIssueCount": 0, "capacityImpact": 0, "capacityIssueCount": 0, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": -6, "dataProtectionIssueCount": 1, "healthIssueCount": 1}, {"id": "Manufacturing_Dev", "location": "Hopkinton, MA", "name": "Manufacturing_Dev", "model": "PowerStore 9000", "type": "POWERSTORE", "serialNumber": "PS697652a22113", "displayIdentifier": "RV429L63", "healthState": {"raw": "GOOD", "text": "Good"}, "systemHealthImpact": 0, "systemHealthIssueCount": 0, "healthScore": 95, "configurationImpact": 0, "configurationIssueCount": 0, "capacityImpact": -5, "capacityIssueCount": 1, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 1}, {"id": "APEX_Block_Boston", "location": "Hopkinton, MA", "name": "APEX-Block-Boston", "model": "APEX Block Storage Services", "type": "POWERSTORE", "serialNumber": "PS4cf934129a35", "displayIdentifier": "6CC0643", "healthState": {"raw": "GOOD", "text": "Good"}, "systemHealthImpact": 0, "systemHealthIssueCount": 0, "healthScore": 95, "configurationImpact": 0, "configurationIssueCount": 0, "capacityImpact": -5, "capacityIssueCount": 1, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 1}, {"id": "Production", "location": "Round Rock, TX", "name": "Production", "model": "UNITY 650F", "type": "UNITY", "serialNumber": "FCNCH0972C32F1", "displayIdentifier": "FCNCH0972C32F1", "healthState": {"raw": "GOOD", "text": "Good"}, "systemHealthImpact": 0, "systemHealthIssueCount": 0, "healthScore": 100, "configurationImpact": 0, "configurationIssueCount": 0, "capacityImpact": 0, "capacityIssueCount": 0, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 0}, {"id": "APEX-File-Austin", "location": "Hopkinton, MA", "name": "APEX-File-Austin", "model": "APEX File Storage Services", "type": "ISILON", "serialNumber": "ELMISLFAGEF876", "displayIdentifier": "ELMISLFAGEF876", "healthState": {"raw": "GOOD", "text": "Good"}, "systemHealthImpact": 0, "systemHealthIssueCount": 0, "healthScore": 100, "configurationImpact": 0, "configurationIssueCount": 0, "capacityImpact": 0, "capacityIssueCount": 0, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 0}, {"id": "Business Analytics", "location": "Round Rock, TX", "name": "Business Analytics", "model": "SC7020F", "type": "SC", "serialNumber": "95148", "displayIdentifier": "95148", "healthState": {"raw": "GOOD", "text": "Good"}, "systemHealthImpact": 0, "systemHealthIssueCount": 0, "healthScore": 100, "configurationImpact": 0, "configurationIssueCount": 0, "capacityImpact": 0, "capacityIssueCount": 0, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 0}, {"id": "Software_Dev", "location": "Cork", "name": "Software_Dev", "model": "VMAX-1SE", "type": "VMAX", "serialNumber": "000194900732", "displayIdentifier": "000194900732", "healthState": {"raw": "GOOD", "text": "Good"}, "systemHealthImpact": 0, "systemHealthIssueCount": 0, "healthScore": 100, "configurationImpact": 0, "configurationIssueCount": 0, "capacityImpact": 0, "capacityIssueCount": 0, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 0}, {"id": "SIO00174657100", "location": "Hopkinton, MA", "name": "Prod with iCDM", "model": "X1", "type": "XIO", "serialNumber": "SIO00174657100", "displayIdentifier": "SIO00174657100", "healthState": {"raw": "GOOD", "text": "Good"}, "systemHealthImpact": 0, "systemHealthIssueCount": 0, "healthScore": 100, "configurationImpact": 0, "configurationIssueCount": 0, "capacityImpact": 0, "capacityIssueCount": 0, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 0}, {"id": "SIO00174657444", "location": "Hopkinton, MA", "name": "ERP Production", "model": "X2-R", "type": "XIO", "serialNumber": "SIO00174657444", "displayIdentifier": "SIO00174657444", "healthState": {"raw": "GOOD", "text": "Good"}, "systemHealthImpact": 0, "systemHealthIssueCount": 0, "healthScore": 100, "configurationImpact": 0, "configurationIssueCount": 0, "capacityImpact": 0, "capacityIssueCount": 0, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 0}, {"id": "Manufacturing_Prod", "location": "Hopkinton, MA", "name": "Manufacturing_Prod", "model": "PowerStore 1000X", "type": "POWERSTORE", "serialNumber": "PS697652962112", "displayIdentifier": "RV429L62", "healthState": {"raw": "GOOD", "text": "Good"}, "systemHealthImpact": 0, "systemHealthIssueCount": 0, "healthScore": 100, "configurationImpact": 0, "configurationIssueCount": 0, "capacityImpact": 0, "capacityIssueCount": 0, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 0}, {"id": "POWERVAULT_C9NJBC1", "location": "Hopkinton, MA", "name": "Product Design", "model": "ME4084", "type": "POWERVAULT", "serialNumber": "C9NJBC1", "displayIdentifier": "C9NJBC1", "healthState": {"raw": "GOOD", "text": "Good"}, "systemHealthImpact": 0, "systemHealthIssueCount": 0, "healthScore": 100, "configurationImpact": 0, "configurationIssueCount": 0, "capacityImpact": 0, "capacityIssueCount": 0, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 0}, {"id": "SIOLIC1122", "location": "Hopkinton, MA", "name": "Finance DC", "model": "PowerFlex", "type": "POWERFLEX", "serialNumber": "SIOLIC1122", "displayIdentifier": "SIOLIC1122", "healthState": {"raw": "GOOD", "text": "Good"}, "systemHealthImpact": 0, "systemHealthIssueCount": 0, "healthScore": 100, "configurationImpact": 0, "configurationIssueCount": 0, "capacityImpact": 0, "capacityIssueCount": 0, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 0}, {"id": "HR Data Center", "location": "Hopkinton, MA", "name": "HR Data Center", "model": "Isilon Cluster", "type": "ISILON", "serialNumber": "ELMISLFAGEF456", "displayIdentifier": "ELMISLFAGEF456", "healthState": {"raw": "GOOD", "text": "Good"}, "systemHealthImpact": 0, "systemHealthIssueCount": 0, "healthScore": 100, "configurationImpact": 0, "configurationIssueCount": 0, "capacityImpact": 0, "capacityIssueCount": 0, "performanceImpact": 0, "performanceIssueCount": 0, "dataProtectionImpact": 0, "dataProtectionIssueCount": 0, "healthIssueCount": 0}]; 


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
    const { dashboardAndmonitor, loading } = this.props;
    const { tags } = dashboardAndmonitor;
    return (
      <GridContent>
        <React.Fragment>
    <Typography.Title level={3}>System Health</Typography.Title>
    <a style={{ float: 'right', marginTop: 10}}><Space><ExportOutlined />Go To APEX SUPPORT</Space></a>
    <Alert
      style={{ marginTop: 50 }}
      message={<Typography.Title style={{ color: '#0076CE'}} level={3}>Introducing your CloudIQ Health Score.</Typography.Title>}
      description={<>
                     <div style={{ width: 1100}}>Your score can help you spot where your most severe health issues are, based on 5 core factors: Components, Configuration, Capacity, Performance and Data Protection. The area with the highest risk to your system's health will hurt your score until actions are taken towards remediation.</div>
                     <Space style={{ marginTop: 30, width: '80%' }}>
                         <><div style={{ width: 10, height: 10, background: '#6EA204'}}/><Typography.Text style={{ color: '#6EA204'}}>Good 95-100</Typography.Text></>
                         <><div style={{ width: 10, height: 10, background: '#F2AF00'}}/><Typography.Text style={{ color: '#F2AF00'}}>FAIR 71-94</Typography.Text></>
                         <><div style={{ width: 10, height: 10, background: '#CE1126'}}/><Typography.Text style={{ color: '#CE1126'}}>POOR 0-70</Typography.Text></>
                     </Space>
                     <Space style={{ marginTop: 30, width: '20%', marginLeft: 'auto', marginRight: 0 }} >
                         <Checkbox>Don't show again</Checkbox>
                         <a style={{ marginLeft: 'auto', marginRight: 0 }}>LEARN MORE</a>
                     </Space>
                   </>}
      type="info"
      closable
    />

<div style={{ marginTop: 20, marginBottom: 10 }}><FilterOutlined style={{ fontSize: 20, color: '#0E7DD0' }} /><Typography.Text>{ '  ' + cardData.length + ' Systems'}</Typography.Text></div>
<Card 
  tabList={ [{key: 'storage', tab: 'STORAGE'}, {key: 'networking', tab: 'NETWORKING'}, {key: 'hci', tab: 'HCI'}, {key: 'dataprotection', tab: 'DATA PROTECTION'}] } 
  tabProps={{ centered: true }}>
          <Row gutter={24}>
            { cardData.map( item => 
            <Col xl={4} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
              <Card
                title={ <><Typography.Title level={4} style={{ color: '#00447C' }}>{item.name}</Typography.Title><span>{item.model + '|' + item.displayIdentifier}</span></> }
                bordered={true}
                style={{ height: 320}}
                className={styles.pieCard}
              >
              <Card.Meta description="Health Score" />
              <Row>
                <Col span={12}>
                    <Pie
                      subTitle={<Typography.Text strong={true} style={{ color: item.healthScore < 80 ? "#CE1126": item.healthScore >=95 ? '#6EA204': '#F2AF00' }}>{ item.healthScore < 80 ? "POOR": item.healthScore >=95 ? "GOOD": "FAIR" }</Typography.Text>}
                      color={ item.healthScore < 80 ? "#CE1126": item.healthScore >=95 ? '#6EA204': '#F2AF00' }
                      percent={item.healthScore}
                      total={<Typography.Title level={1} style={{ color: item.healthScore < 80 ? "#CE1126": item.healthScore >=95 ? '#6EA204': '#F2AF00' }}>{item.healthScore}</Typography.Title>}
                      style={{ marginTop: 20 }}
                      height={180}
                      lineWidth={10}
                    />
                </Col>
                <Col span={12}>
                  <div>
                    <Statistic title="Issues" value={item.healthIssueCount} />
                    <Divider />
                    <Space>
                      <Tooltip placement='bottomRight' title={<Statistic title="Component Issues" value={item.systemHealthIssueCount} /> } color="white" >
                        <ComponentIssueIcon style={{ color: '#0076CE' }} />
                        { item.systemHealthIssueCount == 0 && <CheckOutlined style={{ color: '#77A814'} } /> }
                        { item.systemHealthIssueCount != 0 && <span style={{ color: item.healthScore < 80 ? "#CE1126": item.healthScore >=95 ? '#6EA204': '#F2AF00' }}>{item.systemHealthImpact}</span> }
                      </Tooltip>
                      <Tooltip placement='bottomRight' title={<Statistic title="Configuration Issues" value={item.configurationIssueCount} /> } color="white" >
                        <ConfigurationIssueIcon style={{ color: '#0076CE' }} />
                        { item.configurationIssueCount == 0 && <CheckOutlined style={{ color: '#77A814'} } /> }
                        { item.configurationIssueCount != 0 && <span style={{ color: item.healthScore < 80 ? "#CE1126": item.healthScore >=95 ? '#6EA204': '#F2AF00' }}>{item.configurationImpact}</span> }
                      </Tooltip>
                      <Tooltip placement='bottomRight' title={<Statistic title="Capacity Issues" value={item.capacityIssueCount} /> } color="white" >
                        <CapacityIssueIcon style={{ color: '#0076CE' }} />

                        { item.capacityIssueCount == 0 && <CheckOutlined style={{ color: '#77A814'} } /> }
                        { item.capacityIssueCount != 0 && <span style={{ color: item.healthScore < 80 ? "#CE1126": item.healthScore >=95 ? '#6EA204': '#F2AF00' }}>{item.capacityImpact}</span> }

                      </Tooltip>
                      <Tooltip placement='bottomRight' title={<Statistic title="Performance Issues" value={item.performanceIssueCount} /> } color="white" >
                        <PerformanceIssueIcon style={{ color: '#0076CE' }} />

                        { item.performanceIssueCount == 0 && <CheckOutlined style={{ color: '#77A814'} } /> }
                        { item.performanceIssueCount != 0 && <span style={{ color: item.healthScore < 80 ? "#CE1126": item.healthScore >=95 ? '#6EA204': '#F2AF00' }}>{item.performanceImpact}</span> }

                      </Tooltip>

                      <Tooltip placement='bottomRight' title={<Statistic title="Data Protection Issues" value={item.dataProtectionIssueCount} /> } color="white" >
                        <DataProtectionIssueIcon style={{ color: '#0076CE' }} />
                        { item.dataProtectionIssueCount == 0 && <CheckOutlined style={{ color: '#77A814'} } /> }
                        { item.dataProtectionIssueCount != 0 && <span style={{ color: 'red' }}>{item.dataProtectionImpact}</span> }

                      </Tooltip>
                    </Space>
                  </div>
                </Col>
              </Row>
              </Card>
            </Col>
           )};
          </Row>
</Card>
        </React.Fragment>
      </GridContent>
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
  }),
)(Monitor);
