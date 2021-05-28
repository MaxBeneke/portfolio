import React from 'react'
import {Popup, List, Segment} from 'semantic-ui-react'
import styled from 'styled-components'
import { DiJavascript1, DiRor, DiPostgresql, DiReact } from 'react-icons/di'
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
            description: ['RPG game where users collect items and fight enemies to escape middle school', "Utilizes CSS grid properties and Javascript to move characters and enter battle arenas", 'Customized dialogue text scrolls, level-up mechanics, and usable item pickups'],
            color: 'yellow'
        }
    }

    const H2 = styled.h2`
        font-family: Optima, sans-serif;
        color: #0096c7;
        text-shadow: 2px 2px 3px black;
    `;

    const myDnDIcons = (
    <>
        <Popup 
        trigger={<Icon icon={reduxIcon} width='2.75em' height='2.75em' color="#9966cc" style={{marginBottom: '.4em'}}/>}
        content='Redux'
        inverted
        size='mini'
        position='bottom center'
        style={{opacity: '0.8'}}
        />
        <Popup 
        trigger={<DiReact size={50} color='#66ccff'/>} 
        content='React'
        inverted
        size='mini'
        position='bottom center'
        style={{opacity: '0.8'}}
        />
        <Popup 
        trigger={<DiJavascript1 size={50} color='yellow'/> } 
        content='Javascript'
        inverted
        size='mini'
        position='bottom center'
        style={{opacity: '0.8'}}
        />
        <Popup 
        trigger={<DiRor size={50} color='red'/>} 
        content='Ruby on Rails'
        inverted
        size='mini'
        position='bottom center'
        style={{opacity: '0.8'}}
        />
         <Popup 
        trigger={<DiPostgresql size={50} color='black'/>} 
        content='Postgresql'
        inverted
        size='mini'
        position='bottom center'
        style={{opacity: '0.8'}}
        />
         <Popup 
        trigger={<Icon icon={graphqlIcon} width='2.75em' height='2.75em' style={{marginBottom: '.4em'}} />} 
        content='GraphQL'
        inverted
        size='mini'
        position='bottom center'
        style={{opacity: '0.8'}}
        />
    </>
    )

    const apartmentHunterIcons = (
    <>
        <Popup 
        trigger={<DiReact size={50} color='#66ccff'/>} 
        content='React'
        inverted
        size='mini'
        position='bottom center'
        style={{opacity: '0.8'}}
        />
        <Popup 
        trigger={<DiJavascript1 size={50} color='yellow'/> } 
        content='Javascript'
        inverted
        size='mini'
        position='bottom center'
        style={{opacity: '0.8'}}
        />
        <Popup 
        trigger={<DiRor size={50} color='red'/>} 
        content='Ruby on Rails'
        inverted
        size='mini'
        position='bottom center'
        style={{opacity: '0.8'}}
        />
         <Popup 
        trigger={<DiPostgresql size={50} color='black'/>} 
        content='Postgresql'
        inverted
        size='mini'
        position='bottom center'
        style={{opacity: '0.8'}}
        />
    </>
    )

    const middleSchoolMadnessIcons = (
    <>
        <Popup 
        trigger={<DiJavascript1 size={50} color='yellow'/> } 
        content='Javascript'
        inverted
        size='mini'
        position='bottom center'
        style={{opacity: '0.8'}}
        />
        <Popup 
        trigger={<DiRor size={50} color='red'/>} 
        content='Ruby on Rails'
        inverted
        size='mini'
        position='bottom center'
        style={{opacity: '0.8'}}
        />
         <Popup 
        trigger={<DiPostgresql size={50} color='black'/>} 
        content='Postgresql'
        inverted
        size='mini'
        position='bottom center'
        style={{opacity: '0.8'}}
        />
    </>
    )


    const featureList = projectObject[name].description.map(feature => <List.Item>{feature}</List.Item> )

    return (
        <Segment basic >
            <H2>
                {projectObject[name].title}
            </H2>
            {name === 'MyDnD' && myDnDIcons}
            {name === 'ApartmentHunter' && apartmentHunterIcons}
            {name === 'MiddleSchoolMadness' && middleSchoolMadnessIcons}
            <List bulleted relaxed='very' style={{color: '#3399ff', fontFamily: 'Georgia, serif', fontSize: '1.5em', textShadow: '2px 2px 3px black'}}>
                {featureList}
            </List>
            
        </Segment>
    )
}

export default ProjectDescription
