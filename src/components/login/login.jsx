import React, {useEffect, useState} from 'react';
import CheckLogin from "../checkLogin/checkLogin";
import axios from "axios";
import Registration from "../registration/registration";



const Login = (props) => {

    const [session, setSession] = useState([]);   // все активные сессии

    const [firstname, setFirstName] = useState('')  //  имя  для приветствия
    const [username, setUserName] = useState('');   //  логин пользователя
    const [password, setPassword] = useState('');   //  пароль пользователя
    const [loginOk, setLogin] = useState(false);   //   верификация
    const [responseData, setResponseData] = useState(null);  //  проверка ответ есть или нет


    axios.defaults.withCredentials = true;


    const [openWindowRegistration, setOpenWindowRegistration] = useState(false)


    const submitCheckLogin = async (e) => {
        e.preventDefault();

        // данные для отправки на сервер

        const data = {
            username,
            password
        };

        try {
            // const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
            // Отправка данных на сервер
            const response = await axios.post('/api/login', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                withCredentials: true,

            });
            setResponseData(response.data)
            setLogin(response.data.loggedin);   //  true or false for validate
            setFirstName(response.data.first_name)   //  записываем имя для приветствия
            setSession(response.data.llm_sessions.filter(el => el.status === 'active').sort((a, b) =>
                new Date(a.datetime_last_update).getTime() + new Date(b.datetime_last_update).getTime()
            ));  //   фильтруем массив по активным сессиям
            localStorage.setItem('login' , response.data.loggedin)  //  Закдываем в session storage авторизован или нет

        } catch (error) {
            console.error('error' , error)
        }




    }    //   авторизация




    /*    стейты для регистрации    */

    const [usernameRegister, setUsernameRegister] = useState('');  //  логин
    const [email, setMailRegister] = useState('');  //  mail
    const [organization, setOrganizationRegister] = useState('');  //  организация
    const [first_name, setFirstNameRegister] = useState('');  //  имя
    const [last_name, setLastNameRegister] = useState('');  //  фамилия
    const [patronymic, setPatronymicRegister] = useState('');  //  отчество
    const [passwordRegister, setPasswordRegister] = useState('');  //  пароль

    const [sendRegister, setSendRegister] = useState(false);   //   при изменения отправляем на сервак




    useEffect(() => {
        const username = usernameRegister;
        const password = passwordRegister;
        const submitRegister = (e) => {
            // Данные для отправки на сервер
            const data = {
                username,
                email,
                organization,
                first_name,
                last_name,
                patronymic,
                password
            };
            // Отправка данных на сервер
            axios.post('/api/register', data)
                .then(response => {
                    console.log('Server response:', response.data);
                })
                .finally(() => {
                    setSendRegister(false);
                })
                .catch(error => {
                    console.error('There was an error sending the data!', error);
                });
        };

        if (sendRegister === true) {
            submitRegister();
        }
    }, [sendRegister]);    //  отправка запроса на регистрацию








    return (
        <div>
            {
                !openWindowRegistration &&
                <CheckLogin
                    session={session}   //   все сессии
                    setSession={setSession}   //  смена сессий
                    firstname={firstname}   //   имя для приветствия
                    username={username}   //  логин
                    setUserName={setUserName}
                    password={password}   //  пароль
                    setPassword={setPassword}   //  функция смены пароля
                    loginOk={loginOk}    //  логин
                    setLogin={setLogin}   //  функция смены логина
                    submitCheckLogin={submitCheckLogin}  //  функция запроса к серваку при логине
                    responseData={responseData} // проверка есть ответ или нет
                    setOpenWindowRegistration={setOpenWindowRegistration}  //   переключение на форму регистрации
                    openWindowRegistration={openWindowRegistration}
                />
            }
            {
                openWindowRegistration &&
                <Registration
                    sendRegister={sendRegister}
                    setSendRegister={setSendRegister}  //  отправка запроса
                    passwordRegister={passwordRegister} //  пароль
                    setPasswordRegister={setPasswordRegister}
                    patronymiс={patronymic}  //  отчество
                    setPatronymicRegister={setPatronymicRegister}
                    last_name={last_name}  //  фамилия
                    setLastNameRegister={setLastNameRegister}
                    first_name={first_name}  //  имя
                    setFirstNameRegister={setFirstNameRegister}
                    organization={organization}  //  организация
                    setOrganizationRegister={setOrganizationRegister}
                    email={email}   //   mail registration
                    setMailRegister={setMailRegister}
                    usernameRegister={usernameRegister}  //   логин при регистрации
                    setUsernameRegister={setUsernameRegister}
                    setOpenWindowRegistration={setOpenWindowRegistration}  //   переключение на форму регистрации
                    openWindowRegistration={openWindowRegistration}
                />
            }


        </div>
    )
}

export default Login;