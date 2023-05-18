import './style.css';
import React from "react";
import {Link} from 'react-router-dom';
import SmallBasket from "../SmallBasket";
import backImg from "../../assets/img_back.svg";
import LogoutButton from "../LogoutButton";
import pages from "../../bd/pages";

function PageHeader({title, needCart, needBack}) {

    return (
        <div className="main-header">
            <div className="header">
                {needBack && (<Link to={pages.main} className="back-button"><img className="image-bas" src={backImg}/></Link>)}
                <h1 className="title">{title || ""}</h1>
                <div className="header_right">
                    {needCart && (<SmallBasket/>)}
                    <LogoutButton/>
                </div>
            </div>
        </div>
    )
}

export default PageHeader;