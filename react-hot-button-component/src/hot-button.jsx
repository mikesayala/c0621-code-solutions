import React from 'react';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { click: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ click: this.state.click + 1 });
  }

  render() {
    if (this.state.click < 3) {
      return (
        <button onClick={this.handleClick}>hot</button>);
    } else if (this.state.click >= 3 && this.state.click < 6) {
      return <button onClick={this.handleClick} className="purple">hot</button>;
    } else if (this.state.click >= 6 && this.state.click < 9) {
      return <button onClick={this.handleClick} className="indigo">hot</button>;
    } else if (this.state.click >= 9 && this.state.click < 12) {
      return <button onClick={this.handleClick} className="orange">hot</button>;
    } else if (this.state.click >= 12 && this.state.click < 15) {
      return <button onClick={this.handleClick} className="tangerine">hot</button>;
    } else if (this.state.click >= 15 && this.state.click < 18) {
      return <button onClick={this.handleClick} className="yellow">hot</button>;
    } else if (this.state.click >= 18) {
      return <button onClick={this.handleClick} className="white">hot</button>;
    }
    return <button onClick={this.handleClick} className="hot-button">hot</button>;
  }
}

export default CustomButton;
