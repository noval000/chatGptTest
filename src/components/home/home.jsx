import React from 'react';
import Sidebar from "../sidebar/sidebar";
import MainSectionForm from "../mainSectionForm/mainSectionForm";

const Home = (props) => {





    return (
        <div>
            <Sidebar
                session={props.session}   // все сессии
            />
            <MainSectionForm
                firstname={props.firstname}  //   имя для приветствия
                session={props.session}    // все сессии
                setSession={props.setSession}    // изменение сессий
            />
        </div>
    );
};

export default Home;