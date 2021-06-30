import Icon from '@ant-design/icons';

const PerformanceSvg = () => (

  <svg viewBox="0 0 24 24" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false" fill="currentColor"> 
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" /> 
  </svg>
);
const PerformanceIssueIcon = props => <Icon component={PerformanceSvg} {...props} />;

export default PerformanceIssueIcon;
