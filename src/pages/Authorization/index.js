import React, {useState}  from "react";
import './style.css';
import AuthorizationForm from "../../components/AuthorizationForm";

function AuthPage() {
    const [isRegForm, toggleForm] = useState(false);

    const onToggleForm = () => {
        toggleForm(!isRegForm);
    };

    return (
        <>
            <div className="reg_background">
            </div>
            <div className="autorization">
                <span className="autorization_link">
                    <a href="#" onClick={onToggleForm}>{isRegForm ? 'Авторизоваться' : 'Зарегистрироваться'}</a>
                </span>
                <h1 className="entry">{isRegForm ? 'Регистрация' : 'Вход'}</h1>
                <AuthorizationForm key={isRegForm ? 1 : 2} isReg={isRegForm} toggleForm={onToggleForm}/>
            </div>
        </>
    )
}

export default AuthPage;