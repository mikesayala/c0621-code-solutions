import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleInput = this.handleInput.bind(this);
    this.getErrorMessage = this.getErrorMessage.bind(this);
  }

  handleInput(event) {
    this.setState({ password: event.target.value });
  }

  getErrorMessage() {
    if (this.state.password.length <= 7) {
      return 'password is too short';
    } else {
      return '';
    }
  }

  render() {
    const isPassword = this.state.password;
    if (isPassword) {
      return (
      <>
      <form>
        <div>
          <label>Password</label>
        </div>
        <input type="password" onChange={this.handleInput} value={this.state.value}></input>
         <i className={`${isPassword.length >= 8 ? 'fas fa-thumbs-up green' : 'fas fa-thumbs-down red'}`}></i>
      </form>
      <p>{this.getErrorMessage()}</p>
      </>
      );
    } else {
      return (
      <>
      <form>
        <div>
          <label>Password</label>
        </div>
        <input type="password" onChange={this.handleInput} value={this.state.value}></input>
         <i className={`${isPassword ? 'fas fa-thumbs-up green' : 'fas fa-thumbs-down red'}`}></i>
      </form>
      <p>a password is required</p>
      </>
      );
    }
  }
}

export default ValidatedInput;
