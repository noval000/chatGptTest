import React, {useEffect, useState} from 'react';
import Sidebar from "../sidebar/sidebar";
import MainSectionForm from "../mainSectionForm/mainSectionForm";
import axios from "axios";

const Home = (props) => {



    const [changeSessionForSubmit, setChangeSessionForSubmit] = useState(false);  //   отслеживаем изменилось ли значение при отправке

    const [inpGetValue, setValue] = useState('')   //   значение после первого запроса



    const [llm_session_title, setLimSessionTitle] = useState('');   //   название сессии
    const [llm_session_id, setLimSessionId] = useState('');   //  id session

    const [valueChatGpt, setValueChatGpt] = useState('')  //  запрос в чат гпт
    const [sessionChatGpt, setSessionChatGpt] = useState([])  //  все запросы в чат gpt


    const [valueChatClaude, setValueChatClaude] = useState('')  //  запрос в чат Claude
    const [sessionChatClaude, setSessionChatClaude] = useState([])  //  все запросы в чат Claude



    const [valueChatGigachat, setValueChatGigachat] = useState('')  //  запрос в чат Gigachat
    const [sessionChatGigachat, setSessionChatGigachat] = useState([])  //  все запросы в чат Gigachat




    useEffect(() => {
        const submitFirstChat = (e) => {
            // e.preventDefault();
            setChangeSessionForSubmit(true)
            // Данные для отправки на сервер
            const data = {
                llm_session_title,
                llm_session_id,
                inpGetValue,
                valueChatGpt,
                valueChatClaude,
                valueChatGigachat
            };
            // Отправка данных на сервер
            axios.post('/api/llm_session/new_query', data)
                .then(response => {
                    console.log('Server response:', response.data);
                    const messageGpt = response.data.filter(el => el.datetime_response === 'chatgpt')
                    const messageClaude = response.data.filter(el => el.datetime_response === 'claude')
                    const messageGigachat = response.data.filter(el => el.datetime_response === 'gigachat')
                    const newMessageGpt = {
                        datetime_query: messageGpt[0].datetime_query,
                        datetime_response: messageGpt[0].datetime_response,
                        id: messageGpt[0].id,
                        model: messageGpt[0].model,
                        query: messageGpt[0].query,
                        response: messageGpt[0].response,
                        session_id: messageGpt[0].session_id,
                        task: messageGpt[0].task,
                        user_score: messageGpt[0].user_score
                    }
                    const newMessageClaude = {
                        datetime_query: messageClaude[0].datetime_query,
                        datetime_response: messageClaude[0].datetime_response,
                        id: messageClaude[0].id,
                        model: messageClaude[0].model,
                        query: messageClaude[0].query,
                        response: messageClaude[0].response,
                        session_id: messageClaude[0].session_id,
                        task: messageClaude[0].task,
                        user_score: messageClaude[0].user_score
                    }
                    const newMessageGigachat = {
                        datetime_query: messageGigachat[0].datetime_query,
                        datetime_response: messageGigachat[0].datetime_response,
                        id: messageGigachat[0].id,
                        model: messageGigachat[0].model,
                        query: messageGigachat[0].query,
                        response: messageGigachat[0].response,
                        session_id: messageGigachat[0].session_id,
                        task: messageGigachat[0].task,
                        user_score: messageGigachat[0].user_score
                    }
                    setSessionChatGpt([...sessionChatGpt, newMessageGpt])
                    setSessionChatGigachat([...sessionChatGigachat, newMessageGigachat])
                    setSessionChatClaude([...sessionChatClaude, newMessageClaude])
                })
                .finally(() => {
                    setValueChatGpt('');
                    setValueChatGigachat('');
                    setValueChatClaude('');
                    setChangeSessionForSubmit(false)
                })
                .catch(error => {
                    console.error('There was an error sending the data!', error);
                });
        };

        if (changeSessionForSubmit === true) {
            submitFirstChat();
        }
        console.log(changeSessionForSubmit)
        console.log(sessionChatGpt)
    }, [changeSessionForSubmit]);    //  отправка запроса на ответ





    return (
        <div>
            <Sidebar
                sessionChatGigachat={sessionChatGigachat}  //  все запросы в чат Gigachat
                setSessionChatGigachat={setSessionChatGigachat}
                valueChatGigachat={valueChatGigachat}    //  запрос в чат Gigachat
                setValueChatGigachat={setValueChatGigachat}
                valueChatClaude={valueChatClaude}      //  запрос в чат Claude
                setValueChatClaude={setValueChatClaude}
                sessionChatClaude={sessionChatClaude}      //  все запросы в чат Claude
                setSessionChatClaude={setSessionChatClaude}
                valueChatGpt={valueChatGpt}    //  запрос в чат гпт
                setValueChatGpt={setValueChatGpt}
                sessionChatGpt={sessionChatGpt}    //  все запросы в чат gpt
                setSessionChatGpt={setSessionChatGpt}
                session={props.session}   // все сессии
                llm_session_title={llm_session_title}  //   название сессии
                setLimSessionTitle={setLimSessionTitle}
                llm_session_id={llm_session_id}  //  id session
                setLimSessionId={setLimSessionId}
            />
            <MainSectionForm
                changeSessionForSubmit={changeSessionForSubmit}    //   отслеживаем изменилось ли значение при отправке
                setChangeSessionForSubmit={setChangeSessionForSubmit}
                sessionChatGigachat={sessionChatGigachat}  //  все запросы в чат Gigachat
                setSessionChatGigachat={setSessionChatGigachat}
                valueChatGigachat={valueChatGigachat}    //  запрос в чат Gigachat
                setValueChatGigachat={setValueChatGigachat}
                valueChatClaude={valueChatClaude}      //  запрос в чат Claude
                setValueChatClaude={setValueChatClaude}
                sessionChatClaude={sessionChatClaude}      //  все запросы в чат Claude
                setSessionChatClaude={setSessionChatClaude}
                valueChatGpt={valueChatGpt}    //  запрос в чат гпт
                setValueChatGpt={setValueChatGpt}
                sessionChatGpt={sessionChatGpt}    //  все запросы в чат gpt
                setSessionChatGpt={setSessionChatGpt}
                llm_session_title={llm_session_title}  //   название сессии
                setLimSessionTitle={setLimSessionTitle}
                llm_session_id={llm_session_id}  //  id session
                setLimSessionId={setLimSessionId}
                firstname={props.firstname}  //   имя для приветствия
                session={props.session}    // все сессии
                setSession={props.setSession}    // изменение сессий
                setValue={setValue}    //    первый запрос
                inpGetValue={inpGetValue}
                // submitFirstChat={submitFirstChat}
            />
        </div>
    );
};

export default Home;