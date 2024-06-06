import React from 'react';
import Popup from "reactjs-popup";

const ModalProfile = (props) => {
    return (

        <Popup open={props.open} closeOnDocumentClick closeModalProfile={props.closeModalProfile}>
            <div className="modal profileModal">
                <div className="closeModal" onClick={() => {
                    props.setOpen(false)
                }}>
                    &times;
                </div>
                <div className="headerModal">
                    <div className="headerModalTitle">
                        <h4>Профиль</h4>
                    </div>
                    <button
                        className={props.btnChangeInfo ? 'noneBtnChange' : 'changeInfoBtn '}
                        onClick={() => {
                            props.setBtnChangeInfo(!props.btnChangeInfo);
                        }}
                    >
                        Изменить данные
                    </button>
                    <button className={props.btnChangeInfo ? 'changeInfoBtn' : 'noneBtnChange '}
                            onClick={() => {
                                props.setBtnChangeInfo(!props.btnChangeInfo);
                            }}
                    >
                        Сохранить данные
                    </button>
                    <div className="changeUserProfile">
                        <form action="" id="userProfile">
                            <div className="name">
                                <h4>Имя</h4>
                                <input type="text" className="firstname" value={props.firstname}
                                       disabled={!props.btnChangeInfo}
                                       onChange={(e) => {
                                           props.setFirstName(e.target.value);
                                       }}
                                />
                            </div>
                            <div className="lastname">
                                <h4>Фамилия</h4>
                                <input type="text" className="lastname" value={props.lastname}
                                       disabled={!props.btnChangeInfo}
                                       onChange={(e) => {
                                           props.setLastNameLogin(e.target.value);
                                       }}
                                />
                            </div>
                            <div className="patronymicLogin">
                                <h4>Отчество</h4>
                                <input type="text" className="patronymicLogin" value={props.patronymicLogin}
                                       disabled={!props.btnChangeInfo}
                                       onChange={(e) => {
                                           props.setPatronymicLogin(e.target.value)
                                       }}
                                />
                            </div>
                            <div className="organizationLogin">
                                <h4>Организация</h4>
                                <input type="text" className="organizationLogin" value={props.organizationLogin}
                                       disabled={!props.btnChangeInfo}
                                       onChange={(e) => {
                                           props.setOrganizationLogin(e.target.value)
                                       }}
                                />
                            </div>
                            <div className="mailLogin">
                                <h4>Маил</h4>
                                <input type="text" className="mailLogin" value={props.mailLogin}
                                       disabled={!props.btnChangeInfo}
                                       onChange={(e) => {
                                           props.setMailLogin(e.target.value)
                                       }}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Popup>
    );
};

export default ModalProfile;