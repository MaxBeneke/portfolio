import React, { useEffect, useState } from 'react'

const BlogContainer = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=> {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40max-beneke')
            .then(r => r.json())
            .then(data => setBlogs(data.items))
    }, [])

    const displayedBlogs = blogs.map(blog => {
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
