import React from 'react';
import './Title.scss';

const Title = ({ title }) => {

    return (
        <h3 className='title'>
            {title}
        </h3>
    );
};

export default Title;
