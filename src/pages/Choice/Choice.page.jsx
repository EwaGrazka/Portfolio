import React, { useEffect, useState } from 'react';
import Box from '../../elements/Box/Box';
import Footer from '../../elements/Footer/Footer'
import './Choice.style.scss';

import AOS from "aos";
import "aos/dist/aos.css";
import Title from '../../elements/Title/Title';
import CommonButton from '../../elements/CommonButton/CommonButton';

import skillsIMG from '../../img/skills.jpg';
import projectsIMG from '../../img/projects.jpg';
import githubIMG from '../../img/github.jpg';
import contactIMG from '../../img/contact.jpg';

const Choice = () => {
    const [isContact, setIsContact] = useState(false)
    useEffect(() => {
        AOS.init({
            duration: 1500
        });
        AOS.refresh();
    }, []);

    return (
        <div className='choice-page'>
            <div data-aos="zoom-in" className='title-container'>
                <Title title='ewa grązka' />
                <Title title='front-end developer, ui designer, editor, psychologist, therapist' />
            </div>
            <div className='choice-container'>
                <Box icon={projectsIMG} title='projects' pathname='/projects' />
                <Box icon={skillsIMG} title='skills' pathname='/skills' />
                <Box icon={contactIMG} title='contact' pathname='/contact' setIsContact={setIsContact} isContact={isContact} />
                <Box icon={githubIMG} title='github' pathname='/github' />
            </div>
            {isContact ? <div data-aos="zoom-in" className='email-container'>ewa-grazka@wp.pl <button onClick={() => { navigator.clipboard.writeText('ewa-grazka@wp.pl') }}>copy
            </button>
            </div> : null}
            <Footer />
        </div>
    );
};

export default Choice;