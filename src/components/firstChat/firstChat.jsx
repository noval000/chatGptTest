import React from 'react';
import "./firstChat.css";
import trizLogo from "../images/imgIcon/triz_logo_big_blue.png";
import axios from "axios";

const FirstChat = (props) => {





    return (
        <div
            className={!props.hideSidebar ? 'oneChatContainer showMin' : 'oneChatContainer showAll'}>
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
                                       // const llm_session_title = props.llm_session_title;
                                       // const llm_session_id = props.llm_session_id;
                                       const llm_query = props.inpGetValue;
                                       const llm_model = 'all';
                                       e.preventDefault();
                                       const data = {
                                           // llm_session_title,
                                           // llm_session_id,
                                           llm_model,
                                           llm_query
                                           // valueChatGpt
                                           // valueChatClaude,
                                           // valueChatGigachat
                                       };
                                       // Отправка данных на сервер
                                       axios.post('/api/llm_session/new_query', data)
                                           .then(response => {
                                               console.log('Server response:', response.data);
                                               // props.setLimSessionId(response.data.llm_session_id)
                                               // console.log(props.llm_session_id);
                                               props.setLimSessionId(response.data.llm_session_id);
                                               props.setSession(response.data.llm_sessions);
                                               // props.llm_session_id = response.data.id;
                                               // console.log(props.session)
                                               // const messageGpt = response.data.filter(el => el.datetime_response === 'chatgpt');
                                               let messageGpt = response.data.llm_responses[0];
                                               let messageClaude = response.data.llm_responses[1];
                                               let messageGigachat = response.data.llm_responses[2];
                                               console.log(props.llm_session_id)
                                               console.log(response.data.llm_session_id)
                                               // const messageClaude = response.data.filter(el => el.datetime_response === 'claude');
                                               // const messageGigachat = response.data.filter(el => el.datetime_response === 'gigachat');
                                               const newMessageGpt = {
                                                   datetime_query: messageGpt.datetime_query,
                                                   datetime_response: messageGpt.datetime_response,
                                                   id: messageGpt.id,
                                                   model: messageGpt.model,
                                                   query: llm_query,
                                                   response: messageGpt.response,
                                                   session_id: messageGpt.session_id,
                                                   task: messageGpt.task,
                                                   user_score: messageGpt.user_score
                                               };
                                               const newMessageClaude = {
                                                   datetime_query: messageClaude.datetime_query,
                                                   datetime_response: messageClaude.datetime_response,
                                                   id: messageClaude.id,
                                                   model: messageClaude.model,
                                                   query: llm_query,
                                                   response: messageClaude.response,
                                                   session_id: messageClaude.session_id,
                                                   task: messageClaude.task,
                                                   user_score: messageClaude.user_score
                                               };
                                               const newMessageGigachat = {
                                                   datetime_query: messageGigachat.datetime_query,
                                                   datetime_response: messageGigachat.datetime_response,
                                                   id: messageGigachat.id,
                                                   model: messageGigachat.model,
                                                   query: llm_query,
                                                   response: messageGigachat.response,
                                                   session_id: messageGigachat.session_id,
                                                   task: messageGigachat.task,
                                                   user_score: messageGigachat.user_score
                                               };
                                               props.setSessionChatGpt([newMessageGpt]);
                                               props.setSessionChatClaude([newMessageClaude]);
                                               props.setSessionChatGigachat([newMessageGigachat]);
                                           })
                                           .finally(() => {
                                               props.setValue('');
                                               // props.setValueChatGigachat('');
                                               // props.setValueChatClaude('');
                                               // props.setValueChatGpt('');
                                               // setChangeSessionForSubmitGpt(false);
                                           })
                                           .catch(error => {
                                               console.error('There was an error sending the data!', error);
                                           });
                                       props.setOpenTheeWindowNewSession(true);
                                       props.setChangeSessionForSubmitAll(true);
                                       console.log(props.openTheeWindowNewSession);

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