import React, {useEffect, useRef} from 'react';
import iconUser from "../images/imgIcon/user_circle.png";
import iconTriz from "../images/imgIcon/triz_logo_big_blue.png";
import './colChatsClaude.css';

const ColChatsClaude = (props) => {





    const bottom = useRef(null)
    const scrollToTop = () => {  //  скрол дилаога вниз
        bottom.current.scrollIntoView({ block: "end" })
    }

    useEffect(() => {  //  скрол дилаога вниз  +   добавить к нужному диву реф
        scrollToTop()
    }, [props.sessionChatClaude]);

    return (
        <div className="threeColChats">
            <div className="nameChats">
                <h4>Claude</h4>
            </div>
            <div className="AllMesages">
                <div className="messages" ref={bottom}>
                    {
                        props.sessionChatClaude.map(el => (
                            <div key={el.id}>
                                <div className="question">
                                    <div className="avatar">
                                        <div className="iconAvatar">
                                            <img src={iconUser} alt=""/>
                                        </div>
                                        <div className="name">
                                            <h5>Ваш запрос:</h5>
                                        </div>
                                    </div>
                                    <div className="zapros">
                                        <p>{el.query}</p>
                                    </div>
                                </div>
                                <div className="answer">
                                    <div className="avatar">
                                        <div className="iconAvatar">
                                            <img src={iconTriz} alt=""/>
                                        </div>
                                        <div className="name">
                                            <h5>Ответ Claude:</h5>
                                        </div>
                                    </div>
                                    <div className="zapros">
                                        <p>{el.response}</p>
                                    </div>
                                    <div className="allBtn d-flex align-items-start">
                                        <a href="#!" type="button" className="btnLike like btn btn-sm">
                                            <svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32"
                                                 version="1.1"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19.017 31.992c-9.088 0-9.158-0.377-10.284-1.224-0.597-0.449-1.723-0.76-5.838-1.028-0.298-0.020-0.583-0.134-0.773-0.365-0.087-0.107-2.143-3.105-2.143-7.907 0-4.732 1.472-6.89 1.534-6.99 0.182-0.293 0.503-0.47 0.847-0.47 3.378 0 8.062-4.313 11.21-11.841 0.544-1.302 0.657-2.159 2.657-2.159 1.137 0 2.413 0.815 3.042 1.86 1.291 2.135 0.636 6.721 0.029 9.171 2.063-0.017 5.796-0.045 7.572-0.045 2.471 0 4.107 1.473 4.156 3.627 0.017 0.711-0.077 1.619-0.282 2.089 0.544 0.543 1.245 1.36 1.276 2.414 0.038 1.36-0.852 2.395-1.421 2.989 0.131 0.395 0.391 0.92 0.366 1.547-0.063 1.542-1.253 2.535-1.994 3.054 0.061 0.422 0.11 1.218-0.026 1.834-0.535 2.457-4.137 3.443-9.928 3.443zM3.426 27.712c3.584 0.297 5.5 0.698 6.51 1.459 0.782 0.589 0.662 0.822 9.081 0.822 2.568 0 7.59-0.107 7.976-1.87 0.153-0.705-0.59-1.398-0.593-1.403-0.203-0.501 0.023-1.089 0.518-1.305 0.008-0.004 2.005-0.719 2.050-1.835 0.030-0.713-0.46-1.142-0.471-1.16-0.291-0.452-0.185-1.072 0.257-1.38 0.005-0.004 1.299-0.788 1.267-1.857-0.024-0.849-1.143-1.447-1.177-1.466-0.25-0.143-0.432-0.39-0.489-0.674-0.056-0.282 0.007-0.579 0.183-0.808 0 0 0.509-0.808 0.49-1.566-0.037-1.623-1.782-1.674-2.156-1.674-2.523 0-9.001 0.025-9.001 0.025-0.349 0.002-0.652-0.164-0.84-0.443s-0.201-0.627-0.092-0.944c0.977-2.813 1.523-7.228 0.616-8.736-0.267-0.445-0.328-0.889-1.328-0.889-0.139 0-0.468 0.11-0.812 0.929-3.341 7.995-8.332 12.62-12.421 13.037-0.353 0.804-1.016 2.47-1.016 5.493 0 3.085 0.977 5.473 1.447 6.245z"></path>
                                            </svg>
                                        </a>
                                        <a href="#!" type="button" className="btnLike dislike btn btn-sm">
                                            <svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32"
                                                 version="1.1"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.982 0.007c9.088 0 9.159 0.377 10.284 1.225 0.597 0.449 1.723 0.76 5.838 1.028 0.299 0.019 0.583 0.134 0.773 0.365 0.087 0.107 2.143 3.105 2.143 7.907 0 4.732-1.471 6.89-1.534 6.991-0.183 0.292-0.503 0.469-0.848 0.469-3.378 0-8.062 4.313-11.211 11.841-0.544 1.302-0.657 2.158-2.657 2.158-1.137 0-2.412-0.814-3.043-1.86-1.291-2.135-0.636-6.721-0.028-9.171-2.063 0.017-5.796 0.045-7.572 0.045-2.471 0-4.106-1.474-4.157-3.628-0.016-0.711 0.077-1.62 0.283-2.088-0.543-0.543-1.245-1.361-1.276-2.415-0.038-1.36 0.852-2.395 1.42-2.989-0.13-0.396-0.391-0.92-0.366-1.547 0.063-1.542 1.253-2.536 1.995-3.054-0.061-0.42-0.109-1.217 0.026-1.832 0.535-2.457 4.138-3.445 9.928-3.445zM28.575 4.289c-3.584-0.296-5.5-0.698-6.51-1.459-0.782-0.588-0.661-0.822-9.082-0.822-2.568 0-7.59 0.107-7.976 1.869-0.154 0.705 0.59 1.398 0.593 1.403 0.203 0.502-0.024 1.089-0.518 1.305-0.008 0.004-2.004 0.72-2.050 1.836-0.030 0.713 0.46 1.142 0.471 1.159 0.291 0.452 0.184 1.072-0.257 1.38-0.005 0.004-1.299 0.788-1.267 1.857 0.025 0.848 1.143 1.447 1.177 1.466 0.25 0.143 0.432 0.39 0.489 0.674 0.057 0.282-0.007 0.579-0.182 0.807 0 0-0.509 0.808-0.49 1.566 0.037 1.623 1.782 1.674 2.156 1.674 2.522 0 9.001-0.026 9.001-0.026 0.35-0.001 0.652 0.164 0.839 0.444s0.202 0.627 0.091 0.945c-0.976 2.814-1.522 7.227-0.616 8.735 0.267 0.445 0.328 0.889 1.328 0.889 0.139 0 0.468-0.11 0.812-0.93 3.343-7.994 8.334-12.619 12.423-13.036 0.352-0.804 1.015-2.47 1.015-5.493-0.001-3.085-0.979-5.472-1.449-6.245z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {
                        props.changeSessionForSubmitClaude === true &&
                        <span className="loader2"></span>
                    }
                </div>
            </div>
            <form action="" id="formChatClaude">
                <div className="input-area90">
                    <input type="text" value={props.valueChatClaude}
                           disabled={props.changeSessionForSubmitClaude}
                           placeholder="Ваш запрос в Claude"
                           onChange={(e) => {
                               props.setValueChatClaude(e.target.value);
                               console.log(props.inpGetValue)
                           }}
                    />
                    <input type="submit"
                           disabled={props.changeSessionForSubmitClaude}
                           value=''
                           onClick={(e) => {
                               const formChat = e.target.closest('#formChatClaude');
                               formChat.addEventListener('submit', e => {
                                   e.preventDefault();
                                   console.log(props.sessionChatClaude);
                                   console.log(props.valueChatClaude)
                                   props.setChangeSessionForSubmitClaude(true)    //   отслеживаем изменилось ли значение при отправке
                                   console.log(props.changeSessionForSubmitClaude)
                               })
                           }}
                    />
                </div>
            </form>
        </div>
    );
};

export default ColChatsClaude;