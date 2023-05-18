import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuth: !!localStorage.getItem('isAuth'),
        email: '',
        successText: ''
    },
    reducers: {
        login: (state) => {
            state.isAuth = true;
            localStorage.setItem('isAuth', 'Y');
        },
        logout: (state) => {
            state.isAuth = false;
            localStorage.removeItem('isAuth');
        },
        setEmail: (state, {payload}) => {
            state.email = payload;
        },
        setSuccessText: (state, {payload}) => {
            state.successText = payload;
        },
    },
});

export const {
    login,
    logout,
    setEmail,
    setSuccessText
} = userSlice.actions;

export default userSlice.reducer;