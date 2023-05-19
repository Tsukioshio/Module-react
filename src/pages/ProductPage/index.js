import React, {useState} from "react";
import './style.css';
import ProductDetail from '../../components/ProductContent';
import PageHeader from "../../components/Header";
import productsList from '../../products/products';
import {useParams} from "react-router";

function ProductPage() {

    const {productId} = useParams();
    const {id, productPreview, productTitle, description, price, weight, measure} = productsList.find(item => item.id === +productId) || {};

    return (
        <>
            <PageHeader
                title=""
                needCart={true}
                needBack={true}
            />
            {
                id ?
                    (
                        <ProductDetail
                            id={id}
                            productPreview={productPreview}
                            productTitle={productTitle}
                            description={description}
                            price={price}
                            weight={weight}
                            measure={measure}
                        />
                    ) :
                    (
                        <div className="">Товар не найден</div>
                    )
            }
        </>
    )
}

export default ProductPage;