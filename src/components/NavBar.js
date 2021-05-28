import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import Resume from '../images/Resume.pdf'

const NavBar = () => {
    const [clicked, setClicked] = useState('')

    return (
        <Menu secondary color='blue' size='large' style={{fontFamily: 'Verdana, sans-serif'}}>
            <Menu.Item
                name='home'
                active={clicked === 'home'}
                onClick={() => setClicked('home')}
            >
                <NavLink to='/home'>Home</NavLink>
            </Menu.Item>
            <Menu.Item
                name='projects'
                active={clicked === 'projects'}
                onClick={() => setClicked('projects')}
            >
                <NavLink to='/projects'>Projects</NavLink>
            </Menu.Item>
            <Menu.Item
                name='blogs'
                active={clicked === 'blogs'}
                onClick={() => setClicked('blogs')}
            >
                <NavLink to='/blogs'>Blogs</NavLink>
            </Menu.Item>
            <Menu.Item
                name='contact'
                active={clicked === 'contact'}
                onClick={() => setClicked('contact')}
            >
                <NavLink to='/contact'>Contact</NavLink>   
            </Menu.Item>
            <Menu.Item>
                <a href={Resume} target='_blank' rel='noreferrer'>Resume</a>
            </Menu.Item>
        </Menu>
    )
}

export default NavBar
