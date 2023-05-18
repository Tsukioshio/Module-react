import React from "react";
import { store } from './store'
import {Provider} from 'react-redux';
import CheckAuth from "./CheckAuth";

import './App.css';
import './css/reset.css';

function App() {
    return (
        <Provider store={store}>
            <CheckAuth/>
        </Provider>
    );
}

export default App;
