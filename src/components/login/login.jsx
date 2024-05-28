import React, {useState} from 'react';
import CheckLogin from "../checkLogin/checkLogin";
import axios from "axios";



const Login = (props) => {

    const [session, setSession] = useState([]);   // все активные сессии

    const [firstname, setFirstName] = useState('')  //  имя  для приветствия
    const [username, setUserName] = useState('');   //  логин пользователя
    const [password, setPassword] = useState('');   //  пароль пользователя
    const [loginOk, setLogin] = useState(false);   //   верификация
    const [responseData, setResponseData] = useState(null);  //  проверка ответ есть или нет


    axios.defaults.withCredentials = true;


    const submitCheckLogin = async (e) => {
        e.preventDefault();

        // данные для отправки на сервер

        const data = {
            username,
            password
        };

        try {

            // Отправка данных на сервер
            const response = await axios.post('/api/login', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                withCredentials: true,

            });
            console.log('server responce' , response.data);
            console.log(data)
            setResponseData(response.data)
            setLogin(response.data.loggedin);   //  true or false for validate
            setFirstName(response.data.first_name)   //  записываем имя для приветствия
            setSession(response.data.llm_sessions.filter(el => el.status === 'active'))  //   фильтруем массив по активным сессиям
            localStorage.setItem('login' , response.data.loggedin)  //  Закдываем в session storage авторизован или нет
            console.log(loginOk, responseData)
            console.log(response.data.first_name)
            console.log(firstname)
            console.log(response.data.llm_sessions.filter(el => el.status === 'active'));

        } catch (error) {
            console.error('error' , error)
        }




    }    //   авторизация


    return (
        <div>
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
            />
        </div>
    )
}

export default Login;