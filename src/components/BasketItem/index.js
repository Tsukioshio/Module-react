import React from "react";
import './style.css';
import {useDispatch} from "react-redux";
import {removeFromCartList} from "../../store/reducers/cart";
import {Link} from 'react-router-dom';
import pages from "../../bd/pages";

function BasketItem({id, productTitle, productPreview, price}) {

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(removeFromCartList(id));
    };

    return (
        <div className="basket-item">
            <Link to={pages.product + id}>
                <img className="basket-preview" src={productPreview}/>
            </Link>
            <Link to={pages.product + id}>
                <h2 className="basket-title">{productTitle}</h2>
            </Link>
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