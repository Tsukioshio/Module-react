
import React from "react";
import './Header.css'
import imgBasket from '../../assets/Basket-Icon.svg'


const Header = () => {
    return (
        <div className={'header'}>
            <h1>Наша продукция</h1>
            <div className={'basket'}>

                <div className={'order'}>
                    <p> 3 Товара </p>
                    <p> на сумму 3500 ₽</p>
                </div>

                <img className={'image'} src={imgBasket} alt="product"/>
            </div>
        </div>
    )
};

export default Header;