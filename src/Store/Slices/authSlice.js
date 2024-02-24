import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    errorModal: false,
    errorText: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setErrorModal: (state, action) => {
            state.errorModal = action.payload;
        },
        setErrorText: (state, action) => {
            state.errorText = action.payload;
        }
    }
});

export const { setUser, setErrorModal, setErrorText } = authSlice.actions;
export const authValues = (state) => state.auth;
export default authSlice;