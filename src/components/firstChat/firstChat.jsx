import React, {useEffect} from 'react';
import "./firstChat.css";
import trizLogo from "../images/imgIcon/triz_logo_big_blue.png";
import axios from "axios";

const FirstChat = (props) => {



    useEffect(() => {
        const submitFirstChat = (e) => {
            console.log('hhhhh')
            // props.setSession([props.inpGetValue, ...props.session])
            // e.preventDefault();
            props.setChangeSessionForSubmitAll(true)
            // Данные для отправки на сервер
            const data = {
                props,

                // valueChatGpt
                // valueChatClaude,
                // valueChatGigachat
            };
            // Отправка данных на сервер
            axios.post('/api/llm_session/new_query', data)
                .then(response => {
                    console.log('Server response:', response.data);
                    // const messageGpt = response.data.filter(el => el.datetime_response === 'chatgpt');
                    // const messageClaude = response.data.filter(el => el.datetime_response === 'claude');
                    // const messageGigachat = response.data.filter(el => el.datetime_response === 'gigachat');
                    // const newMessageGpt = {
                    //     datetime_query: messageGpt[0].datetime_query,
                    //     datetime_response: messageGpt[0].datetime_response,
                    //     id: messageGpt[0].id,
                    //     model: messageGpt[0].model,
                    //     query: inpGetValue,
                    //     response: messageGpt[0].response,
                    //     session_id: messageGpt[0].session_id,
                    //     task: messageGpt[0].task,
                    //     user_score: messageGpt[0].user_score
                    // };
                    // const newMessageClaude = {
                    //     datetime_query: messageClaude[0].datetime_query,
                    //     datetime_response: messageClaude[0].datetime_response,
                    //     id: messageClaude[0].id,
                    //     model: messageClaude[0].model,
                    //     query: inpGetValue,
                    //     response: messageClaude[0].response,
                    //     session_id: messageClaude[0].session_id,
                    //     task: messageClaude[0].task,
                    //     user_score: messageClaude[0].user_score
                    // };
                    // const newMessageGigachat = {
                    //     datetime_query: messageGigachat[0].datetime_query,
                    //     datetime_response: messageGigachat[0].datetime_response,
                    //     id: messageGigachat[0].id,
                    //     model: messageGigachat[0].model,
                    //     query: inpGetValue,
                    //     response: messageGigachat[0].response,
                    //     session_id: messageGigachat[0].session_id,
                    //     task: messageGigachat[0].task,
                    //     user_score: messageGigachat[0].user_score
                    // };
                    // setSessionChatGpt([...sessionChatGpt, newMessageGpt]);
                    // setSessionChatClaude([...sessionChatClaude, newMessageClaude]);
                    // setSessionChatGigachat([...sessionChatGigachat, newMessageGigachat]);
                })
                .finally(() => {
                    // props.setValue('');
                    // setValueChatGigachat('');
                    // setValueChatClaude('');
                    // setValueChatGpt('');
                    // setChangeSessionForSubmitGpt(false);
                })
                .catch(error => {
                    console.error('There was an error sending the data!', error);
                });
        };

        if (props.setChangeSessionForSubmitAll === true) {
            submitFirstChat();
        }
        // setValue('');
        // setValueChatGigachat('');
        // setValueChatClaude('');
        // setValueChatGpt('');
        // console.log(changeSessionForSubmit)
        // console.log(sessionChatGpt)
    }, [props.changeSessionForSubmitAll]);    //  отправка запроса на ответ в общий чат



    return (
        <div className="oneChatContainer">
            <div className="titleOneChatContainer">
                <img src={trizLogo} alt=""/>
                <h5>Здравствуйте, {props.firstname}. Введите ваш запрос</h5>
            </div>
            <div className="allBlockMain">
                <form id="mainForm" action="">
                    <div className="input-area">
                        <input type="text" placeholder="Введите ваш запрос"
                               value={props.inpGetValue}
                               onChange={(e) => {
                                   props.setValue(e.target.value)
                               }}
                        />
                        <input type="submit"
                               value=""
                               onClick={(e) => {
                                   const form = e.target.closest('#mainForm');
                                   form.addEventListener('submit', e => {
                                       e.preventDefault();
                                       props.setChangeSessionForSubmitAll(true);
                                       console.log(props.openTheeWindowNewSession);
                                       props.setOpenTheeWindowNewSession(true);
                                       console.log(props.openTheeWindowNewSession);
                                   })
                               }}
                        />
                        <span className="loader"></span>
                    </div>
                </form>
                <div className="footer">
                    Alpha Version. Помощник ТРИЗ может совершать ошибки, будьте снисходительны!
                </div>
            </div>
        </div>
    );
};

export default FirstChat;