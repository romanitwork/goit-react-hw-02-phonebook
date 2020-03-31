import React, { Component } from "react";
import ContactForm from "./contactform/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import { CSSTransition } from "react-transition-group";
import pb from "../transition/pb.module.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    inUp: false
  };

  componentDidMount() {
    const contacts =
      localStorage.getItem("contacts") !== null
        ? JSON.parse(localStorage.getItem("contacts"))
        : [];
    console.log(contacts);
    this.setState({ contacts, inUp: true });
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
    return (
      <div>
        <CSSTransition
          in={this.state.inUp}
          timeout={1500}
          classNames={pb}
        >
          <h1>Phonebook</h1>
        </CSSTransition>
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
