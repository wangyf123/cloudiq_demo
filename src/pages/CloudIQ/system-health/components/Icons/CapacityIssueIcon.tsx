import Icon from '@ant-design/icons';

const CapacitySvg = () => (

  <svg viewBox="0 0 24 24" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false" fill="currentColor"> 
    <path d="M12 14c-4.4 0-8-1.8-8-4v8c0 2.2 3.6 4 8 4s8-1.8 8-4v-8c0 2.2-3.6 4-8 4M12 10c4.4 0 8-1.8 8-4s-3.6-4-8-4-8 1.8-8 4 3.6 4 8 4" /> 
  </svg>
);
const CapacityIssueIcon = props => <Icon component={CapacitySvg} {...props} />;

export default CapacityIssueIcon;
