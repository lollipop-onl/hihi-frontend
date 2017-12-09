import React, { Component } from 'react';

class HelpFigure extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      width: 0
    }
  }

  componentDidMount() {
    this.setState({
      height: this.svg.clientHeight,
      width: this.svg.clientWidth
    });

    window.addEventListener('resize', () => {
      requestAnimationFrame(() => {
        this.setState({
          height: this.svg.clientHeight,
          width: this.svg.clientWidth
        });
      });
    });
  }

  render() {
    const {
      height,
      width
    } = this.state;

    const x = (percent) => width * (percent / 100);
    const y = (percent) => height * (percent / 100);

    return (
      <svg
        style={{
          height: '100%',
          left: 0,
          position: 'absolute',
          top: 0,
          width: '100%',
          zIndex: 0
        }}
        ref={ elem => this.svg = elem }
      >
        <polygon
          points={`
            ${x(0)} ${y(72)}
            ${x(16)} ${y(78)}
            ${x(32)} ${y(62)}
            ${x(43)} ${y(86)}
            ${x(59)} ${y(77)}
            ${x(83)} ${y(86)}
            ${x(100)} ${y(61)}
            ${x(100)} ${y(100)}
            ${x(0)} ${y(100)}
          `}
          stroke="none"
          fill="rgba(255, 255, 255, .1)"
        />
        <polygon
          points={`
            ${x(0)} ${y(61)}
            ${x(21)} ${y(45)}
            ${x(46)} ${y(65)}
            ${x(60)} ${y(33)}
            ${x(70)} ${y(65)}
            ${x(90)} ${y(23)}
            ${x(100)} ${y(43)}
            ${x(100)} ${y(100)}
            ${x(0)} ${y(100)}
          `}
          stroke="none"
          fill="rgba(255, 255, 255, .1)"
        />
      </svg>
    );
  }
}

export default HelpFigure;
