import React from 'react';
import { Typography } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import {
  CheckOutlined,
  CloseCircleFilled,
  DownOutlined,
} from '@ant-design/icons';
import Doubleaxes from '../components/Charts/Doubleaxes';
import lineChart from '../../../../public/line-chart.png';

import './index.less';

const { Title, Paragraph, Text } = Typography;

const Overview = () => {
  return (
    <PageContainer>
      <div
        style={{
          display: 'flex',
          border: '1px solid #cccccc',
          height: 120,
          background: '#ffffff',
          borderRadius: '8px',
          padding: 12,
        }}
      >
        <div className="overview-1">
          <Title level={5}>Connectivity to CloudIQ</Title>
          <Text type="success">All 46 systems are connected</Text>
          <CheckOutlined
            style={{ marginTop: 12, fontSize: 20, color: '#6EA201' }}
          />
        </div>
        <div className="overview-1">
          <Title level={5}>Contract Expiration</Title>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '0 auto',
            }}
          >
            <CloseCircleFilled style={{ color: 'red', marginRight: 8 }} />
            <Text type="success">6</Text>
          </div>
          <Text>Expired</Text>
        </div>
        <div className="overview-1">
          <Title level={5}>Collectors</Title>
          <Text>1</Text>
          <Text>Updates Available</Text>
        </div>
      </div>
      <div className="overview-content">
        <div className="overview-content-left">
          <div className="overview-content--collapse">
            <div className="overview-content--collapse-header">
              <Title level={5}>System Health</Title>
              <div className="overview-content--collapse-opt">
                <Text type="secondary" style={{ marginRight: 8 }}>
                  All Devices(40)
                </Text>
                <DownOutlined />
              </div>
            </div>
            <div className="overview-content--collapse-neck">
              <div className="overview-content--collapse-neck-badge">
                <Text style={{ marginRight: 8 }}>POOR</Text>
                <div className="overview-content--collapse-neck-round">6</div>
              </div>
              <div className="overview-content--collapse-neck-badge">
                <Text style={{ marginRight: 8 }}>POOR</Text>
                <div className="overview-content--collapse-neck-round">6</div>
              </div>
              <div className="overview-content--collapse-neck-badge">
                <Text style={{ marginRight: 8 }}>POOR</Text>
                <div className="overview-content--collapse-neck-round">6</div>
              </div>
            </div>
            <div className="overview-content--collapse-footer">
              <div className="overview-content--collapse-footer-left">
                <div className="overview-content--collapse-footer-header">
                  <div className="overview-content--collapse-footer-header-title">
                    System Name
                  </div>
                  <div className="overview-content--collapse-footer-header-title">
                    Health Score
                  </div>
                </div>
                <div className="overview-content--collapse-footer-body">
                  <div className="overview-content--collapse-footer-body-item">
                    <div className="overview-content--collapse-footer-body-item-left">
                      <Text style={{ color: '#0672CB' }}>Test_Dev</Text>
                      <Text>UnityVSA |</Text>
                      <Text>FCNCH0972C32F3</Text>
                    </div>
                    <div className="overview-content--collapse-footer-body-item-right">
                      60
                    </div>
                  </div>
                  <div className="overview-content--collapse-footer-body-item">
                    <div className="overview-content--collapse-footer-body-item-left">
                      <Text style={{ color: '#0672CB' }}>
                        Account Management
                      </Text>
                      <Text>ME4012 | CIQAPU1</Text>
                    </div>
                    <div className="overview-content--collapse-footer-body-item-right">
                      60
                    </div>
                  </div>
                  <div className="overview-content--collapse-footer-body-item">
                    <div className="overview-content--collapse-footer-body-item-left">
                      <Text style={{ color: '#0672CB' }}>Security Office</Text>
                      <Text>PowerScale Cluster |</Text>
                      <Text>ELMISLFAGEF789</Text>
                    </div>
                    <div className="overview-content--collapse-footer-body-item-right">
                      60
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="overview-content--collapse-footer-right"
                style={{ background: '#f5f5f5', textAlign: 'center' }}
              >
                <div style={{ marginTop: 35 }}>
                  <Text type="secondary">Top Health Issue</Text>
                </div>
                <Title level={4} style={{ marginTop: 35 }}>
                  Capacity
                </Title>
                <Title level={3} type="danger" style={{ marginBottom: 35 }}>
                  -40
                </Title>
                <Paragraph type="secondary">
                  The storage pool 'Test_Dev_Pool1' is full and oversubscribed.
                </Paragraph>
              </div>
            </div>
          </div>

          <div className="overview-content--collapse" style={{ marginTop: 12 }}>
            <div className="overview-content--collapse-header">
              <Title level={5}>Capacity Approaching Full</Title>
              <div className="overview-content--collapse-opt">
                <Text type="secondary" style={{ marginRight: 8 }}>
                  All
                </Text>
                <DownOutlined />
              </div>
            </div>
            <div className="overview-content--collapse-neck">
              <div className="overview-content--collapse-neck-badge">
                <Text>3 Imminent</Text>
              </div>
              <div className="overview-content--collapse-neck-badge">
                <Text>1 Full</Text>
              </div>
              <div className="overview-content--collapse-neck-badge">
                <Text>3 Within a week</Text>
              </div>
              <div className="overview-content--collapse-neck-badge">
                <Text>19 Within a month</Text>
              </div>
              <div className="overview-content--collapse-neck-badge">
                <Text>19 Within a month</Text>
              </div>
            </div>
            <div className="overview-content--collapse-footer">
              <div className="overview-content--collapse-footer-left">
                <div className="overview-content--collapse-footer-header">
                  <div className="overview-content--collapse-footer-header-title">
                    System Name
                  </div>
                  <div className="overview-content--collapse-footer-header-title">
                    Date to Full
                  </div>
                </div>
                <div className="overview-content--collapse-footer-body">
                  <div className="overview-content--collapse-footer-body-item">
                    <div className="overview-content--collapse-footer-body-item-left">
                      <Text style={{ color: '#0672CB' }}>Test_Dev</Text>
                      <Text>UnityVSA |</Text>
                      <Text>FCNCH0972C32F3</Text>
                    </div>
                    <div className="overview-content--collapse-footer-body-item-right">
                      <Text type="danger">Within 17 hours</Text>
                    </div>
                  </div>
                  <div className="overview-content--collapse-footer-body-item">
                    <div className="overview-content--collapse-footer-body-item-left">
                      <Text style={{ color: '#0672CB' }}>
                        Account Management
                      </Text>
                      <Text>ME4012 | CIQAPU1</Text>
                    </div>
                    <div className="overview-content--collapse-footer-body-item-right">
                      <Text type="danger">Within 17 hours</Text>
                    </div>
                  </div>
                  <div className="overview-content--collapse-footer-body-item">
                    <div className="overview-content--collapse-footer-body-item-left">
                      <Text style={{ color: '#0672CB' }}>Security Office</Text>
                      <Text>PowerScale Cluster |</Text>
                    </div>
                    <div className="overview-content--collapse-footer-body-item-right">
                      <Text type="danger">Within 17 hours</Text>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="overview-content--collapse-footer-right"
                style={{
                  background: '#f5f5f5',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Paragraph type="secondary">
                  This pool is at risk of running out of space within 5 hours.
                </Paragraph>
              </div>
            </div>
          </div>

          <div className="overview-content--collapse" style={{ marginTop: 12 }}>
            <div className="overview-content--collapse-header">
              <Title level={5}>Capacity Approaching Full</Title>
              <div className="overview-content--collapse-opt">
                <Text type="secondary" style={{ marginRight: 8 }}>
                  4 systems with performance impacts
                </Text>
              </div>
            </div>
            <div className="overview-content--collapse-footer">
              <div className="overview-content--collapse-footer-left">
                <div className="overview-content--collapse-footer-header">
                  <div className="overview-content--collapse-footer-header-title">
                    System Name
                  </div>
                  <div className="overview-content--collapse-footer-header-title">
                    Impacts
                  </div>
                </div>
                <div className="overview-content--collapse-footer-body">
                  <div className="overview-content--collapse-footer-body-item">
                    <div className="overview-content--collapse-footer-body-item-left">
                      <Text style={{ color: '#0672CB' }}>Test_Dev</Text>
                      <Text>UnityVSA |</Text>
                      <Text>FCNCH0972C32F3</Text>
                    </div>
                    <div className="overview-content--collapse-footer-body-item-right">
                      <Text type="danger">Within 17 hours</Text>
                    </div>
                  </div>
                  <div className="overview-content--collapse-footer-body-item">
                    <div className="overview-content--collapse-footer-body-item-left">
                      <Text style={{ color: '#0672CB' }}>
                        Account Management
                      </Text>
                      <Text>ME4012 | CIQAPU1</Text>
                    </div>
                    <div className="overview-content--collapse-footer-body-item-right">
                      <Text type="danger">Within 17 hours</Text>
                    </div>
                  </div>
                  <div className="overview-content--collapse-footer-body-item">
                    <div className="overview-content--collapse-footer-body-item-left">
                      <Text style={{ color: '#0672CB' }}>Security Office</Text>
                      <Text>PowerScale Cluster |</Text>
                    </div>
                    <div className="overview-content--collapse-footer-body-item-right">
                      <Text type="danger">Within 17 hours</Text>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="overview-content--collapse-footer-right"
                style={{ height: 322 }}
              >
                <Doubleaxes />
              </div>
            </div>
          </div>
        </div>
        <div className="overview-content-right">
          <div className="overview-content--collapse">
            <div
              className="overview-content--collapse-header"
              style={{
                background: '#F5F5F5',
              }}
            >
              <Title level={5}>Cybersecurity Risks</Title>
              <div className="overview-content--collapse-opt">
                <Text type="secondary">2 Systems</Text>
              </div>
            </div>
            <div
              className="overview-content--collapse-footer"
              style={{ flexDirection: 'column' }}
            >
              <div className="overview-content--collapse-footer-rhino">
                <div>
                  <Text type="danger">High</Text>
                </div>
                <div>
                  <Text type="secondary">High 1</Text>
                  <Text>Medium1</Text>
                </div>
                <div>
                  <Text type="secondary">8 Issues</Text>
                  <Text>1 Last 24</Text>
                  <Text>Hours</Text>
                </div>
              </div>
              <div className="overview-content--collapse-footer-rhino">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CloseCircleFilled
                      style={{ color: 'red', marginRight: 8 }}
                    />
                    <Text>3</Text>
                  </div>
                  <Text>Critical</Text>
                </div>
                <div>
                  <Text>4</Text>
                  <Text>Error</Text>
                </div>
                <div>
                  <Text>10</Text>
                  <Text>Warning</Text>
                </div>
              </div>
              <div
                style={{
                  height: 37,
                  lineHeight: '37px',
                  fontSize: 16,
                  textAlign: 'center',
                  color: '#0672cb',
                  cursor: 'pointer',
                }}
              >
                GO TO AlERTS
              </div>
            </div>
          </div>

          <div className="overview-content--collapse" style={{ marginTop: 13 }}>
            <div className="overview-content--collapse-header">
              <Title level={5}>System Needing Updates</Title>
            </div>
            <div className="overview-content--collapse-neck">
              <div className="overview-content--collapse-neck-badge">
                <Text>3 Imminent</Text>
              </div>
              <div className="overview-content--collapse-neck-badge">
                <Text>1 Full</Text>
              </div>
            </div>
            <div className="overview-content--collapse-footer">
              <div className="overview-content--collapse-footer-left">
                <div className="overview-content--collapse-footer-header">
                  <div className="overview-content--collapse-footer-header-title">
                    System Name
                  </div>
                  <div className="overview-content--collapse-footer-header-title">
                    Date to Full
                  </div>
                </div>
                <div className="overview-content--collapse-footer-body">
                  <div className="overview-content--collapse-footer-body-item">
                    <div className="overview-content--collapse-footer-body-item-left">
                      <Text style={{ color: '#0672CB' }}>Test_Dev</Text>
                      <Text>UnityVSA |</Text>
                      <Text>FCNCH0972C32F3</Text>
                    </div>
                    <div className="overview-content--collapse-footer-body-item-right">
                      Switch Firmware
                    </div>
                  </div>
                  <div className="overview-content--collapse-footer-body-item">
                    <div className="overview-content--collapse-footer-body-item-left">
                      <Text style={{ color: '#0672CB' }}>
                        Account Management
                      </Text>
                      <Text>ME4012 | CIQAPU1</Text>
                    </div>
                    <div className="overview-content--collapse-footer-body-item-right">
                      Switch Firmware
                    </div>
                  </div>
                  <div className="overview-content--collapse-footer-body-item">
                    <div className="overview-content--collapse-footer-body-item-left">
                      <Text style={{ color: '#0672CB' }}>Security Office</Text>
                      <Text>PowerScale Cluster |</Text>
                    </div>
                    <div className="overview-content--collapse-footer-body-item-right">
                      Switch Firmware
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overview-content--collapse" style={{ marginTop: 13 }}>
            <div className="overview-content--collapse-header">
              <Title level={5}>Reclaimable Storage</Title>
            </div>
            <div className="overview-content--collapse-footer">
              <div className="overview-content--collapse-footer-left">
                <div className="overview-content--collapse-footer-header">
                  <div className="overview-content--collapse-footer-header-title">
                    System Name
                  </div>
                  <div className="overview-content--collapse-footer-header-title">
                    Reclaimable Capacity
                  </div>
                </div>
                <div className="overview-content--collapse-footer-body">
                  <div className="overview-content--collapse-footer-body-item">
                    <div className="overview-content--collapse-footer-body-item-left">
                      <Text style={{ color: '#0672CB' }}>Production</Text>
                      <Text>Unity 650F</Text>
                      <Text>FCNCH0972C32F1 UNITY</Text>
                      <div
                        style={{
                          height: 20,
                          width: '100%',
                          background: '#5B8FF9',
                          float: 'right',
                        }}
                      ></div>
                    </div>
                    <div
                      className="overview-content--collapse-footer-body-item-right"
                      style={{
                        lineHeight: '18px',
                        textAlign: 'right',
                        paddingRight: 12,
                        paddingTop: 12,
                      }}
                    >
                      <Text>19.0 TB (34.35%)</Text>
                      <div
                        style={{
                          height: 20,
                          width: 80,
                          background: '#5AD8A6',
                          float: 'right',
                          marginTop: 47,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="overview-content--collapse-footer-body-item">
                    <div className="overview-content--collapse-footer-body-item-left">
                      <Text style={{ color: '#0672CB' }}>Market Research</Text>
                      <Text>Unity XT 880F</Text>
                      <Text>FCNCH0972C32F1 UNITY</Text>
                      <div
                        style={{
                          height: 20,
                          width: '50%',
                          background: '#5B8FF9',
                        }}
                      ></div>
                    </div>
                    <div
                      className="overview-content--collapse-footer-body-item-right"
                      style={{
                        lineHeight: '18px',
                        textAlign: 'right',
                        paddingRight: 12,
                        paddingTop: 12,
                      }}
                    >
                      <Text>7.0 TB (27%)</Text>
                      <div
                        style={{
                          height: 20,
                          width: '100%',
                          background: '#5AD8A6',
                          float: 'right',
                          marginTop: 47,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="overview-content--collapse-footer-body-item">
                    <div className="overview-content--collapse-footer-body-item-left">
                      <Text style={{ color: '#0672CB' }}>
                        Business Analytics
                      </Text>
                      <Text>SC7020F 95148 SC</Text>
                    </div>
                    <div
                      className="overview-content--collapse-footer-body-item-right"
                      style={{
                        lineHeight: '18px',
                        textAlign: 'right',
                        paddingRight: 12,
                        paddingTop: 12,
                      }}
                    >
                      <Text>7.61 TB (7.6%)</Text>
                      <div
                        style={{
                          height: 20,
                          width: '30%',
                          background: '#5AD8A6',
                          float: 'right',
                          marginTop: 47,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Overview;
