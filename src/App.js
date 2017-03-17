import React, { Component } from 'react';
import './App.css';
import RodTimeClock from './RodTimeClock';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <RodTimeClock title='2/3 Bars' maxSeconds='15'/>
        <RodTimeClock title='5 Bar' maxSeconds='10'/>
      </div>
    );
  }
}

export default App;
