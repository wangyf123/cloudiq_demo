import { Statistic, Row, Col, Typography, Select, Button, Card, Radio, Space } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'umi';
import type { RadioChangeEvent } from 'antd/es/radio';
import React from 'react';
import type { VisitDataType } from '../data.d';
import { Pie } from './Charts';
import Yuan from '../utils/Yuan';
import styles from '../style.less';

const ProportionSalesChange = ({
  dropdownGroup,
  salesType,
  loading,
  salesPieData,
  handleChangeSalesType,
}: {
  loading: boolean;
  dropdownGroup: React.ReactNode;
  salesType: 'all' | 'online' | 'stores';
  salesPieData: VisitDataType[];
  handleChangeSalesType?: (e: RadioChangeEvent) => void;
}) => (
  <Card
    loading={loading}
    className={styles.salesCard}
    bordered={false}
    title="CHANGES"
    style={{
      height: '100%',
    }}
    actions={[
      <Statistic title="SCHEDULED" value={6} valueStyle={{ color: '#50A0D6' }} />,
      <Statistic title="IN PROGRESS" value={0} valueStyle={{ color: '#50A0D6' }} />,
      <Statistic title="COMPLETED" value={0} valueStyle={{ color: '#50A0D6' }} />
    ]}
    extra={
      <div className={styles.salesCardExtra}>
        <div className={styles.salesTypeRadio}>
          <Select style={{ width: '150px'}} defaultValue="Myself"><Select.Option>Myself</Select.Option><Select.Option>My Company</Select.Option></Select>
          <Button><Space><span>View more details</span><RightOutlined style={{ color: "#0076CE"}} /></Space></Button>
        </div>
      </div>
    }
  >
    <div>

<Row gutter={16}>
<Col>
<div style={{ margin: '90px' }}>
<Row><Typography.Title style={{ color: '#0076CE'}}>6</Typography.Title></Row><Row><Typography.Title level={4} style={{ color: '#0076CE'}}>Total Changes</Typography.Title></Row>
</div>
</Col>
</Row>
    </div>
  </Card>
);

export default ProportionSalesChange;
