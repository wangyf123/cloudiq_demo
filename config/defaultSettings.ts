import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = Partial<ProSettings> & {
  pwa: boolean;
};

const proSettings: DefaultSettings = {
  navTheme: 'white',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'CloudIQ',
  pwa: false,
  iconfontUrl: '',
  webSocketAPI: 'ws://10.124.19.150:5678',
};

export type { DefaultSettings };

export default proSettings;
