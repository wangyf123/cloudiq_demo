import { Space, Select, DatePicker, Card, Typography } from 'antd';
import React from 'react';
import { FastBackwardOutlined, FastForwardOutlined } from '@ant-design/icons';
import type { OfflineChartData, OfflineDataType } from '../data.d';
import moment from 'moment';
import Area from './Area';

const OfflineDataBack = ({
  loading,
}: {
  activeKey: string;
  loading: boolean;
  offlineData: OfflineDataType[];
  offlineChartData: OfflineChartData[];
  handleTabChange: (activeKey: string) => void;
}) => (
  <div
    style={{
      border: '1px solid #eeeeee',
      marginTop: 24,
      borderRadius: 2,
      padding: 12,
    }}
  >
    <Typography.Title level={4} style={{ marginBottom: 12 }}>
      Health Score History
    </Typography.Title>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <DatePicker.RangePicker style={{ marginRight: 20 }} />
      <FastBackwardOutlined style={{ marginRight: 20, color: '#72C0FF' }} />
      <FastForwardOutlined style={{ marginRight: 30, color: '#72C0FF' }} />
    </div>
    <div
      style={{
        display: 'flex',
        height: 300,
        marginTop: 12,
        border: '1px solid #eeeeee',
      }}
    >
      <div
        style={{
          flex: '1 1 60%',
          padding: 8,
          borderRight: '1px solid #eeeeee',
        }}
      >
        <Area />
      </div>
      <div style={{ flex: '1 1 40%' }}>
        <div style={{ padding: 8, borderBottom: '1px solid #eeeeee' }}>
          <Typography.Title level={4} style={{ margin: 0 }}>
            Health Changes
          </Typography.Title>
        </div>
        <div style={{ padding: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                height: 40,
                width: 40,
                borderRadius: '50%',
                background: '#6EA201',
                color: '#ffffff',
                lineHeight: '40px',
                textAlign: 'center',
                marginRight: 12,
              }}
            >
              100
            </div>
            <div>
              <div>
                <Typography.Text type="secondary">
                  Jun 24,2021 8:53 AM
                </Typography.Text>
              </div>
              <div>
                <Typography.Text>
                  0 NEW Issues,0 Resolved Issues
                </Typography.Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OfflineDataBack;
