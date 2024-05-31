import React from 'react';
import "./firstChat.css";
import trizLogo from "../images/imgIcon/triz_logo_big_blue.png";
import axios from "axios";

const FirstChat = (props) => {






    return (
        <div className="oneChatContainer">
            <div className="titleOneChatContainer">
                <img src={trizLogo} alt=""/>
                <h5>Здравствуйте, {props.firstname}. Введите ваш запрос</h5>
            </div>
            <div className="allBlockMain">
                <form action="">
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
                                   const form = e.target.closest('form');
                                   form.addEventListener('submit', e => {
                                       e.preventDefault();
                                       // props.setSession([props.inpGetValue, ...props.session])
                                       // props.setValue(props.session);
                                       console.log(props.inpGetValue, props.valueChatGpt, props.valueChatGigachat, props.valueChatClaude)
                                       // props.(props.inpGetValue);
                                       // props.submitFirstChat(e)
                                       props.setChangeSessionForSubmitAll(true);
                                       console.log(props.openTheeWindowNewSession);
                                       props.setOpenTheeWindowNewSession(true);
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