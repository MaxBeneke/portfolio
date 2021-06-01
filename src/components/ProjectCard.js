import React from 'react'
import MyDnD from '../images/MyDnD.png'
import ApartmentHunter from '../images/ApartmentHunter.png'
import MiddleSchoolMadness from '../images/MiddleSchoolMadness.png'
import { Card, Image, Button } from 'semantic-ui-react'
import styled from 'styled-components'

const ProjectCard = ({ name }) => {

    const projectObject = {
        MyDnD: {
            title: 'My DnD', 
            image: MyDnD,
            frontend: 'https://github.com/MaxBeneke/my-dnd-frontend',
            backend: 'https://github.com/MaxBeneke/my-dnd-backend', 
            demo: 'https://www.youtube.com/watch?v=po-bz8Kg-Hc',
            color: 'red'
        },
        ApartmentHunter: {
            title: 'Apartment Hunter', 
            image: ApartmentHunter, 
            frontend: 'https://github.com/MaxBeneke/apartment-hunter-frontend', 
            backend: 'https://github.com/MaxBeneke/apartment-hunter-backend', 
            demo: 'https://www.youtube.com/watch?v=BSCTo1A1hZk',
            color: 'blue'
        },
        MiddleSchoolMadness: {
            title: 'Middle School Madness', 
            image: MiddleSchoolMadness, 
            frontend: 'https://github.com/MaxBeneke/dungeon-crawler-frontend', 
            backend: 'https://github.com/MaxBeneke/dungeon-crawler-backend', 
            demo: 'https://www.youtube.com/watch?v=Cgg3gyw4XgU',
            color: 'yellow'
        }
    }

    const H2 = styled.h2`
    font-family: Optima, sans-serif;
    color: #0096c7;
    text-align: center;
    text-shadow: 1px 1px 1px black
    `

    return (
        <Card raised fluid color={projectObject[name].color} >
            <Image src={projectObject[name].image} size='big' />
            <Card.Content extra>
            <H2>{projectObject[name].title}</H2>
            <Button.Group fluid>
                <Button color='violet' onClick={()=>window.open(projectObject[name].frontend, '_blank')}>Frontend</Button>
                <Button color='blue' onClick={()=>window.open(projectObject[name].backend, '_blank')}>Backend</Button>
                <Button color='black' onClick={()=>window.open(projectObject[name].demo, '_blank')}>Demo</Button>
            </Button.Group>
            </Card.Content>
        </Card>
    )
}

export default ProjectCard
