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
import Slider from 'bizcharts-plugin-slider';
const ds = new DataSet({
  state: {
    start: 0,
    end: 1,
  },
});

class Area extends React.Component {
  render() {
    const dataSource = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const data = dataSource.map((d) => ({
      time: `${d}: 00`,
      value: 100,
    }));
    const cols = {
      value: {
        min: 0,
        max: 100,
        tickInterval: 25,
      },
      time: {
        range: [0, 1],
      },
    };
    return (
      <div>
        <Chart
          height={320}
          data={data}
          scale={cols}
          forceFit
          padding={[50, 0, 80, 0]}
        >
          <Slider
            data={data}
            padding={0}
            xAxis="time"
            yAxis="value"
            height={35}
            backgroundStyle={{
              fill: '#daeeff',
              opacity: 1,
            }}
            fillerStyle={{
              // fill: '#DAEEFF',
            }}
          />
          <Axis name="time" position="top" />
          <Axis
            name="value"
            label={{
              offset: -10,
              formatter: (val) => {
                return val;
              },
            }}
            position="left"
          />
          <Tooltip
            crosshairs={{
              type: 'line',
            }}
          />
          <Geom type="area" color="#daeeff" position="time*value" />
          <Geom type="line" color="#1797FF" position="time*value" size={2} />
        </Chart>
      </div>
    );
  }
}
export default Area;
