// import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const onSubmitForm = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const { name, number } = form.elements;

    dispatch(
      addContact({ id: nanoid(), name: name.value, number: number.value })
    );

    form.reset();
  };
  return (
    <form action="" onSubmit={onSubmitForm} className={css.formContact}>
      <label className={css.formContactLable} htmlFor={nanoid()}>
        Name
        <input
          type="text"
          name="name"
          className={css.inputFormContact}
          required
        />
      </label>
      <label className={css.formContactLable} htmlFor={nanoid()}>
        Number
        <input
          type="tel"
          name="number"
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
