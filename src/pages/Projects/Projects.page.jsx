import React from 'react';
import GoBackButton from '../../elements/GoBackButton/GoBackButton';
import ProjectBox from '../../elements/ProjectBox/ProjectBox';
import Title from '../../elements/Title/Title';
import './Projects.style.scss';

const Projects = () => {

    return (
        <div className='project-boxes-container'>
            <Title title={'projects'} />
            <ProjectBox
                title='Late4Drop'
                link='https://late4drop.com/'
                technologies='REACT, REDUX, SASS'
                role='front-end developer'
                project=''
                team='5'
                frontTeam='2'
                responsibilities=''
            />
            <ProjectBox title='Laxx' link='https://tickets.laax.com/' technologies={'REACT, GRAPHQL, STORYBOOK, CSS, ADOBE XD'} role='react developer'
                project='Application - shop, where you can get the information about ticket offers and prices and book tickets for trips in Switzerland. It contains main page, buy ticket, checkout and user panel page.'
                team='5'
                front-team='2'
                responsibilities='' />
            <ProjectBox
                title='HiPets'
                link='https://hipets.pl/'
                technologies='REACT, REDUX, SASS, MATERIAL UI'
                role='react developer'
                project=''
                team='4'
                frontTeam='1'
                responsibilities='' />
            <ProjectBox title='Sunmetric App'
                link='https://www.linkedin.com/company/sunmetric/?originalSubdomain=pl'
                technologies='REACT, REDUX, REST API, WEBSOCKET, DOCKER, KEYCLOAK, SASS, MARVEL APP '
                role='front-end developer'
                project=''
                team='8'
                frontTeam='2'
                responsibilities='' />
            <ProjectBox
                title='Sunmetric Website'
                link='https://sunmetric.pl'
                technologies='REACT, SASS, MARVEL APP'
                role='front-end developer, ux/ui designer'
                project=''
                team='4'
                frontTeam='2'
                responsibilities='' />
            <GoBackButton />
        </div>
    );
};

export default Projects;