import './style.css';
import backImg from "../../assets/img_back.svg";

function BasketHeader() {
    return (
        <div className="main-header">
            <div className="header">
                <a href="/module-react" className="back-button"><img className="image-bas" src={backImg}/></a>
                <h1 className="title">Корзина с выбранными товарами</h1>
            </div>
        </div>
    )
}

export default BasketHeader;