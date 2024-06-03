import React, {useEffect, useState} from 'react';
import './menuSidebar.css';
import ModalProfile from "../modalProfile/modalProfile";
import ArchiveProfile from "../archiveProfile/archiveProfile";

const MenuSidebar = (props) => {



    const [btnChangeInfo, setBtnChangeInfo] = useState(false);   //  разблочивание инпутов для редактирования







    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);




    const closeModalProfile = () => {
        setBtnChangeInfo(false);
        setOpen(false);
        setOpen2(false);
    }

    useEffect(() => {
        document.body.addEventListener('click' , closeModalProfile);    //   при клике вне модалки
    }, [open]);

    useEffect(() => {
        document.body.addEventListener('click' , closeModalProfile);    //   при клике вне модалки
    }, [open2]);


    return (
        <div className="menu">
            <button className="btnProfile"
                onClick={(e) => {
                    setOpen(!open);
                }}
            >Профиль
            </button>
            <button
                onClick={(e) => {
                    setOpen2(!open2);
                }}
            >Архив</button>

            <ModalProfile
                open={open}
                closeModalProfile={closeModalProfile}
                setBtnChangeInfo={setBtnChangeInfo}   //  разблочивание инпутов для редактирования
                btnChangeInfo={btnChangeInfo}
                firstname={props.firstname}   //  name
                setFirstName={props.setFirstName}
                lastname={props.lastname}    //   familiya
                setLastNameLogin={props.setLastNameLogin}
                patronymicLogin={props.patronymicLogin} //   otchestvo
                setPatronymicLogin={props.setPatronymicLogin}
                organizationLogin={props.organizationLogin}   //   organization
                setOrganizationLogin={props.setOrganizationLogin}
                mailLogin={props.mailLogin}  // mail
                setMailLogin={props.setMailLogin}
            />

            <ArchiveProfile
                setArchiveSession={props.setArchiveSession}
                archiveSession={props.archiveSession}   //   все архивные сессии
                open2={open2}
                closeModalProfile={closeModalProfile}
            />


        </div>


    );
};

export default MenuSidebar;