import Icon from '@ant-design/icons';

const ConfigurationSvg = () => (
  <svg viewBox="0 0 24 24" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false" fill="currentColor"> 
    <path d="M12 10a2 2 0 102 2 2 2 0 00-2-2m7-7H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2m-1.75 9a5.06 5.06 0 01-.05.68l1.48 1.16a.35.35 0 01.08.45l-1.4 2.42a.35.35 0 01-.43.15l-1.74-.7a5.36 5.36 0 01-1.18.69l-.26 1.85a.36.36 0 01-.35.3h-2.8a.36.36 0 01-.35-.29l-.26-1.85a5.14 5.14 0 01-1.18-.69l-1.74.7a.35.35 0 01-.43-.15l-1.4-2.42a.35.35 0 01.08-.45l1.48-1.16a5.34 5.34 0 01-.05-.69 5.06 5.06 0 01.05-.68l-1.48-1.16a.35.35 0 01-.08-.45l1.4-2.42a.35.35 0 01.43-.15l1.74.7a5.36 5.36 0 011.18-.69l.26-1.85a.36.36 0 01.35-.3h2.8a.36.36 0 01.35.29l.26 1.85a5.14 5.14 0 011.18.69l1.74-.7a.35.35 0 01.43.15l1.4 2.42a.35.35 0 01-.08.45l-1.48 1.16a5.34 5.34 0 01.05.69" />
  </svg>
);
const ConfigurationIssueIcon = props => <Icon component={ConfigurationSvg} {...props} />;

export default ConfigurationIssueIcon;
