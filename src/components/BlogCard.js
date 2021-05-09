import React from 'react'
import { Card, Image} from 'semantic-ui-react'

const BlogCard = ({ blog }) => {



    return (
        <Card onClick={() => window.open(blog.link, '_blank')}>
            <Image src={blog.thumbnail} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{blog.title}</Card.Header>
                <Card.Meta>{new Date(blog.pubDate).toDateString()}</Card.Meta>
            </Card.Content>
            
        </Card>
    )
}

export default BlogCard
