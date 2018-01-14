import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

class Timeline extends Component {
  render () {
    return (
      <div className="timeline--wrapper">
        <h3 style={{marginTop: 12}}>月間の問い合わせログ</h3>
        <Bar
          data={{
            datasets: [
              {
                lable: '問い合わせ件数',
                data: this.props.data.map((item) => {
                  return {
                    t: item.date,
                    y: item.count.reduce((p, c) => p + c)
                  }
                }, [])
              }
            ]
          }}
          legend={{
            display: false
          }}
          options={{
            scales: {
              xAxes: [{
                type: 'time',
                time: {
                  unit: 'day',
                  displayFormats: {
                    day: 'M月D日'
                  },
                  minUnit: 'day'
                },
                bounds: 'ticks'
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }}
        />
      </div>
    );
  }
}

Timeline.propTypes = {
  data: PropTypes.array
};

export default Timeline;
