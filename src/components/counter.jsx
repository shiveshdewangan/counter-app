import React, { Component } from "react";

class Counter extends Component {
  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button className="btn btn-warning btn-sm m-2">-</button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          X
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
