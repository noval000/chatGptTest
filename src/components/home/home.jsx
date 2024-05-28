import React, {useState} from 'react';
import Sidebar from "../sidebar/sidebar";
import MainSectionForm from "../mainSectionForm/mainSectionForm";

const Home = (props) => {

    const [llm_session_title, setLimSessionTitle] = useState('');   //   название сессии
    const [llm_session_id, setLimSessionId] = useState('');   //  id session



    return (
        <div>
            <Sidebar
                llm_session_title={llm_session_title} //   название сессии
                setLimSessionTitle={setLimSessionTitle}
                llm_session_id={llm_session_id}   //  id session
                setLimSessionId={setLimSessionId}
                session={props.session}   // все сессии
            />
            <MainSectionForm
                firstname={props.firstname}  //   имя для приветствия
                session={props.session}    // все сессии
                setSession={props.setSession}    // изменение сессий
            />
        </div>
    );
};

export default Home;