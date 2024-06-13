import React from 'react';
import './archiveProfile.css';

const ArchiveProfile = (props) => {






    return (
        <>
            <button className="btnArchive"
                    onClick={(e) => {
                        props.setPageArchive(true)
                        props.setPageProfile(false);
                    }}
            >Архив
            </button>
        </>
    );
};

export default ArchiveProfile;