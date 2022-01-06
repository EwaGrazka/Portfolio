import React, { useEffect, useState } from 'react';
import Box from '../../elements/Box/Box';
import Footer from '../../elements/Footer/Footer'
import './Choice.style.scss';

import AOS from "aos";
import "aos/dist/aos.css";

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
            <div className='choice-container'>
                <Box icon='F' title='projects' pathname='/projects' />
                <Box icon='C' title='skills' pathname='/skills' />
                <Box icon='A' title='contact' pathname='/contact' setIsContact={setIsContact} isContact={isContact} />
                <Box icon='H' title='github' pathname='/github' />
            </div>
            {isContact ? <div data-aos="zoom-in" className='email-container'>ewa-grazka@wp.pl <button onClick={() => { navigator.clipboard.writeText('ewa-grazka@wp.pl') }}>copy
            </button>
            </div> : null}
            <Footer />
        </div>
    );
};

export default Choice;