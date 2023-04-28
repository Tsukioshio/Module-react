import React from "react";
import './ProductsPage.css'
import Header from "../components/header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import {products} from "./ProducsPage/Products";

const ProductPage = () => {

    return (



        <div className={'product-wrapper'}> {
            // <Header/>
            products.map(product =>
                <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                weight={product.weight}
                />
            )
        }

        </div>
    )

};

export default ProductPage;