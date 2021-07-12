import { Space, Select, DatePicker, Card } from 'antd';
import React from 'react';
import type { OfflineChartData, OfflineDataType } from '../data.d';
import moment from 'moment';
import styles from '../style.less';
import Curved from './Curved';

const OfflineDataBack = ({
  loading,
}: {
  activeKey: string;
  loading: boolean;
  offlineData: OfflineDataType[];
  offlineChartData: OfflineChartData[];
  handleTabChange: (activeKey: string) => void;
}) => (
  <Card
    loading={loading}
    className={styles.offlineCard}
    title="Health Score History"
    extra={
      <Space>
        <div>
          <DatePicker.RangePicker
            defaultValue={[moment().subtract(7, 'days'), moment()]}
            placeholder={['Start', 'End']}
          />
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
