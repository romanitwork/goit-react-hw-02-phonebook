import React, { Component } from "react";
import ContactForm from "./contactform/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";


class App extends Component {
  state = {
    contacts: [],
    filter: ""
  };

  componentDidMount() {
    const contacts =
      localStorage.getItem("contacts") !== null
        ? JSON.parse(localStorage.getItem("contacts"))
        : [];
    console.log(contacts);
    this.setState({ contacts });
  }
  componentDidUpdate() {
    // if()
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  submitContact = data => {
    console.log("data", { data });
    this.setState(prevstate => ({
      contacts: [...prevstate.contacts, data]
    }));
  };

  deleteContact = e => {
    const id = e.target.id;
    this.setState(prevstate => ({
      contacts: prevstate.contacts.filter(contact => contact.id !== id)
    }));
  };

  getName = e => {
    this.setState({
      filter: e.target.value
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(this.state.filter)
    );
  };

  render() {
    // const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm submitContact={this.submitContact} />

        <h2>Contacts</h2>
        <Filter getName={this.getName} />
        <ContactList
          contacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
