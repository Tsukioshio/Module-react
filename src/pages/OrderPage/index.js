import './style.css'
import React from "react";
import PageHeader from "../../components/PageHeader";
import {clearCart} from "../../store/reducers/cart";
import {useDispatch} from "react-redux";


function Order() {
    const dispatch = useDispatch();

    /** Очищаем корзину */
    dispatch(clearCart());

    return (
        <>
            <PageHeader
                title="Оформление заказа"
                needBack={true}
            />
            <div className="order_text">
                <p>Вы успешно оформили заказ</p><br/>
                <p>Ожидайте, наш менеджер свяжется с вами для уточнения деталей заказа</p>
            </div>
        </>
    )
}

export default Order;