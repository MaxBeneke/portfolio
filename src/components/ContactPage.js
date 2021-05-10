import React from 'react'
import { Header, Segment, Icon } from 'semantic-ui-react'

const ContactPage = () => {
    return (
        <div>
            <Header as='h1'>Contact</Header>

            <Segment basic>
                <Header as='h3'>Send me an email!</Header>
                <a href='mailto:max.beneke@gmail.com' target='_blank' rel='noreferrer'>max.beneke@gmail.com</a>
            </Segment>

            <Segment basic>
                <Header as='h3'>Or connect with me on these platforms.</Header>
                <a href='https://www.linkedin.com/in/maxbeneke/' target='_blank' rel='noreferrer'>
                    <Icon name='linkedin'/> 
                </a>
                <a href='https://github.com/MaxBeneke' target='_blank' rel='noreferrer'>
                    <Icon name='github' color='black'/> 
                </a>
                <a href='https://max-beneke.medium.com/' target='_blank' rel='noreferrer'>
                    <Icon name='medium' color='black'/> 
                </a>
            </Segment>
            
        </div>
    )
}

export default ContactPage
