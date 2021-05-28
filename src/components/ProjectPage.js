import React from 'react'
import { Segment, Grid, Header} from 'semantic-ui-react'
import ProjectCard from './ProjectCard'
import ProjectDescription from './ProjectDescription'

const ProjectPage = () => {
    return (
        <div style={{backgroundColor: '#4d4d4d', opacity: '0.8'}}>
            <Segment basic padded='very' >
                <Header as='h1' textAlign='center' style={{fontFamily: 'Optima, sans-serif', color: '#0096c7', fontSize: '4em', textShadow: '2px 2px 3px black'}}>Projects</Header>
                <Grid padded='vertically' divided='vertically' columns={2}>
                    <Grid.Column width={6}>
                        <ProjectCard key='MyDnD' name='MyDnD' />
                    </Grid.Column>
                    <Grid.Column textAlign='center' stretched width={10}>
                        <ProjectDescription key='MyDnD' name='MyDnD' />
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment basic padded='very'>
                <Grid columns={2}>
                    <Grid.Column width={6}>
                        <ProjectCard key='ApartmentHunter' name='ApartmentHunter' />   
                    </Grid.Column>
                    <Grid.Column textAlign='center' stretched width={10}>
                        <ProjectDescription key='ApartmentHunter' name='ApartmentHunter' />   
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment basic padded='very'>
                <Grid columns={2}>
                    <Grid.Column width={6}>
                        <ProjectCard key='MiddleSchoolMadness' name='MiddleSchoolMadness' />
                    </Grid.Column>
                    <Grid.Column textAlign='center' stretched width={10}>
                        <ProjectDescription key='MiddleSchoolMadness' name='MiddleSchoolMadness' />
                    </Grid.Column>
                </Grid>
            </Segment>
        </div>
    )
}

export default ProjectPage
