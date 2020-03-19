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
    const contacts = (localStorage.getItem("contacts") !== null) ? JSON.parse(localStorage.getItem("contacts")): [];
    this.setState({ contacts });
  }

  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  submitContact = data => {
    console.log("data", data);
    const isNameExist = this.state.contacts.some(
      contact => contact.name === data.name
    );
    !isNameExist
      ? this.setState(prevState => ({
          contacts: [...prevState.contacts, data]
        }))
      : alert("This name exist in contacts");
  };

  deleteContact = e => {
    const id = e.target.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  filterByName = e => {
    this.setState({
      filter: e.target.value
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm submitContact={this.submitContact} />

        <h2>Contacts</h2>
        {(this.state.contacts.length > 2) && 
          <Filter getName={this.filterByName} />
        }
        <ContactList
          contacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
