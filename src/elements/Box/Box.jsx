import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Box.scss';

import Title from '../Title/Title';
import Icon from '../Icon/Icon';

import AOS from "aos";
import "aos/dist/aos.css";

const Box = ({ icon, title, pathname, setIsContact, isContact }) => {
    useEffect(() => {
        AOS.init({
            duration: 1500
        });
        AOS.refresh();
    }, []);

    return (
        <>
            {pathname === '/github' ?
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/EwaGrazka">
                    <div data-aos="zoom-in" className='box-container'>
                        <img src={icon} style={{ height: '150px' }} />
                        {/* <Icon icon={icon} /> */}
                        <Title title={title} />
                    </div>
                </a> : null}

            {pathname === '/contact' ?

                <div onClick={() => setIsContact(!isContact)} data-aos="zoom-in" className='box-container'>
                    <img src={icon} style={{ height: '150px' }} />

                    {/* <Icon icon={icon} /> */}
                    <Title title={title} />
                </div>

                : null}

            {pathname !== '/github' && pathname !== '/contact' ?
                <Link to={{ pathname: pathname }}>
                    <div data-aos="zoom-in" className='box-container'>
                        {/* <Icon icon={icon} /> */}
                        <img src={icon} style={{ height: '120px' }} />

                        <Title title={title} />
                    </div>
                </Link> : null}

        </>
    );
};

export default Box;
