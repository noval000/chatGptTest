import React, {useState} from 'react';
import ColChatsGpt from "../colChatsGpt/colChatsGpt";
import './mainSectionForm.css';
import FirstChat from "../firstChat/firstChat";
import ColChatsClaude from "../colChatsClaude/colChatsClaude";
import ColChatsGigachat from "../colChatsGigachat/colChatsGigachat";
import axios from "axios";

const MainSectionForm = (props) => {




    const [inpGetValue, setValue] = useState('')   //   значение после первого запроса
    const [valueChatGpt, setValueChatGpt] = useState('')  //  запрос в чат гпт
    const [sessionChatGpt, setSessionChatGpt] = useState([])  //  все запросы в чат gpt

    const [valueChatClaude, setValueChatClaude] = useState('')  //  запрос в чат Claude
    const [sessionChatClaude, setSessionChatClaude] = useState([])  //  все запросы в чат Claude


    const [valueChatGigachat, setValueChatGigachat] = useState('')  //  запрос в чат Gigachat
    const [sessionChatGigachat, setSessionChatGigachat] = useState([])  //  все запросы в чат Gigachat


    const submitFirstChat = (e) => {
        e.preventDefault();
        // Данные для отправки на сервер
        const data = {
            inpGetValue
        };
        // Отправка данных на сервер
        axios.post('http://localhost:5000/api/data', data)
            .then(response => {
                console.log('Server response:', response.data);
            })
            .catch(error => {
                console.error('There was an error sending the data!', error);
            });
    };
    const submitChatGpt = (e) => {
        e.preventDefault();

        axios.get('http://localhost:5000/api')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    };



    const submitChatClaude = (e) => {
        e.preventDefault();



    };

    const handleSendMessage = (e) => {
        e.preventDefault();


    };



    return (
        <>
            {
                props.llm_session_title === '' &&
                props.llm_session_id === '' &&

                <FirstChat
                    firstname={props.firstname}   //   имя для приветствия
                    setSession={props.setSession}
                    session={props.session}
                    inpGetValue={inpGetValue}  //   значение после первого запроса
                    setValue={setValue}
                    submitFirstChat={submitFirstChat}
                    handleSendMessage={handleSendMessage}
                />
            }

            {
                props.llm_session_title !== '' &&
                props.llm_session_id !== '' &&
                <div className="chat-container">
                    <ColChatsGpt
                        submitChatGpt={submitChatGpt}
                        session={props.session}    // все сессии
                        setSession={props.setSession}    // изменение сессий
                        sessionChatGpt={sessionChatGpt}   //  все сессии чата gpt
                        setSessionChatGpt={setSessionChatGpt}
                        valueChatGpt={valueChatGpt} //  запрос в чат гпт
                        setValueChatGpt={setValueChatGpt}
                        inpGetValue={inpGetValue}  //   значение после первого запроса
                        setValue={setValue}
                    />
                    <ColChatsClaude
                        submitChatClaude={submitChatClaude}
                        session={props.session} // все сессии
                        sessionChatClaude={sessionChatClaude} //  все сессии чата Claude
                        setSessionChatClaude={setSessionChatClaude}
                        valueChatClaude={valueChatClaude} //  запрос в чат Claude
                        setValueChatClaude={setValueChatClaude}
                        inpGetValue={inpGetValue}  //   значение после первого запроса
                        setValue={setValue}
                    />
                    <ColChatsGigachat
                        session={props.session} // все сессии
                        sessionChatGigachat={sessionChatGigachat}   //  все сессии чата Gigachat
                        setSessionChatGigachat={setSessionChatGigachat}
                        valueChatGigachat={valueChatGigachat} //  запрос в чат Gigachat
                        setValueChatGigachat={setValueChatGigachat}
                        inpGetValue={inpGetValue}  //   значение после первого запроса
                        setValue={setValue}
                    />
                </div>
            }




        </>

    );
};

export default MainSectionForm;