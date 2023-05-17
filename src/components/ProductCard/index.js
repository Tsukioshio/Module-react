import './style.css'
import {useDispatch} from "react-redux";
import {addToCartList} from "../../store/reducers/cart";

function Product({id, productPreview, productTitle, description, price, weight, measure}) {

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addToCartList({id, productPreview, productTitle, price}));
    };

    return (
        <div className="product-item">
            <img className="product-preview" src={productPreview}/>
            <h2 className="product-title">{productTitle}</h2>
            <div className="product-description">{description}</div>
            <div className="product-footer">
                <div>
                    <span className="product-price">{formatPrice(price)}</span>
                    {price && weight ? ' / ' : ''}
                    <span className="product-weight">{formatWeight(weight, measure)}</span>
                </div>
                <button className="product-cart_button" onClick={addToCart}>+</button>
            </div>
        </div>
    )
}

function formatPrice(price) {
    if (!price) {
        return '';
    }

    return parseFloat(price).toLocaleString('ru') + ' ₽'
}

function formatWeight(weight, measure = 'г.') {
    if (!weight) {
        return '';
    }

    return parseFloat(weight).toLocaleString('ru') + ' ' + measure;
}

export  default Product;