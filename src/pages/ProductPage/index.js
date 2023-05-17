import React, {useState} from "react";
import './style.css';
import Product from '../../components/ProductCard';
import PageHeader from "../../components/PageHeader";
import productsList from '../../bd/products'

function ProductsPage() {
    const [itemsCnt, setCnt] = useState((JSON.parse(localStorage.getItem('cart')) || []).length);

    const onAddHandler = () => {
        setCnt(itemsCnt + 1);
    };

    return (
        <>
            <PageHeader/>
            <div className="products">
                {
                    productsList.map((item, key) => {
                    return(
                        <Product
                            key={item.id}
                            id={item.id}
                            productPreview={item.productPreview}
                            productTitle={item.productTitle}
                            description={item.description}
                            price={item.price}
                            weight={item.weight}
                            onAddHandler={onAddHandler}
                        />
                    )
                })
                }
            </div>
        </>
    )
}

export default ProductsPage;