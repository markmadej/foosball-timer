import React, { Component } from 'react';
import './RodTimeClock.css';
import Timer from './Timer';

class RodTimeClock extends Component {

  render() {
    return (
      <div className='rtcShell'>
      <div className='rtcTitle'>
        {this.props.title}
      </div>
      <Timer maxSeconds={this.props.maxSeconds}/>
      </div>
    );
  }
}

export default RodTimeClock;
