import React, {useEffect, useState} from 'react';
import './pageProfile.css';
import axios from "axios";








const PageProfile = (props) => {


    // const [password, setPassword] = useState('');

    const [axiosChangeName, setAxiosChangeName] = useState(false);       //      при изменении этого состояния отправляется форма (смена данных пользователя)
    // const [axiosChangePassword, setAxiosChangePassword] = useState(false);       //      при изменении этого состояния отправляется форма (смена данных пользователя)


    useEffect(() => {
        const submitFirstChat = (e) => {
            const first_name = props.firstname;
            const last_name = props.lastname;
            const patronymic = props.patronymicLogin;
            const organization = props.organizationLogin;
            const email = props.mailLogin;
            const id = props.userId;
            const role = props.role;
            console.log(                first_name,
                last_name,
                patronymic,
                organization,
                email,
                id,
                role)
            // Данные для отправки на сервер
            const data = {
                first_name,
                last_name,
                patronymic,
                organization,
                email,
                id,
                role
            };
            // Отправка данных на сервер
            axios.post('/api/profile/change_profile_settings', data)
                .then(response => {
                    console.log('Server response:', response.data);

                })
                .finally(() => {

                })
                .catch(error => {
                    console.error('There was an error sending the data!', error);
                });
        };
        submitFirstChat();
    }, [axiosChangeName]);    //  отправка изменений профиля

    // useEffect(() => {
    //     const submitFirstChat = (e) => {
    //         // Данные для отправки на сервер
    //         const data = {
    //             password
    //         };
    //         // Отправка данных на сервер
    //         axios.post('/api/profile/change_profile_settings', data)
    //             .then(response => {
    //                 console.log('Server response:', response.data);
    //
    //             })
    //             .finally(() => {
    //
    //             })
    //             .catch(error => {
    //                 console.error('There was an error sending the data!', error);
    //             });
    //     };
    //     submitFirstChat();
    // }, [axiosChangePassword]);    //  отправка изменений профиля

    return (
        <div className="PageProfile">
            <div className="headerModalTitle">
                <h4>Профиль</h4>
            </div>
            <button
                className={props.btnChangeInfo ? 'noneBtnChange' : 'changeInfoBtn'}
                onClick={() => {
                    props.setBtnChangeInfo(!props.btnChangeInfo);
                }}
            >
                Изменить данные
            </button>
            <button className={props.btnChangeInfo ? 'changeInfoBtn activeColor' : 'noneBtnChange'}
                    onClick={() => {
                        props.setBtnChangeInfo(!props.btnChangeInfo);
                        setAxiosChangeName(!axiosChangeName);
                    }}
            >
                Сохранить данные
            </button>
            <div className="changeUserProfile">
                <form action="" id="userProfile">
                    <div className="name">
                        <h4>Имя</h4>
                        <input type="text" className="firstname" value={props.firstname || ''}
                               disabled={!props.btnChangeInfo}
                               onChange={(e) => {
                                   props.setFirstName(e.target.value);
                               }}
                        />
                    </div>
                    <div className="lastname">
                        <h4>Фамилия</h4>
                        <input type="text" className="lastname" value={props.lastname || ''}
                               disabled={!props.btnChangeInfo}
                               onChange={(e) => {
                                   props.setLastNameLogin(e.target.value);
                               }}
                        />
                    </div>
                    <div className="patronymicLogin">
                        <h4>Отчество</h4>
                        <input type="text" className="patronymicLogin" value={props.patronymicLogin || ''}
                               disabled={!props.btnChangeInfo}
                               onChange={(e) => {
                                   props.setPatronymicLogin(e.target.value)
                               }}
                        />
                    </div>
                    <div className="organizationLogin">
                        <h4>Организация</h4>
                        <input type="text" className="organizationLogin" value={props.organizationLogin || ''}
                               disabled={!props.btnChangeInfo}
                               onChange={(e) => {
                                   props.setOrganizationLogin(e.target.value)
                               }}
                        />
                    </div>
                    <div className="mailLogin">
                        <h4>Маил</h4>
                        <input type="text" className="mailLogin" value={props.mailLogin || ''}
                               disabled={!props.btnChangeInfo}
                               onChange={(e) => {
                                   props.setMailLogin(e.target.value)
                               }}
                        />
                    </div>
                    <div className="password">
                        <h4>Введите новый пароль</h4>
                        <input type="text" className="password" value=''
                               disabled={!props.btnChangeInfo}
                               onChange={(e) => {
                                   // setPassword(e.target.value)
                               }}
                        />
                        <button className="btnPassword">
                            Сохранить пароль
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PageProfile;