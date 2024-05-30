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
                    setSessionChatGpt([...sessionChatGpt, messageGpt])
                    setSessionChatGigachat([...sessionChatGigachat, response.data])
                    setSessionChatClaude([...sessionChatClaude, response.data])
                    console.log(changeSessionForSubmit)
                    console.log(valueChatGpt, valueChatClaude, valueChatGigachat)
                })
                .finally(() => console.log('ok'))
                .catch(error => {
                    console.error('There was an error sending the data!', error);
                });
        };

        if (changeSessionForSubmit === true) {
            submitFirstChat();
            setValueChatGpt('');
            setValueChatGigachat('');
            setValueChatClaude('');
            setTimeout(() => {
                setChangeSessionForSubmit(false)
            }, 1500);
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