import React, {useState} from 'react';
import Sidebar from "../sidebar/sidebar";
import MainSectionForm from "../mainSectionForm/mainSectionForm";

const Home = (props) => {



    const [llm_session_title, setLimSessionTitle] = useState('');   //   название сессии
    const [llm_session_id, setLimSessionId] = useState('');   //  id session

    const [valueChatGpt, setValueChatGpt] = useState('')  //  запрос в чат гпт
    const [sessionChatGpt, setSessionChatGpt] = useState([])  //  все запросы в чат gpt


    const [valueChatClaude, setValueChatClaude] = useState('')  //  запрос в чат Claude
    const [sessionChatClaude, setSessionChatClaude] = useState([])  //  все запросы в чат Claude



    const [valueChatGigachat, setValueChatGigachat] = useState('')  //  запрос в чат Gigachat
    const [sessionChatGigachat, setSessionChatGigachat] = useState([])  //  все запросы в чат Gigachat




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
            />
        </div>
    );
};

export default Home;