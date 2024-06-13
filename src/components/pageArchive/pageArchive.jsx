import React, {useEffect, useState} from 'react';
import './pageArchive.css';
import axios from "axios";

const PageArchive = (props) => {

    let idSession = '';
    let titleSession = '';

    const [axiosHistoryMessageSession, setAxiosHistoryMessageSession] = useState(false);

    useEffect(() => {
        const submitFirstChat = (e) => {
            // Данные для отправки на сервер
            const data = {
                idSession,
                titleSession
            };
            // Отправка данных на сервер
            axios.post('/api/archive/', data)
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
    }, [axiosHistoryMessageSession]);    //  отправка запроса для отрисовки всех сессий

    return (
        <div className="headerModal scrollModalSession">
            <div className="headerModalTitle fixedSession">
                <h4>Прошлые сессии</h4>
            </div>
            <div className="AllSession">
                {
                    props.archiveSession.map(el => (
                        <ul
                            onClick={() => {
                                setAxiosHistoryMessageSession(!axiosHistoryMessageSession)
                                console.log(el.title)
                                console.log(el.id)
                                idSession = el.id;
                                titleSession = el.title;
                            }}
                            key={el.id}
                            className="listsArchiveSession">
                            <li className="listArchiveSession">
                                <div className="nameSess">
                                    {el.title}
                                </div>
                                <div className="timeSess">
                                    {
                                        new Date(el.datetime_last_update).getDay() +
                                        "." + new Date(el.datetime_last_update).getMonth() +
                                        "." + new Date(el.datetime_last_update).getFullYear()
                                        + ' ' + new Date(el.datetime_last_update).getHours()
                                        + ':' + new Date(el.datetime_last_update).getMinutes()
                                    }
                                </div>
                            </li>
                        </ul>
                    ))
                }
            </div>
        </div>
    );
};

export default PageArchive;