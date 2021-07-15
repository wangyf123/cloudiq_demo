import Icon from '@ant-design/icons';

const ComponentSvg = () => (
  <svg viewBox="0 0 24 24" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false" fill="currentColor">
    <path d="M20 4a2 2 0 00-2-2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4zm-4 12H8v-2h8v2zm0-4H8v-2h8v2zm0-4H8V6h8v2z" /> 
  </svg>
);

const ComponentIssueIcon = props => <Icon component={ComponentSvg} {...props} />;

export default ComponentIssueIcon;
