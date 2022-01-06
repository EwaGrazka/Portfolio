import React, { useEffect } from 'react';
import './SoftSkills.scss';


import AOS from "aos";
import "aos/dist/aos.css";
import GoBackButton from '../../elements/GoBackButton/GoBackButton';

const SoftSkills = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500
        });
        AOS.refresh();
    }, []);
    return (
        <div className='soft-skills-container'>
            <div data-aos="zoom-in" class="grid">
                <div class="grid-item"><div class="grid-inner">passion</div></div>
                <div class="grid-item"><div class="grid-inner">adaptable</div></div>
                <div class="grid-item"><div class="grid-inner">patient</div></div>
                <div class="grid-item"><div class="grid-inner">creative</div></div>
                <div class="grid-item"><div class="grid-inner">helpful</div></div>
                <div class="grid-item"><div class="grid-inner">Curious</div></div>
                <div class="grid-item"><div class="grid-inner">communicative</div></div>
                <div class="grid-item"><div class="grid-inner">team player</div></div>
                <div class="grid-item"><div class="grid-inner">Open-minded</div></div>
                <div class="grid-item"><div class="grid-inner">Solution-oriented</div></div>
                <div class="grid-item"><div class="grid-inner">Organized</div></div>
                <div class="grid-item"><div class="grid-inner">Trustworthy</div></div>
                <div class="grid-item"><div class="grid-inner">ambitious</div></div>
            </div>
            <GoBackButton />
        </div>
    );
};

export default SoftSkills;
