import React from 'react';
import Home from "../home/home";
import './checkLogin.css';

const CheckLogin = (props) => {

    return (
        <div>
            {
                !props.loginOk &&
                <div className="formLogin">
                    <form className="loginForm">
                        <div className="nameForm"><h3>Войти</h3></div>
                        <input type="text" name="username" placeholder="Username" id="username" required
                               value={props.username}
                               onChange={(e) => {
                                   props.setUserName(e.target.value)
                                   console.log(props.username)
                               }}
                        ></input>
                        <input type="password" name="password" placeholder="Password" id="password" required
                               value={props.password}
                               onChange={(e) => {
                                   props.setPassword(e.target.value)
                               }}
                        ></input>
                        <input type="submit" value="Войти"
                               onClick={(e) => {
                                   const form = e.target.closest('.loginForm');
                                   form.addEventListener('submit', e => {
                                       props.submitCheckLogin(e);
                                   })
                                   if (props.loginOk === true) {
                                       console.log('ok')
                                       props.setLogin(!props.loginOk)
                                   }
                               }}
                        ></input>
                        <div className="registrationForm"
                        onClick={() => {
                            props.setOpenWindowRegistration(!props.openWindowRegistration);
                        }}>
                            Зарегистрироваться
                        </div>
                    </form>
                </div>
            }
            {
                props.loginOk === true &&
                <Home
                    session={props.session}   //   все сессии
                    setSession={props.setSession}   //  смена сессий
                    firstname={props.firstname}  //   имя для приветствия
                />
            }

        </div>
    );
};

export default CheckLogin;