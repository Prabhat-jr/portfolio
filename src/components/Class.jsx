import React, { Component } from "react";

class Class extends Component {
  clickHandler() {
    console.log("Clicked the button");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default Class;
