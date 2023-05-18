import './style.css';
import React from "react";
import {useDispatch} from "react-redux";
import {logout} from "../../store/reducers/user";
import {clearCart} from "../../store/reducers/cart";

function LogoutButton() {
    const dispatch = useDispatch();

    const onLogout = () => {
        /** Очищаем корзину */
        dispatch(clearCart());
        /** Выход */
        dispatch(logout());
    };

    return (
        <div className="logout_btn" onClick={onLogout}>
            <span>Выйти</span>
        </div>
    )
}

export default LogoutButton;