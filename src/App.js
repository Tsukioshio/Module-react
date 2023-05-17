import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { store } from './store'
import { Provider } from 'react-redux'

import Products from './pages/ProductPage';
import Basket from './pages/BasketPage';

import './App.css';
import './css/reset.css';

const router = createBrowserRouter([
    {
        path: "/module-react",
        element: <Products/>
    },
    {
        path: "/module-react/cart",
        element: <Basket/>
    }
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;
