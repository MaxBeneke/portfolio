import React from 'react'
import MyDnD from '../images/MyDnD.png'
import ApartmentHunter from '../images/ApartmentHunter.png'
import MiddleSchoolMadness from '../images/MiddleSchoolMadness.png'
import { Card, Image, Button } from 'semantic-ui-react'

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

    return (
        <Card raised fluid color={projectObject[name].color}>
            <Image src={projectObject[name].image} size='big' />
            <Card.Content extra>
            <Card.Header as='h2' textAlign='center'>{projectObject[name].title}</Card.Header>
                <Button onClick={()=>window.open(projectObject[name].frontend, '_blank')}>Frontend</Button>
                <Button onClick={()=>window.open(projectObject[name].backend, '_blank')}>Backend</Button>
                <Button onClick={()=>window.open(projectObject[name].demo, '_blank')}>Demo</Button>
            </Card.Content>
        </Card>
    )
}

export default ProjectCard
