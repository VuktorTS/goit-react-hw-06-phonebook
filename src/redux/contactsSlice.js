import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContact: (state, action) => [...state, action.payload],
    deleteContact: (state, action) =>
      state.filter(constact => constact.id !== action.payload),
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
