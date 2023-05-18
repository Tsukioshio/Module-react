import './style.css'
import React from "react";
import BasketItem from "../../components/BasketItem";
import {useSelector} from "react-redux";
import PageHeader from "../../components/PageHeader";
import {Link} from 'react-router-dom';
import pages from "../../bd/pages";


function Basket() {
    const basketItemsList = useSelector(state => state.cart.list);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    return  (
        <>
            <PageHeader
                title="Корзина с выбранными товарами"
                needBack={true}
            />
            <div className="basket-products">
                {
                    basketItemsList.length ?
                        basketItemsList.map((item, key) => {
                            return(
                                <BasketItem
                                    key={key}
                                    id={item.id}
                                    productPreview={item.productPreview}
                                    productTitle={item.productTitle}
                                    price={item.price}
                                />
                            )
                        }) :
                        (
                            <div className="basket_empty">
                                <p>Ваша корзина пуста</p>
                            </div>
                        )
                }
            </div>
            <hr/>
            <div className="basket_footer">
                <div className="order-footer">Заказ на сумму</div>
                <div className="order-price">{formatPrice(totalPrice)}</div>
                {
                    basketItemsList.length ? (<Link to={pages.order} className="order_button">Оформить заказ</Link>) : ''
                }
            </div>
        </>
    )
}

function formatPrice(price) {
    return parseFloat(price).toLocaleString('ru') + ' ₽'
}

export default Basket;