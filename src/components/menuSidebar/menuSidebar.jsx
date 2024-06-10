import React from 'react';
import './menuSidebar.css';
import ModalProfile from "../modalProfile/modalProfile";
import ArchiveProfile from "../archiveProfile/archiveProfile";

const MenuSidebar = (props) => {



















    return (
        <>
            <div className="menu">
                <ModalProfile
                    pageProfile={props.pageProfile}   //     открытие страницы профиля
                    setPageProfile={props.setPageProfile}
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
                />
            </div>




        </>


    );
};

export default MenuSidebar;