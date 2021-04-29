import React from 'react'
import { Segment } from 'semantic-ui-react'

const NavBar = () => {
    return (
        <Segment.Group>
            <Segment>Home</Segment>
            <Segment>Projects</Segment>
            <Segment>Contact</Segment>
            <Segment>Blogs</Segment>
        </Segment.Group>
    )
}

export default NavBar
