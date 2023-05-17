import React from "react";
import './style.css';
import {useDispatch} from "react-redux";
import {removeFromCartList} from "../../store/reducers/cart";

function BasketItem({id, productTitle, productPreview, price}) {

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(removeFromCartList(id));
    };

    return (
        <div className="basket-item">
            <img className="basket-preview" src={productPreview}/>
            <h2 className="basket-title">{productTitle}</h2>
            <div>
                <span className="basket-price">{formatPrice(price)}</span>
                <button className="basket-cart_button" onClick={removeFromCart}>x</button>
            </div>
        </div>
    )
}

function formatPrice(price) {
    if (!price) {
        return '';
    }

    return parseFloat(price).toLocaleString('ru') + ' ₽'
}

export  default BasketItem;