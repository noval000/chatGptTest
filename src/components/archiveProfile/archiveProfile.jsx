import React, {useState} from 'react';
import Popup from "reactjs-popup";
import './archiveProfile.css';

const ArchiveProfile = (props) => {



    const [open2, setOpen2] = useState(false);


    const closeModalArchive = () => {

        setOpen2(!open2);
    }



    return (
        <>
            <button className="btnArchive"
                    onClick={(e) => {
                        setOpen2(!open2);
                        console.log('fff');
                    }}
            >Архив
            </button>
            <Popup open={open2} closeOnDocumentClick closeModalProfile={closeModalArchive}>
                <div className="modal archiveModal">
                    <div className="closeModal" onClick={closeModalArchive}>
                        &times;
                    </div>
                    <div className="headerModal scrollModalSession">
                        <div className="headerModalTitle fixedSession">
                            <h4>Прошлые сессии</h4>
                        </div>
                        <div className="AllSession">
                            {
                                props.archiveSession.map(el => (
                                    <ul key={el.id}
                                        className="listsArchiveSession">
                                        <li className="listArchiveSession">
                                            <div className="nameSess">
                                                {el.title}
                                            </div>
                                            <div className="timeSess">
                                                {
                                                    new Date(el.datetime_last_update).getDay() +
                                                    "." + new Date(el.datetime_last_update).getMonth() +
                                                    "." + new Date(el.datetime_last_update).getFullYear()
                                                    + ' ' + new Date(el.datetime_last_update).getHours()
                                                    + ':' + new Date(el.datetime_last_update).getMinutes()
                                                }
                                            </div>
                                        </li>
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Popup>
        </>
    );
};

export default ArchiveProfile;