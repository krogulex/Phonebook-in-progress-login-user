import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './operations';

import { logOut } from 'redux/auth/operations';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    isAdding: false,
    error: null,
  },
  extraReducers: {
    //pending
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [addContact.pending](state) {
      state.isAdding = true;
    },
    [deleteContact.pending](state) {},
    // rejected
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.rejected](state, action) {
      state.isAdding = false;
      state.error = action.payload;
    },
    [deleteContact.rejected](state, action) {
      state.error = action.payload;
    },
    //fulfilled
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isAdding = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
