import React from 'react'
import { Segment, Header, Image } from 'semantic-ui-react'
import HomeLinks from './HomeLinks'
import Max from '../images/Max.png'

const Home = () => {
    return (
        <>
            <Header as='h1' textAlign='center'>Home</Header>
            <Image src={Max} size='medium' circular centered/>
            <Segment basic textAlign='justified' style={{width: '100vw', fontSize: '1.5em'}}>
                <p>Hello, my name is Max Beneke and I am a <strong>fullstack software engineer</strong> with a strong interest in <strong>UI/UX design</strong> and frontend frameworks that make an application easier to both code and use. My background in writing ensures that I am <strong>detail-oriented</strong> and dedicated to <strong>creative problem solving</strong>. My experience performing comedy placed within me a prediliction toward <strong>community and empathy</strong> that is valuable whenever I am working with a team of diverse people striving toward a common goal. </p>
            </Segment>
            <Segment basic textAlign='center'>
            <HomeLinks />
            </Segment>
        </>
    )
}

export default Home
