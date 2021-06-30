import React from "react";
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
  Util
} from "bizcharts";

class Curved extends React.Component {
  render() {
    const data = [
      {
        month: "1.Jun",
        city: "London",
        InProgress: 7
      },
      {
        month: "2.Jun",
        city: "London",
        InProgress: 3
      },
      {
        month: "3.Jun",
        city: "London",
        InProgress: 6
      },
      {
        month: "4.Jun",
        city: "London",
        InProgress: 4
      },
      {
        month: "5.Jun",
        city: "London",
        InProgress: 9
      },
      {
        month: "6.Jun",
        city: "London",
        InProgress: 5
      },
      {
        month: "7.Jun",
        city: "London",
        InProgress: 14
      },
      {
        month: "8.Jun",
        city: "London",
        InProgress: 8
      },
      {
        month: "9.Jun",
        city: "London",
        InProgress: 18
      },
      {
        month: "10.Jun",
        city: "London",
        InProgress: 11
      },
    ];
    const cols = {
      month: {
        range: [0, 1]
      }
    };
    return (
      <div>
        <Chart height={400} data={data} scale={cols} forceFit>
          <Legend/>
          <Axis name="month"/>
          <Axis
            name="In Progress"
            label={{
              formatter: val => `${val}`
            }}
          />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
            custom={true}
            containerTpl={`
            <div class="g2-tooltip"><div class="g2-tooltip-title" style="margin-bottom: 4px;"></div>
            <table>
              <tbody
                class="g2-tooltip-list"
              >
              </tbody>
            <table>
            `}

            itemTpl={`
              <tr data-index={index}>'
                <td><span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span></td>
                <td>{name}</td>
                <td>{value}</td>
              </tr>
           `}

          />
          <Geom
            type="line"
            position="month*InProgress"
            size={2}
            shape={"smooth"}
          />
          <Geom
            type="point"
            position="month*InProgress"
            size={4}
            shape={"circle"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </Chart>
      </div>
    );
  }
}

export default Curved;
