import React from 'react';
import Popup from "reactjs-popup";
import './archiveProfile.css';

const ArchiveProfile = (props) => {


    return (

        <Popup open={props.open} closeOnDocumentClick closeModalProfile={props.closeModalProfile}>
            <div className="modal archiveModal">
                <div className="closeModal" onClick={() => {
                    props.setOpen(false);
                    console.log(props.open)
                    console.log('ggg')
                }}>
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
    );
};

export default ArchiveProfile;