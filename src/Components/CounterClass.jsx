import React, { Component } from "react";
class CounterClass extends React.Component {
  state = { count: 0 };
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrementCount = () => {
    if (this.state.count === 0) {
      alert("The number can not be less than " + this.state.count);
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };
  render() {
    return (
      <div>
        <h2>Assignment-2 Counter Application</h2>
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
        <h3>Count is {this.state.count}</h3>
      </div>
    );
  }
}
export default CounterClass;
