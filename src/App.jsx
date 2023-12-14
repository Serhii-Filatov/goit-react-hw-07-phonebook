// import { useEffect, useState } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.formTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.formTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
