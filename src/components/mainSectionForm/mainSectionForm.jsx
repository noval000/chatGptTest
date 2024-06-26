import React, {useState} from 'react';
import ColChatsGpt from "../colChatsGpt/colChatsGpt";
import './mainSectionForm.css';
import FirstChat from "../firstChat/firstChat";
import ColChatsClaude from "../colChatsClaude/colChatsClaude";
import ColChatsGigachat from "../colChatsGigachat/colChatsGigachat";

const MainSectionForm = (props) => {


    const [hideFirstSearch, setHideFirstSearch] = useState(false);  //   загрузка после отправки первой сессии


    return (
        <>
            {
                props.llm_session_title === '' &&              //  если у сессии нет тайтла открывается пустой чат   (обычно при логине)
                props.llm_session_id === '' &&
                props.openTheeWindowNewSession === false &&
                <FirstChat
                    setHideFirstSearch={setHideFirstSearch}  //   загрузка после отправки первой сессии
                    hideFirstSearch={hideFirstSearch}
                    hideSidebar={props.hideSidebar}
                    setHideSidebar={props.setHideSidebar}   //   скрытие меню
                    setLimSessionId={props.setLimSessionId}
                    llm_session_title={props.llm_session_title}  //   название сессии
                    llm_session_id={props.llm_session_id}  //  id session
                    sessionChatGigachat={props.sessionChatGigachat}  //  все запросы в чат Gigachat
                    setSessionChatGigachat={props.setSessionChatGigachat}
                    sessionChatClaude={props.sessionChatClaude}      //  все запросы в чат Claude
                    setSessionChatClaude={props.setSessionChatClaude}
                    setSessionChatGpt={props.setSessionChatGpt}
                    sessionChatGpt={props.sessionChatGpt}   //  все запросы в чат Gpt
                    firstname={props.firstname}   //   имя для приветствия
                    setSession={props.setSession}
                    session={props.session}
                    inpGetValue={props.inpGetValue}  //   значение после первого запроса
                    setValue={props.setValue}
                    submitFirstChat={props.submitFirstChat}     //  отправка запроса на ответ
                    setOpenTheeWindowNewSession={props.setOpenTheeWindowNewSession}    ///    для открытия 3 окон при отправке запроса с новой сессии
                    openTheeWindowNewSession={props.openTheeWindowNewSession}   ///    для открытия 3 окон при отправке запроса с новой сессии
                    changeSessionForSubmitAll={props.changeSessionForSubmitAll}    //   отслеживаем изменилось ли значение при отправке c главной
                    setChangeSessionForSubmitAll={props.setChangeSessionForSubmitAll}
                />
            }
            {
                props.llm_session_title === 'none' &&      //  если у сессии тайтл none открывается пустой чат   (при нажатии на новую сессию)
                props.llm_session_id === 'none' &&
                props.openTheeWindowNewSession === false &&
                <FirstChat
                    setHideFirstSearch={setHideFirstSearch}  //   загрузка после отправки первой сессии
                    hideFirstSearch={hideFirstSearch}
                    hideSidebar={props.hideSidebar}
                    setHideSidebar={props.setHideSidebar}   //   скрытие меню
                    setLimSessionId={props.setLimSessionId}
                    llm_session_title={props.llm_session_title}  //   название сессии
                    llm_session_id={props.llm_session_id}  //  id session
                    sessionChatGigachat={props.sessionChatGigachat}  //  все запросы в чат Gigachat
                    setSessionChatGigachat={props.setSessionChatGigachat}
                    sessionChatClaude={props.sessionChatClaude}      //  все запросы в чат Claude
                    setSessionChatClaude={props.setSessionChatClaude}
                    setSessionChatGpt={props.setSessionChatGpt}
                    sessionChatGpt={props.sessionChatGpt}   //  все запросы в чат Gpt
                    changeSessionForSubmitAll={props.changeSessionForSubmitAll}    //   отслеживаем изменилось ли значение при отправке c главной
                    setChangeSessionForSubmitAll={props.setChangeSessionForSubmitAll}
                    firstname={props.firstname}   //   имя для приветствия
                    setSession={props.setSession}
                    session={props.session}
                    inpGetValue={props.inpGetValue}  //   значение после первого запроса
                    setValue={props.setValue}
                    submitFirstChat={props.submitFirstChat}     //  отправка запроса на ответ
                    valueChatGigachat={props.valueChatGigachat}    //  запрос в чат Gigachat
                    setValueChatGigachat={props.setValueChatGigachat}
                    valueChatClaude={props.valueChatClaude}      //  запрос в чат Claude
                    setValueChatClaude={props.setValueChatClaude}
                    valueChatGpt={props.valueChatGpt}    //  запрос в чат гпт
                    setValueChatGpt={props.setValueChatGpt}
                    setOpenTheeWindowNewSession={props.setOpenTheeWindowNewSession}    ///    для открытия 3 окон при отправке запроса с новой сессии
                    openTheeWindowNewSession={props.openTheeWindowNewSession}   ///    для открытия 3 окон при отправке запроса с новой сессии
                />
            }

            {
                props.llm_session_title !== '' &&      //  если у сессии есть тайтл открывается история чата   (при нажатии на сессию)
                props.llm_session_id !== '' &&
                props.llm_session_title !== 'none' &&
                props.llm_session_id !== 'none' &&
                props.openTheeWindowNewSession === false &&
                <div className={!props.hideSidebar ? 'chat-container showMin' : 'chat-container showAll'}>
                    <ColChatsGpt
                        setChangeSessionForSubmitAll={props.setChangeSessionForSubmitAll}
                        session={props.session}    // все сессии
                        setSession={props.setSession}    // изменение сессий
                        sessionChatGpt={props.sessionChatGpt}   //  все сессии чата gpt
                        setSessionChatGpt={props.setSessionChatGpt}
                        inpGetValue={props.inpGetValue}  //   значение после первого запроса
                        setValue={props.setValue}
                        submitFirstChat={props.submitFirstChat}     //  отправка запроса на ответ
                        valueChatGigachat={props.valueChatGigachat}    //  запрос в чат Gigachat
                        setValueChatGigachat={props.setValueChatGigachat}
                        valueChatClaude={props.valueChatClaude}      //  запрос в чат Claude
                        setValueChatClaude={props.setValueChatClaude}
                        valueChatGpt={props.valueChatGpt}    //  запрос в чат гпт
                        setValueChatGpt={props.setValueChatGpt}
                        changeSessionForSubmitGpt={props.changeSessionForSubmitGpt}   //   отслеживаем изменилось ли значение при отправке в gpt
                        setChangeSessionForSubmitGpt={props.setChangeSessionForSubmitGpt}
                    />
                    <ColChatsClaude
                        session={props.session} // все сессии
                        sessionChatClaude={props.sessionChatClaude} //  все сессии чата Claude
                        setSessionChatClaude={props.setSessionChatClaude}
                        valueChatClaude={props.valueChatClaude} //  запрос в чат Claude
                        setValueChatClaude={props.setValueChatClaude}
                        inpGetValue={props.inpGetValue}  //   значение после первого запроса
                        setValue={props.setValue}
                        submitFirstChat={props.submitFirstChat}     //  отправка запроса на ответ
                        valueChatGigachat={props.valueChatGigachat}    //  запрос в чат Gigachat
                        setValueChatGigachat={props.setValueChatGigachat}
                        valueChatGpt={props.valueChatGpt}    //  запрос в чат гпт
                        setValueChatGpt={props.setValueChatGpt}
                        changeSessionForSubmitClaude={props.changeSessionForSubmitClaude}   //   отслеживаем изменилось ли значение при отправке в claude
                        setChangeSessionForSubmitClaude={props.setChangeSessionForSubmitClaude}
                    />
                    <ColChatsGigachat
                        session={props.session} // все сессии
                        sessionChatGigachat={props.sessionChatGigachat}   //  все сессии чата Gigachat
                        setSessionChatGigachat={props.setSessionChatGigachat}
                        valueChatGigachat={props.valueChatGigachat} //  запрос в чат Gigachat
                        setValueChatGigachat={props.setValueChatGigachat}
                        inpGetValue={props.inpGetValue}  //   значение после первого запроса
                        setValue={props.setValue}
                        submitFirstChat={props.submitFirstChat}     //  отправка запроса на ответ
                        valueChatClaude={props.valueChatClaude}      //  запрос в чат Claude
                        setValueChatClaude={props.setValueChatClaude}
                        valueChatGpt={props.valueChatGpt}    //  запрос в чат гпт
                        setValueChatGpt={props.setValueChatGpt}
                        setChangeSessionForSubmit={props.setChangeSessionForSubmit}  //   отслеживаем изменилось ли значение при отправке в gpt
                        changeSessionForSubmit={props.changeSessionForSubmit}
                    />
                </div>
            }




            {
                props.openTheeWindowNewSession === true &&     //  при отправке нового запроса появляются эти колонки
                <div className={!props.hideSidebar ? 'chat-container showMin' : 'chat-container showAll'}>
                    {console.log(props.session)}
                    <ColChatsGpt
                        setChangeSessionForSubmitAll={props.setChangeSessionForSubmitAll}
                        session={props.session}    // все сессии
                        setSession={props.setSession}    // изменение сессий
                        sessionChatGpt={props.sessionChatGpt}   //  все сессии чата gpt
                        setSessionChatGpt={props.setSessionChatGpt}
                        inpGetValue={props.inpGetValue}  //   значение после первого запроса
                        setValue={props.setValue}
                        submitFirstChat={props.submitFirstChat}     //  отправка запроса на ответ
                        valueChatGigachat={props.valueChatGigachat}    //  запрос в чат Gigachat
                        setValueChatGigachat={props.setValueChatGigachat}
                        valueChatClaude={props.valueChatClaude}      //  запрос в чат Claude
                        setValueChatClaude={props.setValueChatClaude}
                        valueChatGpt={props.valueChatGpt}    //  запрос в чат гпт
                        setValueChatGpt={props.setValueChatGpt}
                        changeSessionForSubmitGpt={props.changeSessionForSubmitGpt}   //   отслеживаем изменилось ли значение при отправке в gpt
                        setChangeSessionForSubmitGpt={props.setChangeSessionForSubmitGpt}
                    />
                    <ColChatsClaude
                        session={props.session} // все сессии
                        sessionChatClaude={props.sessionChatClaude} //  все сессии чата Claude
                        setSessionChatClaude={props.setSessionChatClaude}
                        valueChatClaude={props.valueChatClaude} //  запрос в чат Claude
                        setValueChatClaude={props.setValueChatClaude}
                        inpGetValue={props.inpGetValue}  //   значение после первого запроса
                        setValue={props.setValue}
                        submitFirstChat={props.submitFirstChat}     //  отправка запроса на ответ
                        valueChatGigachat={props.valueChatGigachat}    //  запрос в чат Gigachat
                        setValueChatGigachat={props.setValueChatGigachat}
                        valueChatGpt={props.valueChatGpt}    //  запрос в чат гпт
                        setValueChatGpt={props.setValueChatGpt}
                        changeSessionForSubmitClaude={props.changeSessionForSubmitClaude}   //   отслеживаем изменилось ли значение при отправке в claude
                        setChangeSessionForSubmitClaude={props.setChangeSessionForSubmitClaude}
                    />
                    <ColChatsGigachat
                        session={props.session} // все сессии
                        sessionChatGigachat={props.sessionChatGigachat}   //  все сессии чата Gigachat
                        setSessionChatGigachat={props.setSessionChatGigachat}
                        valueChatGigachat={props.valueChatGigachat} //  запрос в чат Gigachat
                        setValueChatGigachat={props.setValueChatGigachat}
                        inpGetValue={props.inpGetValue}  //   значение после первого запроса
                        setValue={props.setValue}
                        submitFirstChat={props.submitFirstChat}     //  отправка запроса на ответ
                        valueChatClaude={props.valueChatClaude}      //  запрос в чат Claude
                        setValueChatClaude={props.setValueChatClaude}
                        valueChatGpt={props.valueChatGpt}    //  запрос в чат гпт
                        setValueChatGpt={props.setValueChatGpt}
                        setChangeSessionForSubmit={props.setChangeSessionForSubmit}  //   отслеживаем изменилось ли значение при отправке в gpt
                        changeSessionForSubmit={props.changeSessionForSubmit}
                    />
                </div>
            }


        </>

    );
};

export default MainSectionForm;