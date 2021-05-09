import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'

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
            {displayedBlogs}
        </div>
    )
}

export default BlogContainer
