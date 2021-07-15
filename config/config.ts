// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  history: {
    type: 'browser',
  },
  locale: {
    // default zh-CN
    default: 'en-US',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          Routes: ['src/pages/Authorized'],
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/CloudIQ',
            },
            {
              path: '/CloudIQ',
              icon: 'AppstoreOutlined',
              name: 'Overview',
              component: './CloudIQ/overview',
            },
            {
              icon: 'FundOutlined',
              name: 'Health',
              path: '/',
              routes: [
                {
                  path: '/',
                  redirect: '/CloudIQ',
                },
                {
                  name: 'System Health',
                  path: '/system-health',
                  component: './CloudIQ/system-health',
                },
                {
                  path: '/account1',
                  name: 'Health Issues',
                },
                {
                  path: '/account2',
                  name: 'Alerts',
                },
                {
                  path: '/account3',
                  name: 'System Updates',
                },
                {
                  path: '/health/file_detail',
                  name: 'File Detail',
                  component: './CloudIQ/file_detail',
                  hideInMenu: true,
                },
                {
                  path: '/health/block_detail',
                  name: 'Detail',
                  component: './CloudIQ/detail',
                  hideInMenu: true,
                },
              ],
            },
            {
              icon: 'DatabaseOutlined',
              name: 'Inventory',
              path: '/',
              routes: [
                {
                  path: '/',
                  redirect: '/CloudIQ',
                },
                    { 
                      name: 'Systems',
                      icon: 'smile',
                      path: '/requests1',
                    },
                    { 
                      name: 'Hosts',
                      icon: 'smile',
                      path: '/subscriptions/draft-orders1',
                    },
              ],
            },
            {
              icon: 'DatabaseOutlined',
              name: 'Capacity',
              path: '/',
              routes: [
                {
                  path: '/',
                  redirect: '/CloudIQ',
                },
                    {
                      name: 'System Capacity',
                      icon: 'smile',
                      path: '/system-capacity',
                    },
                    {
                      name: 'Pools',
                      icon: 'smile',
                      path: '/pools',
                    },
                    {
                      name: 'Reclaimable Storage',
                      icon: 'smile',
                      path: '/reclaimable-storage',
                    },
              ],
            },
            {
              icon: 'BarChartOutlined',
              name: 'Performance',
              path: '/incidents',
              routes: [
                { 
                  path: '/',
                  redirect: '/CloudIQ',
                },
                    
                    { 
                      name: 'System Performance',
                      icon: 'smile',
                      path: '/system-performance',
                    },
                    { 
                      name: 'Metrics Browser',
                      icon: 'smile',
                      path: '/metrics-browser',
                    },
              ],
            },
            {
              icon: 'SafetyCertificateOutlined',
              name: 'Cybersecurity',
              path: '/',
              routes: [
                {
                  path: '/',
                  redirect: '/CloudIQ',
                },
                    {
                      name: 'System Risk',
                      icon: 'smile',
                      path: '/system-risk',
                    },
                    {
                      name: 'Cybersecurity Issues',
                      icon: 'smile',
                      path: '/cybersecurity-issues',
                    },
                    {
                      name: 'Policy',
                      icon: 'smile',
                      path: '/policy',
                    },
              ],
            },
            {
              icon: 'ScheduleOutlined',
              name: 'Reports',
              path: '/',
              routes: [
                {
                  path: '/',
                  redirect: '/CloudIQ',
                },
                    {
                      name: 'Report Browser',
                      icon: 'smile',
                      path: '/report-browser',
                    },
                    {
                      name: 'All Reports',
                      icon: 'smile',
                      path: '/all-reports',
                    },
              ],
            },
            {
              icon: 'SyncOutlined',
              name: 'Lifecycle',
              path: '/',
              routes: [
                {
                  path: '/',
                  redirect: '/CloudIQ',
                },
                    {
                      name: 'Milestones Outlook',
                      icon: 'smile',
                      path: '/milestones-outlook',
                    },
                    {
                      name: 'Service Contracts',
                      icon: 'smile',
                      path: '/service-contracts',
                    },
              ],
            },
            {
              icon: 'SettingOutlined',
              name: 'Admin',
              path: '/',
              routes: [
                {
                  path: '/',
                  redirect: '/CloudIQ',
                },
                    {
                      name: 'Customization',
                      icon: 'smile',
                      path: '/customization',
                    },
                    {
                      name: 'Connectivity',
                      icon: 'smile',
                      path: '/connectivity',
                    },
                    {
                      name: 'Collectors',
                      icon: 'smile',
                      path: '/collectors',
                    },
                    {
                      name: 'Settings',
                      icon: 'smile',
                      path: '/settings',
                    },
                    {
                      name: 'User Access',
                      icon: 'smile',
                      path: '/user-access',
                    },

              ],
            },
            {
              component: '404',
            },
          ],
        },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  esbuild: {},
});
