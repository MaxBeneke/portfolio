import React from 'react'
import { Header, Segment, Icon } from 'semantic-ui-react'

const ContactPage = () => {
    return (
        <div style={{position: 'fixed', left: '35%', top: '25%'}}>
        <Segment verticalAlign='middle' raised circular color='blue' style={{textAlign: 'center', marginTop: '10em'}}>
            <Header textAlign='center' as='h1' style={{fontSize: '4em'}}>Contact</Header>

            <Segment basic>
                <Header as='h2'>Send me an email!</Header>
                <a href='mailto:max.beneke@gmail.com' target='_blank' rel='noreferrer'>max.beneke@gmail.com</a>
            </Segment>

            <Segment basic>
                <Header as='h3'>Or connect with me on these platforms.</Header>
                <a href='https://www.linkedin.com/in/maxbeneke/' target='_blank' rel='noreferrer'>
                    <Icon size='big' name='linkedin'/> 
                </a>
                <a href='https://github.com/MaxBeneke' target='_blank' rel='noreferrer'>
                    <Icon size='big' name='github' color='black'/> 
                </a>
                <a href='https://max-beneke.medium.com/' target='_blank' rel='noreferrer'>
                    <Icon size='big' name='medium' color='black'/> 
                </a>
            </Segment>
            
        </Segment>
        </div>
    )
}

export default ContactPage
