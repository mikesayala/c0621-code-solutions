import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
     <div>
      <div className="background-img-is-active">
        <div onClick={this.handleClick} className={`${this.state.isOpen ? 'background-is-active fixed' : 'background fixed'}`}></div>
        <i onClick={this.handleClick} className="fas fa-bars"></i>
      </div>
      <div className="container">
          <div className={`modal ${this.state.isOpen ? '' : 'hidden'}`}>
            <h2 className="justify-center">Favorite Hot Sauce</h2>
            <ul className="justify-center">
              <li onClick={this.handleClick}>
                <a href='#'>Truff</a>
              </li>
              <li onClick={this.handleClick}>
                <a href='#'>Secret Aardvark</a>
              </li>
              <li onClick={this.handleClick}>
                <a href='#'>Cholula</a>
              </li>
              <li onClick={this.handleClick}>
                <a href='#'>Tapatio</a>
              </li>
            </ul>
          </div>
        </div>
       </div>
    );
  }
}

export default AppDrawer;
