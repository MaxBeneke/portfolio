import React from 'react'

import { Icon } from 'semantic-ui-react'

const HomeLinks = () => {
    return (
        <div>
            <a href='https://www.linkedin.com/in/maxbeneke/' target='_blank' rel='noreferrer'>
                <Icon name='linkedin' color='black' size='big'/> 
            </a>
            <a href='https://github.com/MaxBeneke' target='_blank' rel='noreferrer'>
                <Icon name='github' color='black' size='big'/> 
            </a>
            <a href='https://max-beneke.medium.com/' target='_blank' rel='noreferrer'>
                <Icon name='medium' color='black' size='big'/> 
            </a>
        </div>
    )
}

export default HomeLinks
