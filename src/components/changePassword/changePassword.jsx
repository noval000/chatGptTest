import React, {useEffect, useState} from 'react';
import axios from "axios";

const ChangePassword = (props) => {

    const [password, setPassword] = useState('');

    const [axiosChangePassword, setAxiosChangePassword] = useState(false);       //      при изменении этого состояния отправляется форма (смена данных пользователя)

    useEffect(() => {
        const submitFirstChat = (e) => {
            // Данные для отправки на сервер
            const data = {
                password
            };
            // Отправка данных на сервер
            axios.get('/api/profile/change_profile_settings', data)
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
    }, [axiosChangePassword]);    //  отправка изменений профиля

    return (
            <div className="password">
                <h4>Введите новый пароль</h4>
                <input type="text" className="password" value={password}
                       onChange={(e) => {
                           setPassword(e.target.value)
                       }}
                />
                <button
                onClick={() => {
                    setAxiosChangePassword(!axiosChangePassword)
                }}>Сменить пароль</button>
            </div>

    );
};

export default ChangePassword;