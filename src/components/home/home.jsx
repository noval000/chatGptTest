import React, {useState} from 'react';
import Sidebar from "../sidebar/sidebar";
import MainSectionForm from "../mainSectionForm/mainSectionForm";
import axios from "axios";

const Home = (props) => {



    const [llm_session_title, setLimSessionTitle] = useState('');   //   название сессии
    const [llm_session_id, setLimSessionId] = useState('');   //  id session

    const [valueChatGpt, setValueChatGpt] = useState('')  //  запрос в чат гпт
    const [sessionChatGpt, setSessionChatGpt] = useState([])  //  все запросы в чат gpt


    const submitSession = async (e) => {
        e.preventDefault();


        // данные для отправки на сервер

        const data = {
            llm_session_title,
            llm_session_id
        };

        try {

            // Отправка данных на сервер
            const response = await axios.post('/api/llm_session', data, {
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                withCredentials: true,
            });
            setSessionChatGpt(response.data.llm_session_responses.filter(el => el[8] === 'chatgpt'))
            console.log(sessionChatGpt)
            console.log('server responce' , response.data);

        } catch (error) {
            console.error('error' , error)
        }


    }    //   отправка запроса при нажатии на название сессии



    return (
        <div>
            <Sidebar
                submitSession={submitSession}  //   отправка запроса при нажатии на название сессии
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
                sessionChatGpt={sessionChatGpt}    //  все запросы в чат gpt
                llm_session_title={llm_session_title}  //   название сессии
                setLimSessionTitle={setLimSessionTitle}
                llm_session_id={llm_session_id}  //  id session
                setLimSessionId={setLimSessionId}
                firstname={props.firstname}  //   имя для приветствия
                session={props.session}    // все сессии
                setSession={props.setSession}    // изменение сессий
            />
        </div>
    );
};

export default Home;