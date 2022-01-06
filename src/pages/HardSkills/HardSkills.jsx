import React, { useEffect } from 'react';
import './HardSkills.scss';

import AOS from "aos";
import "aos/dist/aos.css";
import GoBackButton from '../../elements/GoBackButton/GoBackButton';

const HardSkills = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
        AOS.refresh();
    }, []);

    return (
        <div className='hard-skills-container'>
            <div data-aos="zoom-in" class="grid">
                <div class="grid-item"><div class="grid-inner">rest api</div></div>
                <div class="grid-item"><div class="grid-inner">websocket</div></div>
                <div class="grid-item"><div class="grid-inner">graphql</div></div>
                <div class="grid-item"><div class="grid-inner">storybook</div></div>
                <div class="grid-item"><div class="grid-inner">material ui</div></div>
                <div class="grid-item"><div class="grid-inner">react</div></div>
                <div class="grid-item"><div class="grid-inner">JavaScript</div></div>
                <div class="grid-item"><div class="grid-inner">redux</div></div>
                <div class="grid-item"><div class="grid-inner">ux/ui</div></div>
                <div class="grid-item"><div class="grid-inner">sass</div></div>
                <div class="grid-item"><div class="grid-inner">adobe xd</div></div>
                <div class="grid-item"><div class="grid-inner">keycloak</div></div>
                <div class="grid-item"><div class="grid-inner">marvel app</div></div>
            </div>

            <GoBackButton />
        </div>
    );
};

export default HardSkills;
