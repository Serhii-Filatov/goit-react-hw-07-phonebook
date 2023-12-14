import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './App.module.css';

import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from './redux/contactsSelectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './components/Loader/Loader';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.wrapper}>
      <h1 className={css.formTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.formTitle}>Contacts</h2>
      <Filter />
      <ContactList />
      {isLoading && <Loader />}
      {error && <ToastContainer />}
    </div>
  );
};
