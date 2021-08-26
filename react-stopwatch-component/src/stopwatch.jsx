import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playButtonOn: false,
      counter: 0
    };
    this.handleCounter = this.handleCounter.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    if (this.state.playButtonOn === false) {
      this.setState({ counter: 0 });
    }
  }

  handleCounter() {
    if (!this.state.playButtonOn) {
      this.interval = setInterval(() => {
        this.setState(state => {
          return {
            counter: state.counter + 1,
            playButtonOn: true
          };
        });
      }, 1000);
    } else {
      clearInterval(this.interval);
      this.setState({ playButtonOn: false });
    }
  }

  render() {
    return (
    <>
    <div onClick={ this.reset } className="circle row justify-center">
      <h3>{ this.state.counter }</h3>
    </div>
    <div className="row justify-center">
    <i onClick={this.handleCounter} className={this.state.playButtonOn ? 'fas fa-pause' : 'fas fa-play' }></i>
    </div>
    </>);
  }
}

export default StopWatch;
