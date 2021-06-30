import {
  DingdingOutlined,
  DownOutlined,
  EllipsisOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import {
  Badge,
  DatePicker,
  Row,
  Col,
  Button,
  Card,
  Statistic,
  Descriptions,
  Typography,
  Divider,
  Dropdown,
  Menu,
  Popover,
  Steps,
  Table,
  Tooltip,
  Empty,
} from 'antd';
import { GridContent, PageContainer, RouteContext } from '@ant-design/pro-layout';
import React, { Component, Fragment } from 'react';
import { Pie, WaterWave, Gauge, TagCloud, Map } from './components/Charts';
import classNames from 'classnames';
import type { Dispatch } from 'umi';
import { connect } from 'umi';
import type { AdvancedProfileData } from './data.d';
import styles from './style.less';
import OfflineDataBack from '../components/OfflineDataBack';

const { Step } = Steps;
const ButtonGroup = Button.Group;

const menu = (
  <Menu>
    <Menu.Item key="1">选项一</Menu.Item>
    <Menu.Item key="2">选项二</Menu.Item>
    <Menu.Item key="3">选项三</Menu.Item>
  </Menu>
);

const mobileMenu = (
  <Menu>
    <Menu.Item key="1">操作一</Menu.Item>
    <Menu.Item key="2">操作二</Menu.Item>
    <Menu.Item key="3">选项一</Menu.Item>
    <Menu.Item key="4">选项二</Menu.Item>
    <Menu.Item key="">选项三</Menu.Item>
  </Menu>
);

const action = (
  <RouteContext.Consumer>
    {({ isMobile }) => {
      if (isMobile) {
        return (
          <Dropdown.Button
            type="primary"
            icon={<DownOutlined />}
            overlay={mobileMenu}
            placement="bottomRight"
          >
            主操作
          </Dropdown.Button>
        );
      }
      return (
        <Fragment>
          <ButtonGroup>
            <Button>操作一</Button>
            <Button>操作二</Button>
            <Dropdown overlay={menu} placement="bottomRight">
              <Button>
                <EllipsisOutlined />
              </Button>
            </Dropdown>
          </ButtonGroup>
          <Button type="primary">主操作</Button>
        </Fragment>
      );
    }}
  </RouteContext.Consumer>
);

const extra = (
  <div className={styles.moreInfo}>
    <Statistic title="状态" value="待审批" />
    <Statistic title="订单金额" value={568.08} prefix="¥" />
  </div>
);

const description = (
  <RouteContext.Consumer>
    {({ isMobile }) => (
      <Descriptions className={styles.headerList} size="small" column={isMobile ? 1 : 2}>
        <Descriptions.Item label="创建人">曲丽丽</Descriptions.Item>
        <Descriptions.Item label="订购产品">XX 服务</Descriptions.Item>
        <Descriptions.Item label="创建时间">2017-07-07</Descriptions.Item>
        <Descriptions.Item label="关联单据">
          <a href="">12421</a>
        </Descriptions.Item>
        <Descriptions.Item label="生效日期">2017-07-07 ~ 2017-08-08</Descriptions.Item>
        <Descriptions.Item label="备注">请于两个工作日内确认</Descriptions.Item>
      </Descriptions>
    )}
  </RouteContext.Consumer>
);

const desc1 = (
  <div className={classNames(styles.textSecondary, styles.stepDescription)}>
    <Fragment>
      曲丽丽
      <DingdingOutlined style={{ marginLeft: 8 }} />
    </Fragment>
    <div>2016-12-12 12:32</div>
  </div>
);

const desc2 = (
  <div className={styles.stepDescription}>
    <Fragment>
      周毛毛
      <DingdingOutlined style={{ color: '#00A0E9', marginLeft: 8 }} />
    </Fragment>
    <div>
      <a href="">催一下</a>
    </div>
  </div>
);

const popoverContent = (
  <div style={{ width: 160 }}>
    吴加号
    <span className={styles.textSecondary} style={{ float: 'right' }}>
      <Badge status="default" text={<span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>未响应</span>} />
    </span>
    <div className={styles.textSecondary} style={{ marginTop: 4 }}>
      耗时：2小时25分钟
    </div>
  </div>
);

const customDot = (
  dot: React.ReactNode,
  {
    status,
  }: {
    status: string;
  },
) => {
  if (status === 'process') {
    return (
      <Popover placement="topLeft" arrowPointAtCenter content={popoverContent}>
        {dot}
      </Popover>
    );
  }
  return dot;
};

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

const issueData = [{key:1, name:'Components', count: 0},{key:2, name:'Configuration', count: 0},{key:3, name:'Capacity', count: 1},{key:4, name:'Performance', count: 0},{key:5, name:'Data Protection', count: 0},];

const columns = [
  {
    title: '操作类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '操作人',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '执行结果',
    dataIndex: 'status',
    key: 'status',
    render: (text: string) => {
      if (text === 'agree') {
        return <Badge status="success" text="成功" />;
      }
      return <Badge status="error" text="驳回" />;
    },
  },
  {
    title: '操作时间',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
  },
  {
    title: '备注',
    dataIndex: 'memo',
    key: 'memo',
  },
];

interface AdvancedState {
  operationKey: string;
  tabActiveKey: string;
}

class Advanced extends Component<
  { loading: boolean; cloudIQDetail: AdvancedProfileData; dispatch: Dispatch },
  AdvancedState
> {
  public state: AdvancedState = {
    operationKey: 'tab1',
    tabActiveKey: 'detail',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'cloudIQDetail/fetchAdvanced',
    });
  }

  onOperationTabChange = (key: string) => {
    this.setState({ operationKey: key });
  };

  onTabChange = (tabActiveKey: string) => {
    this.setState({ tabActiveKey });
  };

  render() {
    const { operationKey, tabActiveKey } = this.state;
    const { cloudIQDetail, loading } = this.props;
    const { advancedOperation1, advancedOperation2, advancedOperation3 } = cloudIQDetail;

const offlineChartData = [];
for (let i = 0; i < 12; i += 1) {
  var date = new Date();
  date.setMonth(i+1)
  offlineChartData.push({
    x: (i+1) + '.Jun',
    y1: Math.floor(Math.random() * 100) + 10,
  });
}

    const contentList = {
      tab1: (
<>
<Row gutter={24} >
  <Col span={6}>
                    <Pie
                      animate={false}
                      color='#6EA204'
                      percent={95}
                      total={95}
                      style={{ marginTop: 20 }}
                      height={150}
                      lineWidth={2}
                    />
  </Col>
  <Col span={18}>
    <Typography.Title level={3}>Capacity is the top health check category impacting APEX-Block-Boston's health score.</Typography.Title>
  </Col>
</Row>

<Typography.Text style={{ marginTop: 100 }}>Health Issues</Typography.Text>
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
          title="Data Protection"
          border={true}
        >
        All health checks were successful.
        </Card>

</Col>
</Row>
<div style={{ marginTop: 30, marginBottom: 10 }}><Typography.Text >Health Score History</Typography.Text></div>
<DatePicker.RangePicker />
          <OfflineDataBack
            offlineChartData={offlineChartData}
          />

</>
      ),
      tab2: (
        <Table
          pagination={false}
          loading={loading}
          dataSource={advancedOperation2}
          columns={columns}
        />
      ),
      tab3: (
        <Table
          pagination={false}
          loading={loading}
          dataSource={advancedOperation3}
          columns={columns}
        />
      ),
      tab4: (
        <Table
          pagination={false}
          loading={loading}
          dataSource={advancedOperation3}
          columns={columns}
        />
      ),
    };
    return (
      <PageContainer
      >
        <div className={styles.main}>
          <GridContent>
            <Card
              className={styles.tabsCard}
              bordered={false}
              tabList={operationTabList}
              onTabChange={this.onOperationTabChange}
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
  }),
)(Advanced);
