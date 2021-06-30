// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/opt/cloudiqcode/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'/opt/cloudiqcode/src/layouts/BasicLayout'), loading: LoadingComponent}),
    "Routes": [
      "src/pages/Authorized"
    ],
    "authority": [
      "admin",
      "user"
    ],
    "routes": [
      {
        "path": "/",
        "redirect": "/CloudIQ",
        "exact": true
      },
      {
        "path": "/CloudIQ",
        "icon": "AppstoreOutlined",
        "name": "Overview",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__CloudIQ__system-health' */'/opt/cloudiqcode/src/pages/CloudIQ/system-health'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "icon": "FundOutlined",
        "name": "Health",
        "path": "/",
        "routes": [
          {
            "path": "/",
            "redirect": "/CloudIQ",
            "exact": true
          },
          {
            "name": "System Health",
            "path": "/system-health",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__CloudIQ__system-health' */'/opt/cloudiqcode/src/pages/CloudIQ/system-health'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/account1",
            "name": "Health Issues",
            "exact": true
          },
          {
            "path": "/account2",
            "name": "Alerts",
            "exact": true
          },
          {
            "path": "/account3",
            "name": "System Updates",
            "exact": true
          },
          {
            "path": "/health/detail",
            "name": "Detail",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__CloudIQ__detail' */'/opt/cloudiqcode/src/pages/CloudIQ/detail'), loading: LoadingComponent}),
            "hideInMenu": true,
            "exact": true
          }
        ]
      },
      {
        "icon": "DatabaseOutlined",
        "name": "Inventory",
        "path": "/",
        "routes": [
          {
            "path": "/",
            "redirect": "/CloudIQ",
            "exact": true
          },
          {
            "name": "Systems",
            "icon": "smile",
            "path": "/requests1",
            "exact": true
          },
          {
            "name": "Hosts",
            "icon": "smile",
            "path": "/subscriptions/draft-orders1",
            "exact": true
          }
        ]
      },
      {
        "icon": "DatabaseOutlined",
        "name": "Capacity",
        "path": "/",
        "routes": [
          {
            "path": "/",
            "redirect": "/CloudIQ",
            "exact": true
          },
          {
            "name": "System Capacity",
            "icon": "smile",
            "path": "/system-capacity",
            "exact": true
          },
          {
            "name": "Pools",
            "icon": "smile",
            "path": "/pools",
            "exact": true
          },
          {
            "name": "Reclaimable Storage",
            "icon": "smile",
            "path": "/reclaimable-storage",
            "exact": true
          }
        ]
      },
      {
        "icon": "BarChartOutlined",
        "name": "Performance",
        "path": "/incidents",
        "routes": [
          {
            "path": "/",
            "redirect": "/CloudIQ",
            "exact": true
          },
          {
            "name": "System Performance",
            "icon": "smile",
            "path": "/system-performance",
            "exact": true
          },
          {
            "name": "Metrics Browser",
            "icon": "smile",
            "path": "/metrics-browser",
            "exact": true
          }
        ]
      },
      {
        "icon": "SafetyCertificateOutlined",
        "name": "Cybersecurity",
        "path": "/",
        "routes": [
          {
            "path": "/",
            "redirect": "/CloudIQ",
            "exact": true
          },
          {
            "name": "System Risk",
            "icon": "smile",
            "path": "/system-risk",
            "exact": true
          },
          {
            "name": "Cybersecurity Issues",
            "icon": "smile",
            "path": "/cybersecurity-issues",
            "exact": true
          },
          {
            "name": "Policy",
            "icon": "smile",
            "path": "/policy",
            "exact": true
          }
        ]
      },
      {
        "icon": "ScheduleOutlined",
        "name": "Reports",
        "path": "/",
        "routes": [
          {
            "path": "/",
            "redirect": "/CloudIQ",
            "exact": true
          },
          {
            "name": "Report Browser",
            "icon": "smile",
            "path": "/report-browser",
            "exact": true
          },
          {
            "name": "All Reports",
            "icon": "smile",
            "path": "/all-reports",
            "exact": true
          }
        ]
      },
      {
        "icon": "SyncOutlined",
        "name": "Lifecycle",
        "path": "/",
        "routes": [
          {
            "path": "/",
            "redirect": "/CloudIQ",
            "exact": true
          },
          {
            "name": "Milestones Outlook",
            "icon": "smile",
            "path": "/milestones-outlook",
            "exact": true
          },
          {
            "name": "Service Contracts",
            "icon": "smile",
            "path": "/service-contracts",
            "exact": true
          }
        ]
      },
      {
        "icon": "SettingOutlined",
        "name": "Admin",
        "path": "/",
        "routes": [
          {
            "path": "/",
            "redirect": "/CloudIQ",
            "exact": true
          },
          {
            "name": "Customization",
            "icon": "smile",
            "path": "/customization",
            "exact": true
          },
          {
            "name": "Connectivity",
            "icon": "smile",
            "path": "/connectivity",
            "exact": true
          },
          {
            "name": "Collectors",
            "icon": "smile",
            "path": "/collectors",
            "exact": true
          },
          {
            "name": "Settings",
            "icon": "smile",
            "path": "/settings",
            "exact": true
          },
          {
            "name": "User Access",
            "icon": "smile",
            "path": "/user-access",
            "exact": true
          }
        ]
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/opt/cloudiqcode/src/pages/404'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
