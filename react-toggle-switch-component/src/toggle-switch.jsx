import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ switch: !this.state.switch });
  }

  render() {
    if (this.state.switch) {
      return (
       <div className="border green">
        <button className="button active" id="on" onClick={this.handleToggle}></button>
        <span className="slider"></span>
        <label htmlFor="on">on</label>
       </div>
      );
    } else {
      return (
      <div className="border">
       <button className="button" id="off" onClick={this.handleToggle}></button>
       <label htmlFor="off">off</label>
      </div>
      );
    }
  }
}

export default ToggleSwitch;
