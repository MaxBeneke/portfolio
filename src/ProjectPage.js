import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectPage = () => {
    return (
        <div>
            <ProjectCard key='MyDnD' name='MyDnD' />
            <ProjectCard key='ApartmentHunter' name='ApartmentHunter' />
            <ProjectCard key='MiddleSchoolMadness' name='MiddleSchoolMadness' />
        </div>
    )
}

export default ProjectPage
