import './style.css';
import basketImg from "../../assets/basket.svg";
import React from "react";
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import pages from "../../bd/pages";

function SmallBasket() {
    const productsCount = useSelector(state => state.cart.productsCount);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    return (
        <div className="full-basket">
            <div className="basket">{declOfNum(productsCount, ['товар', 'товара', 'товаров'])}<br/> на сумму {formatPrice(totalPrice)}</div>
            <Link to={pages.cart} className="basket-radius">
                <img className="image-bas" src={basketImg}/>
            </Link>
        </div>
    )
}

function formatPrice(price) {
    return parseFloat(price).toLocaleString('ru') + ' ₽'
}

function declOfNum(number, words) {
    return number + ' ' + words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

export default SmallBasket;