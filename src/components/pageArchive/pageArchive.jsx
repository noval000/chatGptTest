import React from 'react';
import './pageArchive.css';

const PageArchive = (props) => {
    return (
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
    );
};

export default PageArchive;