import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import ProjectCard from './ProjectCard'
import ProjectDescription from './ProjectDescription'

const ProjectPage = () => {
    return (
        <div>
            <Segment basic>
                <Grid columns={2}>
                    <Grid.Column width={6}>
                        <ProjectCard key='MyDnD' name='MyDnD' />
                    </Grid.Column>
                    <Grid.Column textAlign='center' stretched width={10}>
                        <ProjectDescription key='MyDnD' name='MyDnD' />
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment basic>
                <Grid columns={2}>
                    <Grid.Column width={6}>
                        <ProjectCard key='ApartmentHunter' name='ApartmentHunter' />   
                    </Grid.Column>
                    <Grid.Column textAlign='center' stretched width={10}>
                        <ProjectDescription key='ApartmentHunter' name='ApartmentHunter' />   
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment basic>
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
