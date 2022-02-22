import React from "react";
import propTypes from "prop-types";

const Login = (props) => {
    return(
        <div className="login-container">
            <nav className="Login">
                <h2>Авторизация</h2>
                <p>Введите логин и пароль от Гита</p>
                <button className="github"
                onClick={() => props.authenticate()}
                >Войти
                </button>
            </nav>
        </div>
    )
}

Login.propTypes = {
    authenticate: propTypes.func.isRequired
};

export default Login;