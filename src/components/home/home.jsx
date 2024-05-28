import React, {useState} from 'react';
import Sidebar from "../sidebar/sidebar";
import MainSectionForm from "../mainSectionForm/mainSectionForm";

const Home = (props) => {



    const [llm_session_title, setLimSessionTitle] = useState('');   //   название сессии
    const [llm_session_id, setLimSessionId] = useState('');   //  id session


    const [llmSessionResponcesGPT, setLlmSessionResponcesGPT] = useState([]);   //   сообщения с чатом gpt


    return (
        <div>
            <Sidebar
                llmSessionResponcesGPT={llmSessionResponcesGPT} //   сообщения с чатом gpt
                setLlmSessionResponcesGPT={setLlmSessionResponcesGPT}
                session={props.session}   // все сессии
                llm_session_title={llm_session_title}  //   название сессии
                setLimSessionTitle={setLimSessionTitle}
                llm_session_id={llm_session_id}  //  id session
                setLimSessionId={setLimSessionId}
            />
            <MainSectionForm
                llmSessionResponcesGPT={llmSessionResponcesGPT}  //   сообщения с чатом gpt
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