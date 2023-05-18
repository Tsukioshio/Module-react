import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {useSelector} from 'react-redux';
import {Navigate} from "react-router";

import Main from './pages/MainPage';
import Product from './pages/ProductPage';
import Basket from './pages/BasketPage';
import Order from './pages/OrderPage';
import Authorization from './pages/AuthPage';

import pages from "./bd/pages";

const router = createBrowserRouter([
    {
        path: pages.main,
        element: <Main/>
    },
    {
        path: pages.product + ":productId",
        element: <Product/>
    },
    {
        path: pages.cart,
        element: <Basket/>
    },
    {
        path: pages.order,
        element: <Order/>
    },
    {
        path: pages.main + "/:err",
        element: <Navigate to={pages.main}/>
    }
]);

function CheckAuth() {
    return useSelector(state => state.user.isAuth) ? (<RouterProvider router={router} />) : (<Authorization/>);
}

export default CheckAuth;
