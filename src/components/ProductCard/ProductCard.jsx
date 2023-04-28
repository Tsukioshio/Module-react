import React from "react";

import {products} from "../../pages/ProducsPage/Products";

import './ProductCard.css'

// import '../../assets/Oysters.svg'
// import '../../assets/Ribs.svg'
// import '../../assets/Shrimps.svg'

// const ProductCard = (image, title, description) => {
const ProductCard = ({image, title, description, price, weight}) => {
    return (
        <div className={'card'}>
            <img className={'image'} src={image} alt="product"/>
            <div className={'card-description text'}>
                <p className={'text title'}>{title}</p>
                <p className={'text description'}>{description}</p>
            </div>
            <div className={'wrapper'}>
                <p className={'text price'}>{price}₽ / {weight}</p>
                {/*<p className={'text weight'}> /{weight}</p>*/}
                <button className={'addToCartBtn'}>+</button>
            </div>



        </div>
    )
};

export default ProductCard