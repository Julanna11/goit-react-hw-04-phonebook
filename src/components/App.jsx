import React from 'react';
import Form from './ContactForm/ConstactForm';
import { ContactList } from './ContactLsit/ContactList';
import { Filter } from './Filter/Filter';
import Section from './Section/Section';
import { Container } from './Container.styled';
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.state.contacts.some(
      e => e.name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  setFilter = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  componentDidMount() {
    console.log('App comp Did mount');

    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    console.log('did update');
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      console.log('updated filed contac');
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler}></Form>
        </Section>

        <Section title="Contacts">
          <Filter value={this.state.filter} onFilter={this.setFilter} />

          <ContactList
            contacts={this.getFilteredContacts()}
            removeItem={this.removeContact}
          />
        </Section>
      </Container>
    );
  }
}
