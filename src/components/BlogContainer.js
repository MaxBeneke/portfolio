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
        <div style={{position: 'absolute', top: '20%'}}>
            <Header textAlign='center' as='h1' style={{fontFamily: 'Optima, sans-serif', fontSize: '3em', textShadow: '2px 2px 2px black', color: '#0096c7'}}>
                Blogs
            </Header>
            <Segment basic style={{maxHeight: '70vh'}}>
                <Card.Group itemsPerRow={4}>
                    {displayedBlogs}
                </Card.Group>      
                </Segment>
        </div>
    )
}

export default BlogContainer
