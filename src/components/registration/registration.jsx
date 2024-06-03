import React from 'react';
import './registration.css';

const Registration = (props) => {
    return (
        <div className="formRegister">
            <form className="registerForm">
                <div className="nameForm"><h3>Регистрация</h3></div>
                <input type="text" name="username" placeholder="Ваш логин" id="username" required
                       value={props.usernameRegister}
                       onChange={(e) => {
                            props.setUsernameRegister(e.target.value);
                       }}
                ></input>
                <input type="email" name="email" placeholder="Введите почту" id="email" required
                       value={props.mail}
                       onChange={(e) => {
                           props.setMailRegister(e.target.value)
                       }}
                ></input>
                <input type="text" name="organization" placeholder="Ваша организации" id="organization"
                       required
                       value={props.organization}
                       onChange={(e) => {
                           props.setOrganizationRegister(e.target.value)
                       }}
                ></input>
                <input type="text" name="first_name" placeholder="Ваше имя" id="first_name" required
                       value={props.first_name}
                       onChange={(e) => {
                           props.setFirstNameRegister(e.target.value)
                       }}
                ></input>
                <input type="text" name="last_name" placeholder="Ваша фамилия" id="last_name" required
                       value={props.last_name}
                       onChange={(e) => {
                           props.setLastNameRegister(e.target.value)
                       }}
                ></input>
                <input type="text" name="patronymic" placeholder="Ваше отчетсво" id="patronymic" required
                       value={props.patronymiс}
                       onChange={(e) => {
                           props.setPatronymicRegister(e.target.value)
                       }}
                ></input>
                <input type="password" name="password" placeholder="Password" id="password" required
                       value={props.passwordRegister}
                       onChange={(e) => {
                           props.setPasswordRegister(e.target.value)
                       }}
                ></input>
                <input type="submit" value="Зарегистрироваться"
                       onClick={(e) => {
                           const form = e.target.closest('.registerForm');
                            form.addEventListener('submit' , e => {
                                e.preventDefault();
                                props.setSendRegister(!props.sendRegister);
                            })
                       }}
                ></input>
                <div className="registrationForm"
                     onClick={() => {
                         props.setOpenWindowRegistration(!props.openWindowRegistration);
                     }}
                >Вернуться ко входу
                </div>
            </form>
        </div>
    );
};

export default Registration;