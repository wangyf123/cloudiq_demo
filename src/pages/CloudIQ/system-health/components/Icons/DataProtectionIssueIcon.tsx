import Icon from '@ant-design/icons';

const DataProtectionSvg = () => (

  <svg viewBox="0 0 32 32" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false" fill="currentColor"> 
    <path d="M30.1 6.7L30 4.8c0-.3-.2-.7-.5-.9-.3-.2-.6-.3-.8-.3l-1.9.1c-.2 0-1.7 0-4.5-.8-2.8-.7-4.3-1.8-4.3-1.8l-1.2-1c-.4-.3-1.1-.3-1.5 0l-1.1.9s-1.5 1.1-4.3 1.8c-3 1-4.5 1-4.6 1l-1.9-.1c-.4 0-.7.1-.9.3-.3.2-.4.5-.5.8l-.1 1.9c0 .2-.3 4.5 1 9.6 1.8 7 5.9 12.3 11.6 15.1l.9.4c.2.2.4.2.6.2.2 0 .4 0 .5-.1l.9-.4c5.8-2.8 9.8-8.1 11.6-15.1 1.4-5.2 1.1-9.5 1.1-9.7zm-3 9.2c-1.7 6.5-5.4 11.2-10.6 13.8l-.5.2V2.2l.7.6c.2.1 1.9 1.3 5 2.2 2.9.8 4.6.8 5 .8l1.3-.1.1 1.1c0 .1.3 4.3-1 9.1z" /> 
  </svg>
);
const DataProtectionIssueIcon = props => <Icon component={DataProtectionSvg} {...props} />;

export default DataProtectionIssueIcon;
