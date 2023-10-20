import React from 'react';

class ButtonClicker extends React.Component {
  handleClick = () => {
    alert('BUTTON CLICKED');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}


class App extends React.Component {
  render() {
    return (
      <div>
        <ButtonClicker />
      </div>
    );
  }
}
