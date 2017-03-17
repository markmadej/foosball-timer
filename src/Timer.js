import React, { Component } from 'react';
import './Timer.css';
class Timer extends Component {

  constructor(props) {
      super(props);
      this.state = {
        currSecond: 1
      }
      console.log("created timer, maxSeconds=" + this.props.maxSeconds);
  }

  componentDidMount() {
    // This sets a timer that will refresh the component every second
    // to display the current second.
    this.timerID = setInterval(
      () => this.incrementTimer(),
      1000 //run every second
    );
    console.log("mounted timer.");
  }

  incrementTimer() {
    let nextSecond = this.state.currSecond;
    console.log("in incrementTimer, curSecond=" + this.state.currSecond + " maxSeconds=" + this.props.maxSeconds);
    nextSecond == this.props.maxSeconds ? nextSecond = 1 : nextSecond = nextSecond + 1;
    console.log("new second=" + nextSecond);

    this.setState({currSecond: nextSecond});

  }

  render() {
    console.log("rendering brah");
    return (
      <div className='timer'>
      {this.state.currSecond}
      </div>
    );
  }
}

export default Timer;
