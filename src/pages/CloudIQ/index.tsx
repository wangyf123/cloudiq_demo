import { EllipsisOutlined } from '@ant-design/icons';
import { Space, Select, Card, Col, Dropdown, Menu, Row } from 'antd';
import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import type { RadioChangeEvent } from 'antd/es/radio';
import type { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import type moment from 'moment';
import type { Dispatch } from 'umi';
import { connect } from 'umi';

import { getTimeDistance } from './utils/utils';
import type { AnalysisData } from './data.d';
import styles from './style.less';

import IntroduceRow from './components/IntroduceRow';
import SalesCard from './components/SalesCard';
import TopSearch from './components/TopSearch';
import ProportionSales from './components/ProportionSales';
import ProportionSalesBack from './components/ProportionSalesBack';
import ProportionSalesIncident from './components/ProportionSalesIncident';
import ProportionSalesChange from './components/ProportionSalesChange';
import OfflineDataBack from './components/OfflineDataBack';

type RangePickerValue = RangePickerProps<moment.Moment>['value'];

interface AnalysisProps {
  overview: AnalysisData;
  dispatch: Dispatch;
  loading: boolean;
}

interface AnalysisState {
  salesType: 'all' | 'online' | 'stores';
  currentTabKey: string;
  rangePickerValue: RangePickerValue;
}

class Analysis extends Component<AnalysisProps, AnalysisState> {
  state: AnalysisState = {
    salesType: 'all',
    currentTabKey: '',
    rangePickerValue: getTimeDistance('year'),
  };

  reqRef: number = 0;

  timeoutId: number = 0;

  componentDidMount() {
    const { dispatch } = this.props;
    this.reqRef = requestAnimationFrame(() => {
      dispatch({
        type: 'overview/fetch',
      });
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'overview/clear',
    });
    cancelAnimationFrame(this.reqRef);
    clearTimeout(this.timeoutId);
  }

  handleChangeSalesType = (e: RadioChangeEvent) => {
    this.setState({
      salesType: e.target.value,
    });
  };

  handleTabChange = (key: string) => {
    this.setState({
      currentTabKey: key,
    });
  };

  handleRangePickerChange = (rangePickerValue: RangePickerValue) => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue,
    });

    dispatch({
      type: 'overview/fetchSalesData',
    });
  };

  selectDate = (type: 'today' | 'week' | 'month' | 'year') => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue: getTimeDistance(type),
    });

    dispatch({
      type: 'overview/fetchSalesData',
    });
  };

  isActive = (type: 'today' | 'week' | 'month' | 'year') => {
    const { rangePickerValue } = this.state;
    if (!rangePickerValue) {
      return '';
    }
    const value = getTimeDistance(type);
    if (!value) {
      return '';
    }
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return '';
    }
    if (
      rangePickerValue[0].isSame(value[0] as moment.Moment, 'day') &&
      rangePickerValue[1].isSame(value[1] as moment.Moment, 'day')
    ) {
      return styles.currentDate;
    }
    return '';
  };

  render() {
    const { rangePickerValue, salesType, currentTabKey } = this.state;
    const { overview, loading } = this.props;
    const {
      visitData,
      visitData2,
      salesData,
      searchData,
      offlineData,
      salesTypeData,
      salesTypeDataOnline,
      salesTypeDataOffline,
    } = overview;

const offlineChartData = [];
for (let i = 0; i < 12; i += 1) {
  var date = new Date();
  date.setMonth(i+1)
  offlineChartData.push({
    x: (i+1) + '.Jun', 
    y1: Math.floor(Math.random() * 100) + 10,
  });
}

const salesPieData = [
  {
    x: 'Open',
    y: 6,
  },
  {
    x: 'In Progress',
    y: 0,
  },
];

    const activeKey = currentTabKey || (offlineData[0] && offlineData[0].name);
    return (
      <GridContent>
        <React.Fragment>
          <OfflineDataBack
            activeKey={activeKey}
            loading={loading}
            offlineData={offlineData}
            offlineChartData={offlineChartData}
            handleTabChange={this.handleTabChange}
          />
          <Row
            gutter={24}
            style={{
              marginTop: 24,
            }}
          >
            <Col xl={12} lg={24} md={24} sm={24} xs={24}>
              <ProportionSales
                salesType={salesType}
                loading={loading}
                salesPieData={salesPieData}
                handleChangeSalesType={this.handleChangeSalesType}
              />
            </Col>
            <Col xl={12} lg={24} md={24} sm={24} xs={24}>
              <ProportionSalesBack
                salesType={salesType}
                loading={loading}
                salesPieData={salesPieData}
                handleChangeSalesType={this.handleChangeSalesType}
              />
            </Col>
          </Row>
          <Row
            gutter={24}
            style={{
              marginTop: 24,
            }}
          >
            <Col xl={12} lg={24} md={24} sm={24} xs={24}>
              <ProportionSalesIncident
                salesType={salesType}
                loading={loading}
                salesPieData={salesPieData}
                handleChangeSalesType={this.handleChangeSalesType}
              />
            </Col>
            <Col xl={12} lg={24} md={24} sm={24} xs={24}>
              <ProportionSalesChange
                salesType={salesType}
                loading={loading}
                salesPieData={salesPieData}
                handleChangeSalesType={this.handleChangeSalesType}
              />
            </Col>
          </Row>

<Card title="SERVICE REQUESTS" style={{ marginTop: 24}}
     extra={
       <Space>
         <span style={{ marginRight: '10px'}}>By Date</span>
         <Select defaultValue="This Month" style={{ width: '100px' }}><Select.Option>Today</Select.Option><Select.Option>Requests</Select.Option><Select.Option>This Week</Select.Option><Select.Option>This Month</Select.Option><Select.Option>Last 3 Months</Select.Option></Select>
       </Space>
     }

>
  <div style={{ height: 60, border: '2px #5BC0DE solid' }}><p style={{ color: '#7F90B7', margin: 20}}>No records in Requested Item</p></div>
</Card>

        </React.Fragment>
      </GridContent>
    );
  }
}

export default connect(
  ({
    overview,
    loading,
  }: {
    overview: any;
    loading: {
      effects: Record<string, boolean>;
    };
  }) => ({
    overview,
    loading: loading.effects['overview/fetch'],
  }),
)(Analysis);
