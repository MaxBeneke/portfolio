import React from 'react'
import { Segment, Header, Image } from 'semantic-ui-react'
import HomeLinks from './HomeLinks'
import Max from '../images/Max.png'


const Home = () => {

    return (
        <>
            <Header as='h1' textAlign='center' style={{fontFamily: 'Optima, sans-serif'}}>Home</Header>
            <Image src={Max} size='medium' circular centered/>
            <Segment basic textAlign='justified' style={{width: '100vw', fontSize: '1.75em', backgroundColor: '#4d4d4d', opacity: '0.8', fontFamily: 'Palatino, URW Palladio L, serif'}}>
                <p style={{textShadow: '2px 2px 2px black', color: '#3399ff'}}>Hello, my name is Max Beneke and I am a <strong style={{color: '#99ccff'}}>fullstack software engineer</strong> with a strong interest in <strong style={{color: '#99ccff'}}>UI/UX design</strong> and frontend frameworks that make an application easier to both code and use. My background in writing ensures that I am <strong style={{color: '#99ccff'}}>detail-oriented</strong> and dedicated to <strong style={{color: '#99ccff'}}>creative problem solving</strong>. My experience performing comedy placed within me a prediliction toward <strong style={{color: '#99ccff'}}>community and empathy</strong> that is valuable whenever I am working with a team of diverse people striving toward a common goal. </p>
            <Segment basic textAlign='center'>
            <HomeLinks />
            </Segment>
            </Segment>
        </>
    )
}

export default Home
