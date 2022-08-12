import { useState, useEffect } from 'react';
import { Form } from './ContactForm/ConstactForm';
import ContactList from './ContactLsit/ContactList';
import { Filter } from './Filter/Filter';
import Section from './Section/Section';
import { Container } from './Container.styled';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.some(e => e.name.toLowerCase() === contact.name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : setContacts(contacts => [contact, ...contacts]);
  };

  const removeContact = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const setFilterContact = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Container>
      <Section title="Phonebook">
        <Form onSubmit={formSubmitHandler}></Form>
      </Section>

      <Section title="Contacts">
        <Filter value={filter} onFilter={setFilterContact} />

        <ContactList
          contacts={getFilteredContacts()}
          removeItem={removeContact}
        />
      </Section>
    </Container>
  );
};
