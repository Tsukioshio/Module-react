import { configureStore } from '@reduxjs/toolkit';
import cart from './reducers/cart';
import user from './reducers/user';

export const store = configureStore({
    reducer: {cart, user},
});