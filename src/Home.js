import React from 'react'
import { Segment } from 'semantic-ui-react'
import HomeLinks from './HomeLinks'

const Home = () => {
    return (
        <Segment padded basic>
            <p>Hello, my name is Max Beneke and I am a fullstack software engineer with a strong interest in UI/UX design and frontend frameworks that make an application easier to both code and use. My background in writing ensures that I am <strong>detail-oriented</strong> and dedicated to <strong>creative problem solving</strong>. My experience performing comedy placed within me a prediliction toward community and empathy that is valuable whenever I am working with a team of diverse people striving toward a common goal. </p>
            <HomeLinks />
        </Segment>
    )
}

export default Home
