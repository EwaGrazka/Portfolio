import React from 'react';
import Title from '../Title/Title';
import './ProjectBox.scss';

const ProjectBox = ({
    title,
    link,
    technologies,
}) => {

    return (

        <div className='project-box-container'>
            <a target="_blank" rel="noopener noreferrer" href={link}>
                <div className='title-container'>
                    <Title title={title} />
                </div>
                <p className='technologies'>{technologies}</p>

            </a>
        </div >

    );
};

export default ProjectBox;