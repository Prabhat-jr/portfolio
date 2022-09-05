import React, { Component } from "react";

export class From extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      gamail: "",
      mobilenumber: "",
      passwords: "",
      address: "",
    };
  }
  handleFirstNameChange = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };
  handleLastNameChange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };
  handleGmailChange = (event) => {
    this.setState({
      gmail: event.target.value,
    });
  };
  handleMobileNumberChange = (event) => {
    this.setState({
      mobilenumber: event.target.value,
    });
  };
  handlePasswordsChange = (event) => {
    this.setState({
      passwords: event.target.value,
    });
  };
  handleAddressChange = (event) => {
    this.setState({
      address: event.target.value,
    });
  };
  handleSelectSubjectChange = (event) => {
    this.setState({
      selectsubject: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(`${this.state.firstname} ${this.state.lastname} `);
  };
  render() {
    return (
      <div className="container">
        <div>
          <from onSubmit={this.handleSubmit}>
            <h1 className="title">School Ragitration From </h1>
            <div>
              <label>FirstName</label>
              <input
                input="text"
                placeholder="first number"
                value={this.state.firstName}
                onChange={this.handleFirstNameChange}
              />
            </div>
            <div>
              <label>LastName</label>
              <input
                input="english"
                placeholder="last number"
                value={this.state.lasttname}
                onChange={this.handleLastNameChange}
              />
            </div>
            <div>
              <label>Gmail</label>
              <input
                input="gmail"
                placeholder="gmail"
                value={this.state.gmail}
                onChange={this.handleGmailChange}
              />
            </div>
            <div>
              <label>MobileNumber</label>
              <input
                input="number"
                placeholder="mobilenumber"
                value={this.state.lasttname}
                onChange={this.handleMobileNumberChange}
              />
            </div>
            <div>
              <label>Passwords</label>
              <input
                input="Password"
                placeholder="passwords"
                value={this.state.passwords}
                onChange={this.handlePasswordsChange}
              />
            </div>
            <div>
              Gender:
              <label>
                <input type="radio" name="gender" value="male" />
                male
              </label>
              <label>
                <input type="radio" name="gender" value="female" />
                female
              </label>
            </div>
            <div>
              <label>Address</label>
              <textarea
                value={this.state.address}
                onChange={this.handleAddressChange}
                cols="30"
                rows="3"
              />
            </div>
            <div>
              <label>
                Date of Birth:
                <input type="date" name="date of birth" />
              </label>
            </div>
            <div>
              <label>Select Subject</label>
              <select
                value={this.state.selectsubject}
                onChange={this.handleSelectSubjectChange}
              >
                <option>choose one subject</option>
                <option value="maths">Maths</option>
                <option value="physics">Physics</option>
                <option value="Chymistry">chymistry</option>
                <option value="maths">Biology</option>
              </select>
            </div>
            <button type="submit">Submit</button>
          </from>
        </div>
      </div>
    );
  }
}

export default From;
