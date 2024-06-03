import React, {useState} from 'react';
import Popup from "reactjs-popup";
import './menuSidebar.css';

const MenuSidebar = (props) => {



    const [btnChangeInfo, setBtnChangeInfo] = useState(false);

    const [profileModal, openProfileModal] = useState(false);

    // useEffect(() => {
    //     const id = props.userId;
    //     console.log(id)
    //     const submitModalProfile = (e) => {
    //         // Данные для отправки на сервер
    //         const data = {
    //             id
    //         };
    //         // Отправка данных на сервер
    //         axios.post('/api/profile', data)
    //             .then(response => {
    //                 console.log('Server response:', response.data);
    //             })
    //             .finally(() => {
    //                 openProfileModal(false);
    //             })
    //             .catch(error => {
    //                 console.error('There was an error sending the data!', error);
    //             });
    //     };
    //
    //     if (profileModal === true) {
    //         submitModalProfile();
    //     }
    // }, [profileModal]);    //  отправка запроса для отрисовки модалки профиля




    const [open, setOpen] = useState(false);
    const closeModalProfile = () => setOpen(false);


    return (
        <div className="menu">
            <button
                onClick={(e) => {
                    setOpen(!open);
                    openProfileModal(!profileModal)
                }}
            >Профиль
            </button>
            <button
                onClick={(e) => {
                    setOpen(!open);
                    openProfileModal(!profileModal)
                }}
            >Архив</button>

            <Popup open={open} closeOnDocumentClick onClose={closeModalProfile}>
                <div className="modal profileModal">
                    <div className="closeModal" onClick={closeModalProfile}>
                        &times;
                    </div>
                    <div className="headerModal">
                        <div className="headerModalTitle">
                            <h4>Профиль</h4>
                        </div>
                        <button
                            className={btnChangeInfo ? 'noneBtnChange' : 'changeInfoBtn '}
                                onClick={() => {
                                    setBtnChangeInfo(!btnChangeInfo);
                                }}
                        >
                            Изменить данные
                        </button>
                        <button className={btnChangeInfo ? 'changeInfoBtn' : 'noneBtnChange '}
                                onClick={() => {
                                    setBtnChangeInfo(!btnChangeInfo);
                                }}
                        >
                            Сохранить данные
                        </button>
                        <div className="changeUserProfile">
                            <form action="" id="userProfile">
                                <div className="name">
                                    <h4>Имя</h4>
                                    <input type="text" className="firstname" value={props.firstname}
                                           disabled={!btnChangeInfo}
                                           onChange={(e) => {
                                                props.setFirstName(e.target.value);
                                           }}
                                    />
                                </div>
                                <div className="lastname">
                                    <h4>Фамилия</h4>
                                    <input type="text" className="lastname" value={props.lastname}
                                           disabled={!btnChangeInfo}
                                           onChange={(e) => {
                                               props.setLastNameLogin(e.target.value);
                                           }}
                                    />
                                </div>
                                <div className="patronymicLogin">
                                    <h4>Отчество</h4>
                                    <input type="text" className="patronymicLogin" value={props.patronymicLogin}
                                           disabled={!btnChangeInfo}
                                           onChange={(e) => {
                                               props.setPatronymicLogin(e.target.value)
                                           }}
                                    />
                                </div>
                                <div className="organizationLogin">
                                    <h4>Организация</h4>
                                    <input type="text" className="organizationLogin" value={props.organizationLogin}
                                           disabled={!btnChangeInfo}
                                           onChange={(e) => {
                                               props.setOrganizationLogin(e.target.value)
                                           }}
                                    />
                                </div>
                                <div className="mailLogin">
                                    <h4>Маил</h4>
                                    <input type="text" className="mailLogin" value={props.mailLogin}
                                           disabled={!btnChangeInfo}
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

        </div>


    );
};

export default MenuSidebar;