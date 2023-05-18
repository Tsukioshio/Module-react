import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {login, setEmail, setSuccessText} from "../../store/reducers/user";

function AuthorizationForm({isReg, toggleForm}) {
    const usersList = JSON.parse(localStorage.getItem('users')) || [];
    const userEmail = useSelector(state => state.user.email);
    const successText = useSelector(state => state.user.successText);
    const dispatch = useDispatch();

    /**
     * Отправка формы регистрации
     * @param event
     */
    const submitRegForm = (event) => {
        const form = event.target;
        const errBlock = form.querySelector('.error_text');

        errBlock.innerText = '';
        dispatch(setSuccessText(""));

        /** Предотвращаем выполнение стандартной логики отправки формы */
        event.preventDefault();

        if (validateForm(form)) {
            const userName = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const existUser = usersList.find(user => user.name === userName);

            if (existUser) {
                errBlock.innerText = 'Пользователь с таким email уже существует';
                errBlock.style.display = 'block';
            }
            else {
                usersList.push({
                    name: userName,
                    password: password
                });

                localStorage.setItem('users', JSON.stringify(usersList));
                dispatch(setEmail(userName));
                dispatch(setSuccessText("Вы успешно зарегистрировались. Теперь можете войти на сайт."));
                toggleForm();
            }
        }
    };

    /**
     * Отправка формы авторизации
     * @param event
     */
    const submitAuthForm = (event) => {
        const form = event.target;
        const errBlock = form.querySelector('.error_text');

        errBlock.innerText = '';

        /** Предотвращаем выполнение стандартной логики отправки формы */
        event.preventDefault();

        if (validateForm(form)) {
            const inputUserName = document.getElementById('username');
            const inputPassword = document.getElementById('password');

            const existUser = usersList.find(user => {
                return user.name === inputUserName.value && user.password === inputPassword.value
            });

            if (existUser) {
                dispatch(login());
            }
            else {
                errBlock.innerText = 'Логин или пароль неверен';
                errBlock.style.display = 'block';
            }
        }
    };
    return (
        <form action="" id="reg_form" onSubmit={isReg ? submitRegForm : submitAuthForm}>
            <div className="success_text">
                {successText}
            </div>
            <div className="autorization_entry-field entry-field_required">
                
                <input
                    type="email"
                    name="email"
                    defaultValue={userEmail || ''}
                    placeholder="Логин"
                    id="username"
                    className="autorization_username"
                    onFocus={inputFocus}
                />
                <p className="signature"/>
            </div>

            <div className="autorization_entry-field entry-field_required">
                
                <input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    id="password"
                    className="autorization_username"
                    onFocus={inputFocus}
                />
                <p className="signature"/>
            </div>
            <div className="entry-checkbox entry-field_required">
                <input
                    className="input-checkbox"
                    name="agree"
                    id="checkbox"
                    type="checkbox"
                    onChange={inputFocus}
                />
                <label className="input-checkbox__label" htmlFor="checkbox">
                    Я согласен получать обновления на почту
                </label>
                <p className="signature"/>
            </div>
            <div className="error_text"></div>
            <button className="wrapper">{isReg ? "Зарегистрироваться" : "Войти"}</button>
        </form>
    )
}

function validateForm(form) {
    const arInputs = form.querySelectorAll('.entry-field_required input');
    let isValid = true;
    let formData = {};

    /** В цикле обрабатываем все поля формы */
    for (let i = 0; i < arInputs.length; i++) {
        let input = arInputs[i];

        if (!inputValidation(input)) {
            isValid = false;
        }

        formData[input.name] = input.value;
    }

    return isValid;
}

/**
 * Валидация поля
 * @param input
 * @returns {boolean}
 */
function inputValidation(input) {
    const value = input.value;
    const parentNode = input.parentNode;
    let errMessage = '';

    if (!value) {
        errMessage = 'Поле не должно быть пустым';
    }
    else if (input.type === 'checkbox' && !input.checked) {
        errMessage = 'Поле не должно быть пустым';
    }
    else if (input.type === 'password' && value.length < 8) {
        errMessage = 'Пароль должен содержать как минимум 8 символов';
    }
    else if (input.type === 'email' && !validateEmail(value)) {
        errMessage = 'Email невалидный';
    }

    if (errMessage) {
        parentNode.classList.add('entry-field_error');
        parentNode.querySelector('.signature').innerText = errMessage;
    }

    return !errMessage;
}

/**
 * Обработка события фокуса элемента. Убираем класс ошибки
 * @param event
 */
function inputFocus(event) {
    event.target.parentNode.classList.remove('entry-field_error');
}

/**
 * Проверка корректности email
 * @param email
 * @returns {boolean}
 */
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
}

export default AuthorizationForm;