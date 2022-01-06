import React from 'react';
import { Link } from "react-router-dom";
import Title from '../../elements/Title/Title';
import './CommonButton.scss';
import Icon from '../Icon/Icon'

const CommonButton = ({ title, icon, reverse, fontsize, pathname }) => {

    return (
        <Link to={{ pathname: pathname }}>
            <div style={{ flexDirection: reverse ? 'row-reverse' : 'row' }} className='button-container'>
                <Title title={title} />
                <Icon icon={icon} fontsize={fontsize} />
            </div>
        </Link >
    );
};

export default CommonButton;
