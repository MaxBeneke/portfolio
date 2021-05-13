import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import { Header, Segment, Card } from 'semantic-ui-react'

const BlogContainer = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=> {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40max-beneke')
            .then(r => r.json())
            .then(data => setBlogs(data.items))
    }, [])
    
    const filteredBlogs = blogs.filter(blog => blog.categories.length !== 0)
    const displayedBlogs = filteredBlogs.map(blog => {
        return <BlogCard 
            key={blog.title}
            blog={blog}
        />
    })

    return (
        <div>
            <Header as='h1'>Blogs</Header>
            <Segment basic style={{width: '50em', maxHeight: '70vh'}}>
                <Card.Group itemsPerRow={3}>
                    {displayedBlogs}
                </Card.Group>      
                </Segment>
        </div>
    )
}

export default BlogContainer
