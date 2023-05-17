import './style.css'
import basketImg from "../../assets/basket.svg";
import {useSelector} from "react-redux";

function PageHeader() {
    const productsCount = useSelector(state => state.cart.productsCount);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    return (
        <div className="main-header">
            <div className="header">
                <h1 className="title">Наша продукция</h1>
                <div className="full-basket">
                    <div className="basket">{declOfNum(productsCount, ['товар', 'товара', 'товаров'])}<br/> на сумму {formatPrice(totalPrice)}</div>
                    <a href="/module-react/cart" className="basket-radius"><img className="image-bas" src={basketImg}/></a>
                 </div>
            </div>
        </div>
    )
}

function formatPrice(price) {
    return parseFloat(price).toLocaleString('ru') + ' ₽'
}

function declOfNum(number, words) {
    return number + ' ' + words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

export default PageHeader;