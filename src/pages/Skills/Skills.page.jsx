import React, { useEffect } from 'react';
import './Skills.style.scss';
import CommonButton from '../../elements/CommonButton/CommonButton'
import GoBackButton from '../../elements/GoBackButton/GoBackButton';
import Title from '../../elements/Title/Title';

import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
        AOS.refresh();
    }, []);

    return (
        <div data-aos="zoom-in" style={{ textAlign: 'center' }}>
            <Title title={'skills'} />

            <div className='skills-container'>

                <CommonButton title='go hard' icon='t' reverse fontsize={'300px'} pathname='/hard-skills' />
                <CommonButton title='go soft' icon='j' fontsize={'300px'} pathname='/soft-skills' />

            </div>
            <GoBackButton />
        </div>
    );
};

export default Skills;