import React, {useEffect, useState} from 'react';
import CheckLogin from "../checkLogin/checkLogin";
import axios from "axios";
import Registration from "../registration/registration";




const Login = (props) => {

    const [session, setSession] = useState([]);   // все активные сессии
    const [archiveSession, setArchiveSession] = useState([])   // все архивные сессии

    const [firstname, setFirstName] = useState('')  //  имя  для приветствия
    const [username, setUserName] = useState('');   //  логин пользователя
    const [password, setPassword] = useState('');   //  пароль пользователя
    const [loginOk, setLogin] = useState(false);   //   верификация
    const [responseData, setResponseData] = useState(null);  //  проверка ответ есть или нет
    const [userId, setUserid] = useState('');   //  id пользователя
    const [mailLogin, setMailLogin] = useState(''); //  маил пользователя
    const [lastname, setLastNameLogin] = useState(''); //  фамилия пользователя
    const [patronymicLogin, setPatronymicLogin] = useState(''); //  отчество пользователя
    const [organizationLogin, setOrganizationLogin] = useState(''); //  организация пользователя


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

            console.log(response.data);
            setOrganizationLogin(response.data.organization);   //   оранизация
            setPatronymicLogin(response.data.patronymic);    //   отчество пользователя
            setLastNameLogin(response.data.last_name);   //    фамилия пользователя
            setMailLogin(response.data.email);  //   mail user
            setUserid(response.data.id);     //  id user
            setResponseData(response.data);
            setLogin(response.data.loggedin);   //  true or false for validate
            setFirstName(response.data.first_name)   //  записываем имя для приветствия
            setSession(response.data.llm_sessions.filter(el => el.status === 'active').sort((a, b) =>     //   фильтруем массив по активным сессиям
                new Date(a.datetime_last_update).getTime() + new Date(b.datetime_last_update).getTime()
            ));
            setArchiveSession(response.data.llm_sessions.filter(el => el.status === 'deleted').sort((a, b) =>     //   фильтруем массив по архивным сессиям
                new Date(a.datetime_last_update).getTime() + new Date(b.datetime_last_update).getTime()
            ));

            // localStorage.setItem('login' , response.data.loggedin)  //  Закдываем в session storage авторизован или нет

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
                    setOrganizationLogin={setOrganizationLogin}  //  организация пользователя
                    organizationLogin={organizationLogin}
                    patronymicLogin={patronymicLogin}     //  отчество
                    setPatronymicLogin={setPatronymicLogin}
                    setLastNameLogin={setLastNameLogin}   //  фамилия пользователя
                    lastname={lastname}
                    mailLogin={mailLogin}   //  маил пользователя
                    setMailLogin={setMailLogin}
                    userId={userId}   //  id пользователя
                    setArchiveSession={setArchiveSession}
                    archiveSession={archiveSession}   //   все архивные сессии
                    session={session}   //   все сессии
                    setSession={setSession}   //  смена сессий
                    setFirstName={setFirstName}
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