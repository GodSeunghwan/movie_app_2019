import React from 'react';

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  }

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  }

  componentDidMount() {
    console.log("I am ComponentDidMount")
  }

  componentDidUpdate() {
    console.log("I am componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("goodbye")
  }

  render() {
    console.log("I am Render")
    return (
      <div>
        <h1>The Number is: {this.state.count}!</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
