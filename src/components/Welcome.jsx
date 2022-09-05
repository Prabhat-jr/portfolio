import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, ok } = this.props;
    return (
      <h1>
        welcome {name} a.k.s {ok}
      </h1>
    );
  }
}
export default Welcome;
