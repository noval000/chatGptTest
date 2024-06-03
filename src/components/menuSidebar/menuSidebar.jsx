import React, {useEffect, useState} from 'react';
import Popup from "reactjs-popup";
import './menuSidebar.css';
import axios from "axios";

const MenuSidebar = (props) => {



    const [profileModal, openProfileModal] = useState(false);

    useEffect(() => {
        const submitModalProfile = (e) => {
            // Данные для отправки на сервер
            const data = {

            };
            // Отправка данных на сервер
            axios.post('/api/profile', data)
                .then(response => {
                    console.log('Server response:', response.data);
                })
                .finally(() => {
                    openProfileModal(false);
                })
                .catch(error => {
                    console.error('There was an error sending the data!', error);
                });
        };

        if (profileModal === true) {
            submitModalProfile();
        }
    }, [profileModal]);    //  отправка запроса на регистрацию




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
            <a href="#">Архив</a>

            <Popup open={open} closeOnDocumentClick onClose={closeModalProfile}>
                <div className="modal profileModal">
                    <div className="closeModal" onClick={closeModalProfile}>
                        &times;
                    </div>
                    <div className="headerModal">

                    </div>
                    <form action="" id="changeName">
                        <input type="text" className="changeName" />
                        <input type="submit" onClick={(e) => {
                            const formChangeName = e.target.closest('#changeName');
                            formChangeName.addEventListener('submit' , e => {
                                e.preventDefault();
                            })
                        }}/>
                    </form>
                </div>
            </Popup>

        </div>


    );
};

export default MenuSidebar;