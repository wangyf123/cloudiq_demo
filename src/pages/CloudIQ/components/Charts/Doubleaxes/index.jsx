import $ from 'jquery';
import React from 'react';
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util,
} from 'bizcharts';
import DataSet from '@antv/data-set';

import Brush from '@antv/g2-brush';

let data;
$.ajax({
  url:
    'https://alifd.alibabausercontent.com/materials/@bizcharts/g2-brush-line/0.2.9/mock.json',
  async: false,
  success: (iData) => {
    data = iData.map(d => ({
      ...d,
      ['Performance Impact']: d['New York'] * 60,
      ['Latency']: d['San Francisco'] * 60
    }))
  },
});

function getComponent(data) {
  const { DataView } = DataSet;
  const dv = new DataView();
  dv.source(data).transform({
    type: 'fold',
    key: 'city',
    value: 'value',
    fields: ['Performance Impact', 'Latency'],
  });
  const scale = {
    date: {
      type: 'time',
    },
    value: {
      alias: 'Temperature, ºF',
    },
  };
  let chart;

  class RenderChart extends React.Component {
    componentDidMount() {
      new Brush({
        canvas: chart.get('canvas'),
        style: {
          fill: '#ccc',
          fillOpacity: 0.4,
        },
        chart,
      });
      // 双击清除过滤，恢复初始状态
      chart.on('plotdblclick', () => {
        chart.get('options').filters = {};
        chart.repaint();
      });
    }

    render() {
      return (
        <div>
          <Chart
            data={dv}
            padding={[40, 60, 220]}
            scale={scale}
            onGetG2Instance={(g2Chart) => {
              g2Chart.animate(false);
              chart = g2Chart;
            }}
            forceFit
          >
            <Axis
              name="date"
              line={{
                stroke: '#000',
              }}
              tickLine={{
                stroke: '#000',
                value: 6, // 刻度线长度
              }}
              label={{
                textStyle: {
                  textAlign: 'start',
                },
              }}
            />
            <Axis
              name="value"
              grid={null}
              tickLine={{
                stroke: '#000',
                value: 6, // 刻度线长度
              }}
              label={{
                textStyle: {
                  fill: '#000',
                },
              }}
              line={{
                stroke: '#000',
              }}
            />
            <Legend position="top" />
            <Geom
              type="line"
              position="date*value"
              color="city"
              shape="spline"
              size={2}
            />
            <Geom
              type="area"
              position="time*rain"
              color="l(100) 0:#293c55 1:#f7f7f7"
              opacity={0.85}
            />
          </Chart>
        </div>
      );
    }
  }
  return RenderChart;
}

class Brushline extends React.Component {
  render() {
    const RenderChart = getComponent(data);
    return (
      <div>
        <RenderChart />
      </div>
    );
  }
}

export default Brushline;
