import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { nanoid } from 'nanoid';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? defaultContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const addNewContact = (name, number) => {
    const isInContacts = contacts.some(
      contact => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts(prevState => [
      {
        id: nanoid(),
        name,
        number,
      },
      ...prevState,
    ]);
  };

  const removeContact = contactId => {
    setContacts(prevState => {
      return prevState.filter(({ id }) => id !== contactId);
    });
  };

  const filterContacts = () => {
    const normalizeFilter = filter.trim().toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filterForContacts = filterContacts();

  return (
    <div className={css.main}>
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter value={filter} onChangeFilter={changeFilter} />
          <ContactList
            contacts={filterForContacts}
            onRemoveContact={removeContact}
          />
        </>
      ) : (
        <p className={css.emptyInfo}>
          Your phonebook is empty. Add first contact!
        </p>
      )}
    </div>
  );
};
