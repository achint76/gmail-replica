import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "appSlice",
    initialState: {
        open: false,
        emails: [],
        selectedMail: null,
        searchText: "",
        // emails: null, // This might need to be initialized as an array or object depending on your application logic
        user: null
    },
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setSelectedMail: (state, action) => {
            state.selectedMail = action.payload;
        },
        setSearchText: (state, action) => {
            state.searchText = action.payload;
        },
        setEmails: (state, action) => {
            state.emails = action.payload;
             //state.emails = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const {
    setOpen,
    setSelectedMail,
    setSearchText,
     setEmails,
     setUser
} = appSlice.actions;

export default appSlice.reducer;