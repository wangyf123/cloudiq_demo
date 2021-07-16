import React from 'react';
import { Checkbox, Typography } from 'antd';
import { CheckSquareFilled } from '@ant-design/icons';
import './container.less';

const { Title, Text } = Typography;

const colors = ['#7BB4EB', '#434348', '#8FED7C', '#F7A25A', '#8184E9'];

const ChartContainer = ({ title, metric = '', checkboxes, children }) => {
  return (
    <div>
      <Title level={4}>{title}</Title>
      <div className="chartcontainer">
        <div className="chartcontainer-left">
          <div className="chartcontainer-column" style={{ paddingLeft: 70 }}>
            <Text type="secondary">{metric || 'Metric'}</Text>
          </div>
          {checkboxes.map((text, index) => (
            <div className="chartcontainer-column" key={index}>
              <CheckSquareFilled
                style={{ marginRight: 24, color: colors[index], fontSize: 24 }}
              />
              <Text style={{ fontWeight: 'bold' }}>{text}</Text>
            </div>
          ))}
        </div>
        <div className="chartcontainer-right">{children}</div>
      </div>
    </div>
  );
};

export default ChartContainer;
