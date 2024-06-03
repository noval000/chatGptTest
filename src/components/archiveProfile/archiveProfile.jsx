import React from 'react';
import Popup from "reactjs-popup";
import './archiveProfile.css';

const ArchiveProfile = (props) => {




    return (

        <Popup open={props.open2} closeOnDocumentClick closeModalProfile={props.closeModalProfile}>
            <div className="modal archiveModal">
                <div className="closeModal" onClick={props.closeModalProfile}>
                    &times;
                </div>
                <div className="headerModal scrollModalSession">
                    <div className="headerModalTitle fixedSession">
                        <h4>Прошлые сессии</h4>
                    </div>
                    <div className="AllSession">
                        {
                            props.archiveSession.map(el => (
                                <ul className="listsArchiveSession">
                                    <li className="listArchiveSession">
                                        {el.title}
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