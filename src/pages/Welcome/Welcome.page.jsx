import React from 'react';
import CommonButton from '../../elements/CommonButton/CommonButton';
import Title from '../../elements/Title/Title';
import './Welcome.style.scss';

const Welcome = () => {

    return (
        <div className='welcome-container'>

            <Title title='hi!' />
            <Title title="i am ewa," />
            <Title title='front-end developer, ui designer, editor, psychologist, therapist' />
            <CommonButton title='let&#39;s begin' icon='E' pathname='/choice' />
        </div>
    );
};

export default Welcome;
