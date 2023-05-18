import { createSlice } from '@reduxjs/toolkit';

/** Получение начальных данных из localStorage при загрузке страницы */
const getFromLocalStorage = (type = '') => {
    const cartList = JSON.parse(localStorage.getItem('cart')) || [];

    if (type === 'count') {
        return cartList.length;
    }
    if (type === 'price') {
        return cartList.reduce((value, item) => {
            return +item.price + value;
        }, 0);
    }

    return cartList;
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        list: getFromLocalStorage(),
        totalPrice: getFromLocalStorage('price'),
        productsCount: getFromLocalStorage('count')
    },
    reducers: {
        addToCartList: (state, {payload}) => {
            state.list.push(payload);
            state.productsCount++;
            state.totalPrice += payload.price;
            localStorage.setItem('cart', JSON.stringify(state.list))
        },
        removeFromCartList: (state, {payload}) => {
            state.list = state.list.filter(item => {return item.id !== payload});

            state.productsCount = state.list.length;
            state.totalPrice = state.list.reduce((value, item) => {
                return +item.price + value;
            }, 0);

            localStorage.setItem('cart', JSON.stringify(state.list))
        },
        clearCart: (state) => {
            state.list = [];
            state.productsCount = 0;
            state.totalPrice = 0;
            localStorage.setItem('cart', JSON.stringify(state.list))
        }
    },
});

export const {
    addToCartList,
    removeFromCartList,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;