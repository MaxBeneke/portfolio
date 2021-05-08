import React from 'react'
import { Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <Segment.Group horizontal>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/blogs'>Blogs</NavLink>
        </Segment.Group>
    )
}

export default NavBar
