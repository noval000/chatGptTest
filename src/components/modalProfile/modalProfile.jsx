import React, {useState} from 'react';
import Popup from "reactjs-popup";
import './modalProfile.css';

const ModalProfile = (props) => {


    // const [open, setOpen] = useState(false);
    //
    // const [btnChangeInfo, setBtnChangeInfo] = useState(false);   //  разблочивание инпутов для редактирования
    // const closeModalProfile = () => {
    //     setOpen(false)
    //     setBtnChangeInfo(false);
    // }




    return (
        <>
            <button className="btnProfile"
                    onClick={(e) => {
                        props.setPageProfile(true)
                        console.log(props.pageProfile)
                        // setOpen(o => !o)
                    }}
            >Профиль
            </button>
            {/*<Popup open={open} closeOnDocumentClick closeModalProfile={closeModalProfile}>*/}
            {/*    <div className="modal profileModal">*/}
            {/*        <div className="closeModal">*/}
            {/*            &times;*/}
            {/*        </div>*/}
            {/*        <div className="headerModal">*/}
            {/*            <div className="headerModalTitle">*/}
            {/*                <h4>Профиль</h4>*/}
            {/*            </div>*/}
            {/*            <button*/}
            {/*                className={btnChangeInfo ? 'noneBtnChange' : 'changeInfoBtn'}*/}
            {/*                onClick={() => {*/}
            {/*                    setBtnChangeInfo(!btnChangeInfo);*/}
            {/*                }}*/}
            {/*            >*/}
            {/*                Изменить данные*/}
            {/*            </button>*/}
            {/*            <button className={btnChangeInfo ? 'changeInfoBtn activeColor' : 'noneBtnChange'}*/}
            {/*                    onClick={() => {*/}
            {/*                        setBtnChangeInfo(!btnChangeInfo);*/}
            {/*                    }}*/}
            {/*            >*/}
            {/*                Сохранить данные*/}
            {/*            </button>*/}
            {/*            <div className="changeUserProfile">*/}
            {/*                <form action="" id="userProfile">*/}
            {/*                    <div className="name">*/}
            {/*                        <h4>Имя</h4>*/}
            {/*                        <input type="text" className="firstname" value={props.firstname || ''}*/}
            {/*                               disabled={!btnChangeInfo}*/}
            {/*                               onChange={(e) => {*/}
            {/*                                   props.setFirstName(e.target.value);*/}
            {/*                               }}*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                    <div className="lastname">*/}
            {/*                        <h4>Фамилия</h4>*/}
            {/*                        <input type="text" className="lastname" value={props.lastname || ''}*/}
            {/*                               disabled={!btnChangeInfo}*/}
            {/*                               onChange={(e) => {*/}
            {/*                                   props.setLastNameLogin(e.target.value);*/}
            {/*                               }}*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                    <div className="patronymicLogin">*/}
            {/*                        <h4>Отчество</h4>*/}
            {/*                        <input type="text" className="patronymicLogin" value={props.patronymicLogin || ''}*/}
            {/*                               disabled={!btnChangeInfo}*/}
            {/*                               onChange={(e) => {*/}
            {/*                                   props.setPatronymicLogin(e.target.value)*/}
            {/*                               }}*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                    <div className="organizationLogin">*/}
            {/*                        <h4>Организация</h4>*/}
            {/*                        <input type="text" className="organizationLogin" value={props.organizationLogin || ''}*/}
            {/*                               disabled={!btnChangeInfo}*/}
            {/*                               onChange={(e) => {*/}
            {/*                                   props.setOrganizationLogin(e.target.value)*/}
            {/*                               }}*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                    <div className="mailLogin">*/}
            {/*                        <h4>Маил</h4>*/}
            {/*                        <input type="text" className="mailLogin" value={props.mailLogin || ''}*/}
            {/*                               disabled={!btnChangeInfo}*/}
            {/*                               onChange={(e) => {*/}
            {/*                                   props.setMailLogin(e.target.value)*/}
            {/*                               }}*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                </form>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</Popup>*/}
        </>
    );
};

export default ModalProfile;