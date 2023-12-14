import axios from 'axios';

const contactsInstances = axios.create({
  baseURL: 'https://657b5956394ca9e4af1439e9.mockapi.io/',
});

export const fetchAllContacts = async () => {
  const { data } = await contactsInstances.get('/contacts');
  return data;
};

export const addNewContact = async newContact => {
  const { data } = await contactsInstances.post('/contacts', newContact);
  return data;
};

export const deleteNewContact = async contactId => {
  const { data } = await contactsInstances.delete(`/contacts/${contactId}`);
  return data;
};
