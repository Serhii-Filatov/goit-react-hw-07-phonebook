import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from '../../redux/contactsReducer';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const hanldeDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const contactsArr = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul>
      {contactsArr.map(contact => {
        const { id, name, number } = contact;
        return (
          <ContactListItem
            key={id}
            contactId={id}
            contactName={name}
            contactNumber={number}
            deleteContact={hanldeDeleteContact}
          />
        );
      })}
    </ul>
  );
};
