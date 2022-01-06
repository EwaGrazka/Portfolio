import React from 'react';
import './Icon.scss';

const Icon = ({ icon, fontsize }) => {

    return (
        <div style={{ fontSize: fontsize }} className='icon-container'>
            {icon}
        </div>
    );
};

export default Icon;
