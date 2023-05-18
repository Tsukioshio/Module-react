import React from "react";
import './style.css';
import Product from '../../components/ProductCard';
import PageHeader from "../../components/PageHeader";
import productsList from '../../bd/products';

function MainPage() {

    return (
        <>
            <PageHeader
                title="Наша продукция"
                needCart={true}
            />
            <div className="products">
                {
                    productsList.map((item) => {
                    return(
                        <Product
                            key={item.id}
                            id={item.id}
                            productPreview={item.productPreview}
                            productTitle={item.productTitle}
                            description={item.description}
                            price={item.price}
                            measure={item.measure}
                            weight={item.weight}
                        />
                    )
                })
                }
            </div>
        </>
    )
}

export default MainPage;