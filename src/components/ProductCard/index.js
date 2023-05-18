import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {addToCartList, removeFromCartList} from "../../store/reducers/cart";
import {Link} from 'react-router-dom';
import pages from "../../bd/pages";

function Product({id, productPreview, productTitle, description, price, weight, measure}) {
    const isAdded = !!useSelector(({cart}) => cart.list.find(cartItem => cartItem.id === id));
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addToCartList({id, productPreview, productTitle, price}));
    };

    const removeFromCart = () => {
        dispatch(removeFromCartList(id));
    };

    return (
        <div className="product-item">
            <Link to={pages.product + id}>
                <img className="product-preview" src={productPreview}/>
                <h2 className="product-title">{productTitle}</h2>
            </Link>
            <div className="product-description">{description}</div>
            <div className="product-footer">
                <div>
                    <span className="product-price">{formatPrice(price)}</span>
                    {price && weight ? ' / ' : ''}
                    <span className="product-weight">{formatWeight(weight, measure)}</span>
                </div>
                <button className="product-cart_button" onClick={isAdded ? removeFromCart : addToCart}>
                    {isAdded ? '—' : '+'}
                </button>
            </div>
        </div>
    )
}

/**
 * Проверяет, находится ли товар в корзине
 * @param id
 * @param cartItems
 * @returns {boolean}
 */
function isCart(id, cartItems) {

    return !!cartItems.filter(item => {return item.id === id}).length;
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