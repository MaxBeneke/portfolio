import React from 'react'
import {Header, List, Segment} from 'semantic-ui-react'

const ProjectDescription = ({ name }) => {

    const projectObject = {
        MyDnD: {
            title: 'My DnD',
            technologies: ['React', 'Redux', 'Javascript', 'Ruby on Rails', 'GraphQL'],
            description: ['Dungeons and Dragons Character Creator focusing on user experience and accessbility to new players', 'Incorporates GraphQL and Redux to query the DnD database and preserve updates to character choices in a controlled manner', 'Fully editable character sheet and tooltip pop-ups for beginner players']
        },
        ApartmentHunter: {
            title: 'Apartment Hunter',
            technologies: ['React', 'Javascript', 'Ruby on Rails', 'PostgreSQL'],
            description: ['Apartment listing application for renters, similar to Zillow or StreetEasy', "Integrated with the Google Maps API", 'Users can search, sort, filter, and favorite any listings they come across']
        },
        MiddleSchoolMadness: {
            title: 'Middle School Madness',
            technologies: ['Javascript', 'Ruby on Rails', 'PostgreSQL', 'HTML & CSS'],
            description: ['Maze-like RPG game where users collect items and fight enemies to escape middle school', "Utilizes CSS grid properties and Javascript to move characters and enter battle arenas", 'Customized dialogue text scrolls, level-up mechanics, and usable item pickups']
        }
    }

    const featureList = projectObject[name].description.map(feature => <List.Item>{feature}</List.Item> )

    return (
        <Segment>
            <Header as='h2'>
                {projectObject[name].title}
            </Header>
            <Header as='h5'>{projectObject[name].technologies.join(', ')}</Header>
            <List bulleted relaxed='very'>
                {featureList}
            </List>
            
        </Segment>
    )
}

export default ProjectDescription