import React, {useEffect, useState} from 'react';
import './sidebar.css';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import axios from "axios";
import MenuSidebar from "../menuSidebar/menuSidebar";



const Sidebar = (props) => {





    let llm_session_title = props.llm_session_title;
    let llm_session_id = props.llm_session_id;




    const [open, setOpen] = useState(false);


    const closeModal = () => setOpen(false);




    useEffect(() => {
        const submitSession = async (e) => {
                // e.preventDefault();


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
                    console.log(response.data)
                    props.setSessionChatGpt(response.data.llm_responses.filter(el => el.model === 'chatgpt'))
                    props.setSessionChatClaude(response.data.llm_responses.filter(el => el.model === 'claude'))
                    props.setSessionChatGigachat(response.data.llm_responses.filter(el => el.model === 'gigachat'))
                    console.log(props.sessionChatGpt)

                    console.log('server responce' , response.data);

                } catch (error) {
                    console.error('error' , error)
                }

            }
        submitSession();
    }, [llm_session_title, llm_session_id, props.llm_session_title, props.llm_session_id]);     //   отправка запроса при нажатии на название сессии


   const [showTextHideMenu, setShowTextHideMenu] = useState(false);      //    всплывашка скрыть меню
   const [showTextHideMenu2, setShowTextHideMenu2] = useState(false);    //    всплывашка показать меню



    return (
        <div className="flexAndCenter">
            <div className="btnShowMenuZ">
                <button className="btnHideSidebarNow"
                        onClick={() => {
                            props.setHideSidebar(!props.hideSidebar)
                        }}
                        onMouseEnter={() => {
                            setShowTextHideMenu2(!showTextHideMenu2)
                        }}
                        onMouseLeave={() => {
                            setShowTextHideMenu2(!showTextHideMenu2)
                        }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                         className="icon-xl-heavy">
                        <path fill="currentColor" fillRule="evenodd"
                              d="M8.857 3h6.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961.058.708.058 1.582.058 2.666v3.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C17.1 21 16.227 21 15.143 21H8.857c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C1.5 15.6 1.5 14.727 1.5 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 4.23 3.544c.592-.302 1.233-.428 1.961-.487C6.9 3 7.773 3 8.857 3M6.354 5.051c-.605.05-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216-.05.617-.051 1.41-.051 2.546v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h.6V5h-.6c-1.137 0-1.929 0-2.546.051M11.5 5v14h3.6c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.134-.263.226-.611.276-1.216.05-.617.051-1.41.051-2.546v-3.2c0-1.137 0-1.929-.051-2.546-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.311-1.311c-.263-.134-.611-.226-1.216-.276C17.029 5.001 16.236 5 15.1 5zM5 8.5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M5 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"
                              clipRule="evenodd">
                        </path>
                    </svg>
                </button>
                <div
                    className={showTextHideMenu2 ? 'showTextShowMenu ' : 'blockTextShowMenu'}>
                    Показать меню
                </div>
            </div>
            <section
                className={!props.hideSidebar ? 'side show' : 'side hide'}>
                <div className="blockShowMenu">
                    <button className="btnShowMenu"
                            onClick={(e) => {
                                props.setHideSidebar(!props.hideSidebar)
                            }}
                            onMouseEnter={() => {
                                setShowTextHideMenu(!showTextHideMenu)
                            }}
                            onMouseLeave={() => {
                                setShowTextHideMenu(!showTextHideMenu)
                            }}
                    >

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                             className="icon-xl-heavy">
                            <path fill="currentColor" fillRule="evenodd"
                                  d="M8.857 3h6.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961.058.708.058 1.582.058 2.666v3.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C17.1 21 16.227 21 15.143 21H8.857c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C1.5 15.6 1.5 14.727 1.5 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 4.23 3.544c.592-.302 1.233-.428 1.961-.487C6.9 3 7.773 3 8.857 3M6.354 5.051c-.605.05-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216-.05.617-.051 1.41-.051 2.546v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h.6V5h-.6c-1.137 0-1.929 0-2.546.051M11.5 5v14h3.6c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.134-.263.226-.611.276-1.216.05-.617.051-1.41.051-2.546v-3.2c0-1.137 0-1.929-.051-2.546-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.311-1.311c-.263-.134-.611-.226-1.216-.276C17.029 5.001 16.236 5 15.1 5zM5 8.5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M5 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"
                                  clipRule="evenodd">
                            </path>
                        </svg>
                    </button>
                    <span className="signIn"
                          onClick={(e) => {
                              props.setLimSessionTitle('none');
                              props.setLimSessionId('none');
                              console.log(llm_session_title)
                              console.log(llm_session_id)
                              if (props.openTheeWindowNewSession === true) {
                                  props.setOpenTheeWindowNewSession(false);
                              }
                              props.setPageProfile(false)   //    скрываем страницу профиля
                              props.setPageArchive(false)   //    скрываем страницу архива
                          }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             viewBox="0 0 24 24" className="icon-xl-heavy">
                            <path
                                d="M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4"></path>
                        </svg>
                    </span>
                    <div
                        className={showTextHideMenu ? 'showText ' : 'blockTextHideMenu'}>
                        Скрыть меню
                    </div>
                </div>
                <a href='#!' className="nameSidebar"
                   onClick={(e) => {
                       props.setLimSessionTitle('none');
                       props.setLimSessionId('none');
                       console.log(llm_session_title)
                       console.log(llm_session_id)
                       if (props.openTheeWindowNewSession === true) {
                           props.setOpenTheeWindowNewSession(false);
                       }
                       props.setPageProfile(false)   //    скрываем страницу профиля
                   }}
                >
                    Помощник ТРИЗ
                </a>


                <div className="sessions">
                    {
                        props.session.length >= 1 &&
                        <div className="nameList">Предыдущие Сессии</div>
                    }
                    {
                        props.session.map(el => (
                            <div key={el.id} className='linkSession'
                            onMouseEnter={(e) => {
                                const showBtnChange = e.target.closest('.linkSession').children[1];    //   находим кнопку
                                showBtnChange.classList.add('showChange');   //  при наведении появляем ее
                            }}
                             onMouseLeave={(e) => {
                                 const showBtnChange = e.target.closest('.linkSession').children[1];
                                 showBtnChange.classList.remove('showChange');
                             }}>
                                <a href="#!"
                                   className='linkActive'
                                   onClick={(e) => {
                                       props.setPageProfile(false)   //    скрываем страницу профиля
                                       props.setPageArchive(false)   //    скрываем страницу архива
                                       const hoverLink = document.querySelectorAll('.linkSession');
                                       hoverLink.forEach(el => {
                                           el.addEventListener('click', e => {
                                               console.log('active')
                                               e.target.closest('.linkSession').classList.add('active');
                                                   console.log('kdddd');
                                               })
                                           })
                                           props.setLimSessionTitle(el.title);
                                           props.setLimSessionId(el.id);
                                           console.log(llm_session_title);
                                           console.log(llm_session_id);
                                           props.setOpenTheeWindowNewSession(false);
                                           // submitSession(e)
                                       }}
                                    >{el.title}</a>
                                    <button type="button"
                                            className='changeNameLink'
                                            onClick={(e) => {
                                                props.setLimSessionTitle(el.title);
                                                props.setLimSessionId(el.id);
                                                setOpen(o => !o)
                                    }}>
                                        <svg fill="#000000" height="15px" width="15px" version="1.1" id="Capa_1"
                                             xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 32.055 32.055">
                                            <g>
                                                <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
                                                    C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
                                                    s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
                                                    c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"/>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            )
                        )
                    }
                </div>

                <MenuSidebar
                    pageArchive={props.pageArchive}       //     открытие страницы архива
                    setPageArchive={props.setPageArchive}
                    pageProfile={props.pageProfile}   //     открытие страницы профиля
                    setPageProfile={props.setPageProfile}
                    setArchiveSession={props.setArchiveSession}
                    archiveSession={props.archiveSession}   //   все архивные сессии
                    setFirstName={props.setFirstName}
                    firstname={props.firstname}  //   имя для приветствия
                    setOrganizationLogin={props.setOrganizationLogin}  //  организация пользователя
                    organizationLogin={props.organizationLogin}
                    patronymicLogin={props.patronymicLogin}     //  отчество
                    setPatronymicLogin={props.setPatronymicLogin}
                    setLastNameLogin={props.setLastNameLogin}   //  фамилия пользователя
                    lastname={props.lastname}
                    mailLogin={props.mailLogin}   //  маил пользователя
                    setMailLogin={props.setMailLogin}
                    userId={props.userId}   //  id пользователя
                />

            </section>



            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="modal">
                    <a href="#!" className="closeModal" onClick={closeModal}>
                        &times;
                    </a>
                    <div className="headerModal">

                    </div>
                    <form action="" id="changeName">
                        <div className="changeNameSession">
                            Введите новое название сессии
                        </div>
                        <input type="text" className="changeName" value={llm_session_title}
                               onChange={(e) => {
                                   llm_session_title = e.target.value
                                   console.log(llm_session_title)
                               }}
                        />
                        <input type="submit" onClick={(e) => {
                            const formChangeName = e.target.closest('#changeName');
                            formChangeName.addEventListener('submit', e => {
                                e.preventDefault();
                            })
                        }}/>
                        <div className="changeStatusSession">
                            <button>Убрать в архив</button>
                        </div>
                    </form>
                </div>
            </Popup>
        </div>

    );
};

export default Sidebar;