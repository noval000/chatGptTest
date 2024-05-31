import React, {useEffect, useState} from 'react';
import Sidebar from "../sidebar/sidebar";
import MainSectionForm from "../mainSectionForm/mainSectionForm";
import axios from "axios";

const Home = (props) => {



    const [changeSessionForSubmit, setChangeSessionForSubmit] = useState(false);  //   отслеживаем изменилось ли значение при отправке в gigachat
    const [changeSessionForSubmitGpt, setChangeSessionForSubmitGpt] = useState(false);  //   отслеживаем изменилось ли значение при отправке в chatGpt
    const [changeSessionForSubmitClaude, setChangeSessionForSubmitClaude] = useState(false);  //   отслеживаем изменилось ли значение при отправке в claude
    const [changeSessionForSubmitAll, setChangeSessionForSubmitAll] = useState(false);  //   отслеживаем изменилось ли значение при отправке c главной

    const [openTheeWindowNewSession, setOpenTheeWindowNewSession] = useState(false);   //  для открытия трех окон при отправке нового запроса

    console.log(openTheeWindowNewSession);
    console.log(changeSessionForSubmitAll);

    const [inpGetValue, setValue] = useState('');   //   значение после первого запроса



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
            setChangeSessionForSubmit(true)
            // Данные для отправки на сервер
            const data = {
                llm_session_title,
                llm_session_id,
                valueChatGigachat
            };
            // Отправка данных на сервер
            axios.post('/api/llm_session/new_query', data)
                .then(response => {
                    console.log('Server response:', response.data);
                    const messageGigachatTest = response.data.llm_responses[0];
                    const newMessageGigachat = {
                        datetime_query: messageGigachatTest.datetime_query,
                        datetime_response: messageGigachatTest.datetime_response,
                        id: messageGigachatTest.id,
                        model: messageGigachatTest.model,
                        query: valueChatGigachat,
                        response: messageGigachatTest.response,
                        session_id: messageGigachatTest.session_id,
                        task: messageGigachatTest.task,
                        user_score: messageGigachatTest.user_score
                    }
                    setSessionChatGigachat([...sessionChatGigachat, newMessageGigachat])
                })
                .finally(() => {
                    setValue('');
                    setValueChatGigachat('');
                    setChangeSessionForSubmit(false);
                })
                .catch(error => {
                    console.error('There was an error sending the data!', error);
                });
        };

        if (changeSessionForSubmit === true) {
            submitFirstChat();
        }
        setValue('');
        setValueChatGigachat('');
        console.log(changeSessionForSubmit)
        console.log(sessionChatGpt)
    }, [changeSessionForSubmit]);    //  отправка запроса на ответ от чата gigachat

    useEffect(() => {
        const submitFirstChat = (e) => {
            setChangeSessionForSubmitClaude(true);
            // Данные для отправки на сервер
            const data = {
                llm_session_title,
                llm_session_id,
                valueChatClaude
            };
            // Отправка данных на сервер
            axios.post('/api/llm_session/new_query', data)
                .then(response => {
                    console.log('Server response:', response.data);
                    const messageClaudeTest = response.data.llm_responses[0];
                    const newMessageClaude = {
                        datetime_query: messageClaudeTest.datetime_query,
                        datetime_response: messageClaudeTest.datetime_response,
                        id: messageClaudeTest.id,
                        model: messageClaudeTest.model,
                        query: valueChatClaude,
                        response: messageClaudeTest.response,
                        session_id: messageClaudeTest.session_id,
                        task: messageClaudeTest.task,
                        user_score: messageClaudeTest.user_score
                    }
                    setSessionChatClaude([...sessionChatClaude, newMessageClaude])
                })
                .finally(() => {
                    setValueChatClaude('');
                    setValue('');
                    setChangeSessionForSubmitClaude(false)
                })
                .catch(error => {
                    console.error('There was an error sending the data!', error);
                });
        };

        if (changeSessionForSubmitClaude === true) {
            submitFirstChat();
        }
        setValue('');
        setValueChatClaude('');
        console.log(changeSessionForSubmit)
        console.log(sessionChatGpt)
    }, [changeSessionForSubmitClaude]);    //  отправка запроса на ответ от чата claude

    useEffect(() => {
        const submitFirstChat = (e) => {
            setChangeSessionForSubmitGpt(true)
            // Данные для отправки на сервер
            const data = {
                llm_session_title,
                llm_session_id,
                valueChatGpt
            };
            // Отправка данных на сервер
            axios.post('/api/llm_session/new_query', data)
                .then(response => {
                    console.log('Server response:', response.data);
                    const messageGptTest = response.data.llm_responses[0];
                    const newMessageGpt = {
                        datetime_query: messageGptTest.datetime_query,
                        datetime_response: messageGptTest.datetime_response,
                        id: messageGptTest.id,
                        model: messageGptTest.model,
                        query: valueChatGpt,
                        response: messageGptTest.response,
                        session_id: messageGptTest.session_id,
                        task: messageGptTest.task,
                        user_score: messageGptTest.user_score
                    }
                    setSessionChatGpt([...sessionChatGpt, newMessageGpt])
                })
                .finally(() => {
                    setValue('');
                    setValueChatGpt('');
                    setChangeSessionForSubmitGpt(false)
                })
                .catch(error => {
                    console.error('There was an error sending the data!', error);
                });
        };

        if (changeSessionForSubmitGpt === true) {
            submitFirstChat();
        }
        setValue('');
        setValueChatGpt('');
        console.log(changeSessionForSubmit)
        console.log(sessionChatGpt)
    }, [changeSessionForSubmitGpt]);    //  отправка запроса на ответ от чата gpt



    return (
        <div>
            <Sidebar
                changeSessionForSubmitAll={changeSessionForSubmitAll}
                openTheeWindowNewSession={openTheeWindowNewSession}
                setOpenTheeWindowNewSession={setOpenTheeWindowNewSession}  //  при клике на сессию закрывать нижний дубль
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
                setOpenTheeWindowNewSession={setOpenTheeWindowNewSession}    ///    для открытия 3 окон при отправке запроса с новой сессии
                openTheeWindowNewSession={openTheeWindowNewSession}   ///    для открытия 3 окон при отправке запроса с новой сессии
                changeSessionForSubmitAll={changeSessionForSubmitAll}    //   отслеживаем изменилось ли значение при отправке c главной
                setChangeSessionForSubmitAll={setChangeSessionForSubmitAll}
                changeSessionForSubmitClaude={changeSessionForSubmitClaude}   //   отслеживаем изменилось ли значение при отправке в claude
                setChangeSessionForSubmitClaude={setChangeSessionForSubmitClaude}
                changeSessionForSubmitGpt={changeSessionForSubmitGpt}   //   отслеживаем изменилось ли значение при отправке в gpt
                setChangeSessionForSubmitGpt={setChangeSessionForSubmitGpt}
                changeSessionForSubmit={changeSessionForSubmit}    //   отслеживаем изменилось ли значение при отправке в gigachat
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