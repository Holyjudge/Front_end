import React from 'react';

class Greeting extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <div>
        <h1>Hi, {name}!</h1>
      </div>
    );
  }
}


