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
            demo: 'https://www.youtube.com/watch?v=po-bz8Kg-Hc'
        },
        ApartmentHunter: {
            title: 'Apartment Hunter', 
            image: ApartmentHunter, 
            frontend: 'https://github.com/MaxBeneke/apartment-hunter-frontend', 
            backend: 'https://github.com/MaxBeneke/apartment-hunter-backend', 
            demo: 'https://www.youtube.com/watch?v=BSCTo1A1hZk'
        },
        MiddleSchoolMadness: {
            title: 'Middle School Madness', 
            image: MiddleSchoolMadness, 
            frontend: 'https://github.com/MaxBeneke/dungeon-crawler-frontend', 
            backend: 'https://github.com/MaxBeneke/dungeon-crawler-backend', 
            demo: 'https://www.youtube.com/watch?v=Cgg3gyw4XgU'
        }
    }

    return (
        <Card>
            <Image src={projectObject[name].image} wrapped ui={false} />
            <Card.Header>{projectObject[name].title}</Card.Header>
            <Card.Content extra>
                <Button onClick={()=>window.open(projectObject[name].frontend, '_blank')}>Frontend</Button>
                <Button onClick={()=>window.open(projectObject[name].backend, '_blank')}>Backend</Button>
                <Button onClick={()=>window.open(projectObject[name].demo, '_blank')}>Demo</Button>
            </Card.Content>
        </Card>
    )
}

export default ProjectCard
