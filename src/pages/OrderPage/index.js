import './style.css'
import React from "react";
import PageHeader from "../../components/PageHeader";
import {clearCart} from "../../store/reducers/cart";
import {useDispatch} from "react-redux";


function Order() {
    const dispatch = useDispatch();

    dispatch(clearCart());

    return (
        <>
            <PageHeader
                title="Оформление заказа"
                needBack={true}
            />
            <div className="order_text">
                <p>Вы успешно оформили заказ!</p><br/>
                <p>Ожидайте менеджера для уточнения данных </p>
            </div>
        </>
    )
}

export default Order;