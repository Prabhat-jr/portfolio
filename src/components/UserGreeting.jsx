import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    return this.state.isLoggedIn && <div>Welcome prabhat</div>;
    // return this.state.isLoggedIn ? (
    //   <div>welcome prabhat</div>
    // ) : (
    //   <div>welcome Guest</div>
    // );
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>welcome prabhat</div>;
    // } else {
    //   message = <div>welcome guest</div>;
    // }
    // return <div>{message}</div>;
    // if (this.state.isLoggedIn) {
    //   return <div>welcome prabhat</div>;
    // } else {
    //   return <div>welcome guest</div>;
    // }
    //     return (
    //       <div>
    //         <div>Welcome prabhat</div>
    //         <div>welcoe guest</div>
    //       </div>
    //     );
  }
}

export default UserGreeting;
