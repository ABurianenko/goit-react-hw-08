import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, updateContact } from "./operations";
import { logOut } from "../auth/operations";


const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

const contactsSlice = createSlice({
    name: 'contacts', 
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
             })
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.filter(item => item.id !== action.payload.id);
            })
            .addCase(updateContact.fulfilled, (state, action) => {
                state.items = state.items.map(item => item.id === action.payload.id ? action.payload : item);
            })
            .addCase(logOut.fulfilled, (state) => {
                state.items = [];
            })
            .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending), (state) => {
                state.isLoading = true;
            })
            .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected), (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})


export const contactsReducer = contactsSlice.reducer;
export const { fetchAll, fetchSuccess, fetchError } = contactsSlice.actions;