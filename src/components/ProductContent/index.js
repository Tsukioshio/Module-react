import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {addToCartList, removeFromCartList} from "../../store/reducers/cart";
import {useParams} from "react-router-dom";

function ProductDetail({id, productPreview, productTitle, description, price, weight, measure}) {
    const isAdded = !!useSelector(({cart}) => cart.list.find(cartItem => cartItem.id === id));
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addToCartList({id, productPreview, productTitle, price}));
    };

    const removeFromCart = () => {
        dispatch(removeFromCartList(id));
    };


    return (
        <div className="product-detail content">
            <img className="product-detail_preview" src={productPreview}/>
            <div className="product-detail_info">
                <h2 className="product-detail_title">{productTitle}</h2>
                <div className="product-detail_description">{description}</div>
                <div className="product-detail_footer">
                    <div>
                        <span className="product-detail_price">{formatPrice(price)}</span>
                        {price && weight ? ' / ' : ''}
                        <span className="product-detail_weight">{formatWeight(weight, measure)}</span>
                    </div>
                    <button className="product-detail_cart_button" onClick={isAdded ? removeFromCart : addToCart}>
                        {isAdded ? 'Удалить из корзины' : 'В корзину'}
                    </button>
                </div>
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

export  default ProductDetail;