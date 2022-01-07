import React, { useEffect } from 'react';
import CommonButton from '../../elements/CommonButton/CommonButton';
import Title from '../../elements/Title/Title';
import './Welcome.style.scss';

import AOS from "aos";
import "aos/dist/aos.css";

const Welcome = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
        AOS.refresh();
    }, []);

    return (
        <div data-aos="zoom-in" className='welcome-container'>

            <Title title='hi!' />
            <Title title="i am ewa," />
            <Title title='front-end developer, ui designer, editor, psychologist, therapist' />
            <CommonButton title='let&#39;s begin' icon='E' pathname='/choice' />
        </div>
    );
};

export default Welcome;
