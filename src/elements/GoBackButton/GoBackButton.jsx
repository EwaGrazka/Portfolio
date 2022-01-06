import React from 'react';
import { Link } from 'react-router-dom';
import './GoBackButton.scss';

const GoBackButton = () => {

    return (
        <div className='go-back-button-container'>

            <Link to={'/choice'}>
                go home <span className='back-animal'>W</span>
            </Link>
        </div>
    );
};

export default GoBackButton;