import React, { Component } from "react";
import { uuid } from 'uuidv4';

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitContact({
      name: this.state.name,
      number: this.state.number,
      id: uuid()
    });
    this.setState({name:'', number:''})
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Name </label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          ></input>
          <label>Number </label>
          <input
            type="text"
            name="number"
            onChange={this.handleChange}
            value={this.state.number}
          ></input>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;
