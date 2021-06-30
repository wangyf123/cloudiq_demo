import { Space, Select, DatePicker, Card, Col, Row, Tabs } from 'antd';
import { FormattedMessage, formatMessage } from 'umi';
import React from 'react';
import type { OfflineChartData, OfflineDataType } from '../data.d';
import moment from 'moment';
import { TimelineChart, Pie } from './Charts';
import NumberInfo from './NumberInfo';
import styles from '../style.less';
import Curved from './Curved';

const CustomTab = ({
  data,
  currentTabKey: currentKey,
}: {
  data: OfflineDataType;
  currentTabKey: string;
}) => (
  <Row gutter={8} style={{ width: 138, margin: '8px 0' }}>
    <Col span={12}>
      <NumberInfo
        title={data.name}
        subTitle={
          <FormattedMessage
            id="dashboardandanalysis.analysis.conversion-rate"
            defaultMessage="Conversion Rate"
          />
        }
        gap={2}
        total={`${data.cvr * 100}%`}
        theme={currentKey !== data.name ? 'light' : undefined}
      />
    </Col>
    <Col span={12} style={{ paddingTop: 36 }}>
      <Pie
        animate={false}
        inner={0.55}
        tooltip={false}
        margin={[0, 0, 0, 0]}
        percent={data.cvr * 100}
        height={64}
      />
    </Col>
  </Row>
);

const { TabPane } = Tabs;

const OfflineDataBack = ({
  activeKey,
  loading,
  offlineData,
  offlineChartData,
  handleTabChange,
}: {
  activeKey: string;
  loading: boolean;
  offlineData: OfflineDataType[];
  offlineChartData: OfflineChartData[];
  handleTabChange: (activeKey: string) => void;
}) => (
  <Card loading={loading} className={styles.offlineCard}
     title="Services Overview"
     extra={
       <Space>
         <div>
         <span style={{ marginRight: '10px'}}>By User</span>
         <Select defaultValue="Me" style={{ width: '130px' }}><Select.Option>Me</Select.Option><Select.Option>My Company</Select.Option></Select>
         </div>
         <div>
         <span style={{ marginRight: '10px'}}>By Date</span>
         <DatePicker.RangePicker
           defaultValue={[moment().subtract(7, 'days'), moment()]}
         />
         </div>
         <div>
         <span style={{ marginRight: '10px'}}>By Type</span>
         <Select defaultValue="Incidents" style={{ width: '100px' }}><Select.Option>Incidents</Select.Option><Select.Option>Requests</Select.Option><Select.Option>Changes</Select.Option></Select>
         </div>
       </Space>
     }
  >
          <div style={{ padding: '0 24px' }}>
            <Curved />
          </div>
  </Card>
);

export default OfflineDataBack;
