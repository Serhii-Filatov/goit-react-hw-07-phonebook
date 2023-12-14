import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  // Имя слайса
  name: 'contacts',
  // Начальное состояние редюсера слайса
  initialState: INITIAL_STATE,
  // Объект редюсеров
  reducers: {
    setContacts(state, action) {
      state.contacts = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },

    addContact(state, action) {
      state.contacts.push(action.payload);
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

// Генераторы экшенов
export const { setContacts, setFilter, addContact, deleteContact } =
  contactsSlice.actions;
// Редюсер слайса
export const contactsReducer = contactsSlice.reducer;
