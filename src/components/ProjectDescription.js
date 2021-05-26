import React from 'react'
import {Header, List, Segment} from 'semantic-ui-react'
import styled from 'styled-components'
import { DiJavascript1, DiRor, DiPostgresql, DiReact, DiRedux } from 'react-icons/di'
import { Icon } from '@iconify/react';
import reduxIcon from '@iconify-icons/simple-icons/redux';
import graphqlIcon from '@iconify-icons/logos/graphql';



const ProjectDescription = ({ name }) => {

    const projectObject = {
        MyDnD: {
            title: 'My DnD',
            technologies: ['React', 'Redux', 'Javascript', 'Ruby on Rails', 'GraphQL'],
            description: ['Dungeons and Dragons Character Creator focusing on user experience and accessbility to new players', 'Incorporates GraphQL and Redux to query the DnD database and preserve updates to character choices in a controlled manner', 'Fully editable character sheet and tooltip pop-ups for beginner players'],
            color: 'red'
        },
        ApartmentHunter: {
            title: 'Apartment Hunter',
            technologies: ['React', 'Javascript', 'Ruby on Rails', 'PostgreSQL'],
            description: ['Apartment listing application for renters, similar to Zillow or StreetEasy', "Integrated with the Google Maps API", 'Users can search, sort, filter, and favorite any listings they come across'],
            color: 'blue'
        },
        MiddleSchoolMadness: {
            title: 'Middle School Madness',
            technologies: ['Javascript', 'Ruby on Rails', 'PostgreSQL', 'HTML & CSS'],
            description: ['Maze-like RPG game where users collect items and fight enemies to escape middle school', "Utilizes CSS grid properties and Javascript to move characters and enter battle arenas", 'Customized dialogue text scrolls, level-up mechanics, and usable item pickups'],
            color: 'yellow'
        }
    }

    const H2 = styled.h2`
        font-family: Optima, sans-serif;
        color: #0096c7;
    `;

    const myDnDIcons = (
    <>
        <DiReact size={50} color='#66ccff'/> 
        <Icon icon={reduxIcon} color="#9966cc" />
        <Icon icon={graphqlIcon} />
        <DiJavascript1 size={50} color='yellow'/> 
        <DiRor size={50} color='red' borderColor='black'/>
        <DiPostgresql size={50} color='black'/> 
    </>
    )

    const apartmentHunterIcons = (
        <>
            <DiReact size={50} color='#66ccff'/> 
            <DiJavascript1 size={50} color='yellow'/> 
            <DiRor size={50} color='red' borderColor='black'/>
            <DiPostgresql size={50} color='black'/> 
        </>
        )


    const featureList = projectObject[name].description.map(feature => <List.Item>{feature}</List.Item> )

    return (
        <Segment color={projectObject[name].color} style={{backgroundColor: '#e0e0e0'}}>
            <H2>
                {projectObject[name].title}
            </H2>
            {/* <Header as='h5'>{projectObject[name].technologies.join(', ')}</Header> */}
            {name === 'MyDnD' && myDnDIcons}
            <List bulleted relaxed='very' style={{color: '#0077b6', fontFamily: 'Georgia, serif', fontSize: '1.5em'}}>
                {featureList}
            </List>
            
        </Segment>
    )
}

export default ProjectDescription
