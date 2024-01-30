import { useState } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export const ContactForm = ({ addNewContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmitForm = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const { name, number } = form.elements;

    addNewContact(name.value, number.value);
    resetForm();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form action="" onSubmit={onSubmitForm} className={css.formContact}>
      <label className={css.formContactLable} htmlFor={nanoid()}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={css.inputFormContact}
          required
        />
      </label>
      <label className={css.formContactLable} htmlFor={nanoid()}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          className={css.inputFormContact}
          required
        />
      </label>

      <button className={css.addContactBtn} type="submit">
        add contact
      </button>
    </form>
  );
};
